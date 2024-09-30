// Credits:
// dirtTW

import { TLocaleDefinition } from './base';

export const zh_TW: TLocaleDefinition = {
    display_name: '繁體中文（臺灣）',
    language_code: 'zh-TW',
    translations: {
        something_went_wrong: '發生了非預期的錯誤',
        description: '一款將 3D 模型轉換為 .schematic、.litematic、.schem 和 .nbt 等 Minecraft 方塊格式的工具',
        init: {
            initialising: '正在初始化...',
            ready: '完成',
        },
        settings: {
            heading: '設定',
            components: {
                language: '語言',
            },
            changing_language: '正在更換語言...',
            changed_language: '已更換語言',
        },
        import: {
            heading: '1. 匯入',
            button: '載入網格模型',
            importing_mesh: '正在匯入網格模型...',
            imported_mesh: '已匯入網格模型',
            rendering_mesh: '正在繪製網格模型...',
            rendered_mesh: '已繪製網格模型',
            no_vertices_loaded: '未載入任何頂點',
            no_triangles_loaded: '未載入任何三角面',
            could_not_scale_mesh: '無法正確縮放網格模型 - 這個模型似乎為 2D 平面，請旋轉此模型，使其垂直高度不為零',
            invalid_encoding: '發現無法識別的字元，請使用 UTF-8 編碼',
            invalid_face_data: '網格面資料與頂點數量不相符：{{count, number}}',
            too_many_triangles: '匯入的網格模型擁有 {{count, number}} 個三角面，請考慮使用 Blender 等建模軟體進行簡化',
            vertex_triangle_count: '{{vertex_count, number}} 個頂點，{{triangle_count, number}} 個三角面',
            missing_normals: '部分頂點未定義法線，可能導致體素錯誤對齊',
            failed_to_parse_line: '嘗試解析「{{line}}」失敗，原因：「{{error}}」',
            gltf_experimental: '匯入 GLTF 目前為實驗性功能，可能產生非預期的結果',
            components: {
                input: '3D 模型（.obj, /.glb)',
                rotation: '旋轉',
            },
        },
        materials: {
            heading: '2. 紋理',
            button: '更新紋理',
            updating_materials: '正在更新紋理...',
            updated_materials: '已更新紋理',
            components: {
                'no_materials_loaded': '未載入任何紋理',
                'material_type': '類型',
                'solid': '純色',
                'textured': '紋理',
                'no_image_loaded': '未載入影像',
                'choose': '選擇',
                'texture_filtering': '紋理過濾',
                'texture_wrap': '紋理環繞',
                'transparency': '透明度',
                'diffuse_map': '漫反射貼圖',
                'alpha': '不透明度',
                'alpha_map': '使用不透明度映射圖',
                'alpha_channel': '不透明度通道',
                'linear': '線性',
                'nearest': '最近',
                'clamp': '拉伸',
                'repeat': '重複',
                'none': '無',
                'alpha_constant': '使用不透明度常數',
                'diffuse_map_alpha_channel': '使用漫反射貼圖的不透明度通道',
            },
        },
        voxelise: {
            heading: '3. 體素化',
            button: '體素化網格模型',
            loading_voxel_mesh: '正在載入體素模型...',
            loaded_voxel_mesh: '已載入體素模型',
            rendering_voxel_mesh: '正在繪製體素模型...',
            rendered_voxel_mesh: '已繪製體素模型',
            voxel_count: '{{count, number}} 個體素',
            voxel_mesh_dimensions: '大小為 {{x, number}} x {{y, number}} x {{z, number}} 體素',
            components: {
                constraint_axis: '約束軸向',
                size: '尺寸',
                algorithm: '演算法',
                ambient_occlusion: '環境光遮蔽',
                multisampling: '多重採樣',
                voxel_overlap: '體素重疊',
                colour: '顏色',
                x_axis: 'X（寬度）（紅色軸）',
                y_axis: 'Y（高度）（綠色軸）',
                z_axis: 'Z（深度）（藍色軸）',
                ray_based: '基於射線',
                bvh_ray: '基於 BVH 射線',
                ncrb: 'NCRB',
                average_recommended: '均值（推薦）',
                first: '首個',
                on_recommended: '啟用（推薦）',
                off_faster: '停用（速度更快）',
            },
        },
        assign: {
            heading: '3. 綁定',
            button: '綁定方塊',
            loading_block_mesh: '正在載入方塊模型...',
            loaded_block_mesh: '已載入方塊模型',
            rendering_block_mesh: '正在繪製方塊模型...',
            rendered_block_mesh: '已繪製方塊模型',
            deselected_blocks: '未選擇 {{count, number}} 種方塊',
            selected_blocks: '已選擇 {{count, number}} 種方塊',
            found_blocks: '已找到 {{count, number}} 種方塊',
            block_not_namespaced: '「{{block_name}}」未正確使用命名空間，是不是指「minecraft:{{block_name}}」？',
            could_not_use_block: '無法使用「{{block_name}}」，因為其不受支援',
            reading_palette: '正在讀取 {{file_name}}...',
            block_palette_missing_light_blocks: '方塊色板中不包含可供放置的發光方塊',
            blocks_missing_textures: '{{count, number}} 種色板中的方塊遺失紋理，將不會被使用',
            falling_blocks: '{{count, number}} 個方塊將在結構放置時因重力而下落',
            components: {
                texture_atlas: '資源包',
                block_palette: '方塊色板',
                dithering: '混色抖動',
                dithering_magnitude: '抖動程度',
                fallable_blocks: '可掉落方塊',
                colour_accuracy: '顏色精準度',
                smart_averaging: '智慧平均',
                smoothness: '平滑度',
                calculate_lighting: '計算光照',
                light_threshold: '光照閾值',
                vanilla: '原版',
                ordered: '有序',
                random: '隨機',
                off: '停用',
                replace_falling: '使用固態方塊取代將要掉落的方塊',
                replace_fallable: '使用固態方塊取代可以掉落的方塊',
                do_nothing: '不取代',
                search: '搜尋...',
            },
        },
        export: {
            heading: '5. 匯出',
            button: '匯出建築結構',
            exporting_structure: '正在匯出結構...',
            exported_structure: '已匯出結構',
            schematic_unsupported_blocks: '{{count, number}} 個方塊（{{unique, number}} 種）不受 .schematic 檔案格式支援，將使用石頭方塊代替。嘗試使用支援 .schematic 格式的色板，或使用 .litematica 格式匯出',
            nbt_exporter_too_big: '結構方塊僅支援 48x48x48 大小的區域，此範圍外的方塊將會被移除',
            components: {
                exporter: '匯出為',
                litematic: 'Litematic (.litematic)',
                schematic: 'Schematic (.schematic)',
                sponge_schematic: 'Sponge Schematic (.schem)',
                structure_blocks: '結構方塊 (.nbt)',
                indexed_json: '有索引的 JSON (.json)',
                uncompressed_json: '未壓縮的 JSON (.json)',
            },
        },
        misc: {
            red: '紅',
            green: '綠',
            blue: '藍',
            alpha: '不透明度',
            on: '啟用',
            off: '停用',
        },
    },
};
