// Credits:
// LucasDower

export const en_GB = {
    display_name: 'British English',
    language_code: 'en_GB',
    translations: {
        something_went_wrong: 'Something unexpectedly went wrong',
        init: {
            initialising: 'Initialising...',
            ready: 'Ready',
        },
        settings: {
            heading: 'SETTINGS',
            components: {
                language: 'Language',
            },
            changing_language: 'Changing languages...',
            changed_language: 'Changed language',
        },
        import: {
            heading: '1. IMPORT',
            button: 'Load mesh',
            importing_mesh: 'Importing mesh...',
            imported_mesh: 'Imported mesh',
            rendering_mesh: 'Rendering mesh...',
            rendered_mesh: 'Rendered mesh',
            no_vertices_loaded: 'No vertices were loaded',
            no_triangles_loaded: 'No triangles were loaded',
            could_not_scale_mesh: 'Could not scale mesh correctly - mesh is likely 2D, rotate it so that it has a non-zero height',
            invalid_encoding: 'Unrecognised character found, please encode using UTF-8',
            invalid_face_data: 'Face data has unexpected number of vertex data: {{count, number}}',
            too_many_triangles: 'The imported mesh has {{count, number}} triangles, consider simplifying it in a DDC such as Blender',
            vertex_triangle_count: '{{vertex_count, number}} vertices, {{triangle_count, number}} triangles',
            missing_normals: 'Some vertices do not have their normals defined, this may cause voxels to be aligned incorrectly',
            failed_to_parse_line: 'Failed attempt to parse "{{line}}", because "{{error}}"',
            gltf_experimental: 'The GLTF importer is experimental and may produce unexpected results',
            components: {
                input: '3D Model (.obj, .gltf/.glb)',
                rotation: 'Rotation',
            },
        },
        materials: {
            heading: '2. MATERIALS',
            button: 'Update materials',
            updating_materials: 'Updating materials...',
            updated_materials: 'Updated materials',
            components: {
                'no_materials_loaded': 'No materials loaded',
                'material_type': 'Type',
                'solid': 'Solid',
                'textured': 'Textured',
                'no_image_loaded' : 'No image loaded',
                'choose': 'Choose',
                'texture_filtering': 'Filtering',
                'texture_wrap': 'Wrap',
                'transparency': 'Transparency',
                'diffuse_map': 'Diffuse map',
                'alpha': 'Alpha',
                'alpha_map': 'Alpha map',
                'alpha_channel': 'Alpha channel',
                'linear': 'Linear',
                'nearest': 'Nearest',
                'clamp': 'Clamp',
                'repeat': 'Repeat',
                'none': 'None',
                'alpha_constant': 'Alpha constant',
                'diffuse_map_alpha_channel': 'Diffuse map alpha channel',
            },
        },
        voxelise: {
            heading: '3. VOXELISE',
            button: 'Voxelise mesh',
            loading_voxel_mesh: 'Loading voxel mesh...',
            loaded_voxel_mesh: 'Loaded voxel mesh',
            rendering_voxel_mesh: 'Rendering voxel mesh...',
            rendered_voxel_mesh: 'Rendered voxel mesh',
            voxel_count: '{{count, number}} voxels',
            voxel_mesh_dimensions: 'Dimensions are {{x, number}} x {{y, number}} x {{z, number}}',
            components: {
                constraint_axis: 'Constraint axis',
                size: 'Size',
                algorithm: 'Algorithm',
                ambient_occlusion: 'Ambient occlusion',
                multisampling: 'Multisampling',
                voxel_overlap: 'Voxel overlap',
                colour: 'Colour',
                x_axis: 'X (width) (red)',
                y_axis: 'Y (height) (green)',
                z_axis: 'Z (depth) (blue)',
                ray_based: 'Ray-based',
                bvh_ray: 'BVH Ray-based',
                ncrb: 'NCRB',
                average_recommended: 'Average (recommended)',
                first: 'First',
                on_recommended: 'On (recommended)',
                off_faster: 'Off (faster)',
            },
        },
        assign: {
            heading: '3. ASSIGN',
            button: 'Assign blocks',
            loading_block_mesh: 'Loading block mesh...',
            loaded_block_mesh: 'Loaded block mesh',
            rendering_block_mesh: 'Rendering block mesh...',
            rendered_block_mesh: 'Rendered block mesh',
            deselected_blocks: 'Deselected {{count, number}} blocks',
            selected_blocks: 'Selected {{count, number}} blocks',
            found_blocks: 'Found {{count, number}} blocks',
            block_not_namespaced: '"{{block_name}}" is not namespaced correctly, do you mean "minecraft:{{block_name}}"?',
            could_not_use_block: 'Could not use "{{block_name}}" as it is unsupported',
            reading_palette: 'Reading {{file_name}}...',
            block_palette_missing_light_blocks: 'Block palette contains no light blocks to place',
            blocks_missing_textures: '{{count, number}} palette block(s) are missing atlas textures, they will not be used',
            falling_blocks: '{{count, number}} blocks will fall due to gravity when this structure is placed',
            components: {
                texture_atlas: 'Texture atlas',
                block_palette: 'Block palette',
                dithering: 'Dithering',
                dithering_magnitude: 'Dithering magnitude',
                fallable_blocks: 'Fallable blocks',
                colour_accuracy: 'Colour accuracy',
                smart_averaging: 'Smart averaging',
                smoothness: 'Smoothness',
                calculate_lighting: 'Calculate lighting',
                light_threshold: 'Light threshold',
                vanilla: 'Vanilla',
                ordered: 'Ordered',
                random: 'Random',
                off: 'Off',
                replace_falling: 'Replace falling with solid',
                replace_fallable: 'Replace fallable with solid',
                do_nothing: 'Do nothing',
                search: 'Search...',
            },
        },
        export: {
            heading: '5. EXPORT',
            button: 'Export structure',
            exporting_structure: 'Exporting structure...',
            exported_structure: 'Exported structure',
            schematic_unsupported_blocks: '{{count, number}} blocks ({{unique, number}} unique) are not supported by the .schematic format, Stone blocks will used instead. Try using the schematic-friendly palette, or export using .litematica',
            nbt_exporter_too_big: 'Structure blocks only support structures of size 48x48x48, blocks outside this range will be removed',
            components: {
                exporter: 'Exporter',
                litematic: 'Litematic (.litematic)',
                schematic: 'Schematic (.schematic)',
                sponge_schematic: 'Sponge Schematic (.schem)',
                structure_blocks: 'Structure blocks (.nbt)',
                indexed_json: 'Indexed JSON (.json)',
                uncompressed_json: 'Uncompressed JSON (.json)',
            },
        },
        misc: {
            red: 'Red',
            green: 'Green',
            blue: 'Blue',
            alpha: 'Alpha',
            on: 'On',
            off: 'Off',
        },
    },
};
