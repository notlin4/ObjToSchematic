import { Renderer } from "./renderer";
import { Mesh } from "./mesh";
import { VoxelManager } from "./voxel_manager";
import { Vector3 } from "./vector.js";
import { Schematic } from "./schematic";
//const dialog = from 'electron').remote.dialog;
import {remote} from 'electron'; 
import * as bootstrap from "bootstrap";

enum ToastColour {
    RED = "bg-danger",
    ORANGE = "bg-warning",
    GREEN = "bg-success"
}


export class AppContext {

    private _voxelSize: number;
    private _gl: WebGLRenderingContext;
    private _renderer: Renderer;
    private _voxelManager: VoxelManager;
    private _loadedMesh?: Mesh;

    private _toast: bootstrap.Toast;
    private _modal: bootstrap.Modal;


    constructor() {     
        this._voxelSize = $("#voxelInput").prop("value");
        
        const gl = (<HTMLCanvasElement>$("#c").get(0)).getContext("webgl");
        if (!gl) {
            throw Error("Could not load WebGL context");
        }
        this._gl = gl;

        this._renderer = new Renderer(this._gl);
        this._voxelManager = new VoxelManager(this._voxelSize);

        this._toast = new bootstrap.Toast(<HTMLElement>document.getElementById('toast'), {delay: 3000});
        this._modal = new bootstrap.Modal(<HTMLElement>document.getElementById('modal'), {});
    }

    public load() {
        const files = $("#fileInput").prop("files");

        if (files.length != 1) {
            return;
        }
    
        const file = files[0];
        if (!file.name.endsWith(".obj") && !file.name.endsWith(".OBJ")) {
            this._showToast("Files must be .obj format", ToastColour.RED);
            return;
        }
    
        try {
            this._loadedMesh = new Mesh(files[0].path, this._gl);
        } catch (err) {
            this._showToast(err.message, ToastColour.RED);
            console.log(err);
            return;
        }
        
        this._renderer.clear();
        this._renderer.registerMesh(this._loadedMesh);
        this._renderer.compile();
    
        $('#voxelInput').prop('disabled', false);
        $('#voxelBtn').prop('disabled', false);
        $('#splitBtn').prop('disabled', true);
        $('#exportBtnDisclaimer').prop('disabled', true);
    
        this._showToast(`Successfully loaded ${file.name}`, ToastColour.GREEN);
    }

    /*
    split() {
        this.voxelSize /= 2;
        $("#voxelInput").prop('value', this.voxelSize);

        this.voxelManager.splitVoxels();

        this.renderer.clear();
        this.renderer.registerVoxelMesh(this.voxelManager);
        this.renderer.compile();
    }
    */

    public voxelise() {
        const newVoxelSize = $("#voxelInput").prop('value');
        if (newVoxelSize < 0.001) {
            this._showToast("Voxel size must be at least 0.001", ToastColour.RED);
            return;
        }
        this._voxelSize = newVoxelSize;

        if (!this._loadedMesh) {
            return;
        }
        
        try {
            this._voxelManager.clear();
            this._voxelManager.setVoxelSize(this._voxelSize);
            this._voxelManager.voxeliseMesh(this._loadedMesh);
        
            this._renderer.clear();
            this._renderer.registerVoxelMesh(this._voxelManager);
            this._renderer.compile();
        } catch (err) {
            this._showToast(err.message, ToastColour.RED);
            return;
        }

        $('#exportBtnDisclaimer').prop('disabled', false);
        //$('#splitBtn').prop('disabled', false);
    
        this._showToast("Voxelised successfully", ToastColour.GREEN);
    }

    public exportDisclaimer() {
        const schematicHeight = Math.ceil(this._voxelManager.maxZ - this._voxelManager.minZ);
        console.log("HEIGHT:", schematicHeight);

        let message = `
            Currently, all blocks in the schematic are exported as Stone blocks. This will be changed in the future.
        `;
        if (schematicHeight > 320) {
            message += `<br><br> Note, this schematic is <b>${schematicHeight}</b> blocks tall, this is larger than the height of a Minecraft world (320 in 1.17, 256 in <=1.16).`
        }

        this._showModal("Warning", message);
    }

    public export() {
        this._modal.hide();

        const filePath = remote.dialog.showSaveDialogSync({
            title: "Save schematic",
            buttonLabel: "Save",
            filters: [{
                name: 'Schematic',
                extensions: ['schematic']
            }]
        });
    
        if (filePath === undefined) {
            console.error("no path");
            return;
        }
    
        try {
            const schematic = new Schematic(this._voxelManager);
            schematic.exportSchematic(filePath);
        } catch (err) {
            this._showToast("Failed to export schematic", ToastColour.RED);
            console.error(err);
            return;
        }
        
        this._showToast("Successfully saved schematic", ToastColour.GREEN);
    }


    public draw() {
        this._renderer.draw(this._voxelManager._voxelSize);
    }


    private _showToast(text: string, colour: ToastColour) {
        $("#toast").removeClass(ToastColour.RED);
        $("#toast").removeClass(ToastColour.ORANGE);
        $("#toast").removeClass(ToastColour.GREEN);
        $("#toast").addClass(colour);
    
        $("#toastText").html(text);
        //$("#toast").toast({ delay: 3000 });
        //$("#toast").toast('show');
        this._toast.show();
    }

    private _showModal(title: string, text: string) {
        $("#modalTitle").html(title);
        $("#modalText").html(text);

        //$("#modal").modal("show");
        this._modal.show();
    }

}

module.exports.AppContext = AppContext;