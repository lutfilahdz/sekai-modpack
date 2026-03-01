ServerEvents.recipes(event => {
    // Fix furnace recipe
    event.shaped(
        Item.of("minecraft:furnace", 1),
        [
            "AAA",
            "A A",
            "AAA",
        ],
        {
            A: "#minecraft:stone_crafting_materials"
        },
    );

    // Remove trident recipe
    event.remove({ id: 'hybrid-aquatic:trident' })

    // Fix latest Create Deco missing recipes

    // Windows
    event.remove({ id: 'createdeco:andesite_window' })
    event.shaped(
        Item.of("createdeco:andesite_window", 2),
        [
            "   ",
            " A ",
            "ABA",
        ],
        {
            A: "create:andesite_alloy",
            B: "#createdeco:colorless_glass"
        },
    );
    event.remove({ id: 'createdeco:brass_window' })
    event.shaped(
        Item.of("createdeco:brass_window", 2),
        [
            "   ",
            " A ",
            "ABA",
        ],
        {
            A: "create:brass_ingot",
            B: "#createdeco:colorless_glass"
        },
    );
    event.remove({ id: 'createdeco:zinc_window' })
    event.shaped(
        Item.of("createdeco:zinc_window", 2),
        [
            "   ",
            " A ",
            "ABA",
        ],
        {
            A: "create:zinc_ingot",
            B: "#createdeco:colorless_glass"
        },
    );

    // Bars Overlays
    event.remove({ id: 'createdeco:brass_bars_overlay' })
    event.shaped(
        Item.of("createdeco:brass_bars_overlay", 16),
        [
            "   ",
            "AAA",
            "AAA",
        ],
        {
            A: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:iron_bars_overlay' })
    event.shaped(
        Item.of("createdeco:iron_bars_overlay", 16),
        [
            "   ",
            "AAA",
            "AAA",
        ],
        {
            A: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:copper_bars_overlay' })
    event.shaped(
        Item.of("createdeco:copper_bars_overlay", 16),
        [
            "   ",
            "AAA",
            "AAA",
        ],
        {
            A: "create:copper_sheet"
        },
    );

    // Mesh Fences
    event.remove({ id: 'createdeco:brass_mesh_fence' })
    event.shaped(
        Item.of("createdeco:brass_mesh_fence", 16),
        [
            "   ",
            "ABA",
            "ABA",
        ],
        {
            A: "create:brass_sheet",
            B: "minecraft:string"
        },
    );
    event.remove({ id: 'createdeco:iron_mesh_fence' })
    event.shaped(
        Item.of("createdeco:iron_mesh_fence", 16),
        [
            "   ",
            "ABA",
            "ABA",
        ],
        {
            A: "create:iron_sheet",
            B: "minecraft:string"
        },
    );
    event.remove({ id: 'createdeco:copper_mesh_fence' })
    event.shaped(
        Item.of("createdeco:copper_mesh_fence", 16),
        [
            "   ",
            "ABA",
            "ABA",
        ],
        {
            A: "create:copper_sheet",
            B: "minecraft:string"
        },
    );

    // Catwalks
    event.remove({ id: 'createdeco:brass_catwalk_forge' })
    event.shaped(
        Item.of("createdeco:brass_catwalk", 4),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:brass_sheet",
            B: "createdeco:brass_bars"
        },
    );
    event.remove({ id: 'createdeco:iron_catwalk_forge' })
    event.shaped(
        Item.of("createdeco:iron_catwalk", 4),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:iron_sheet",
            B: "minecraft:iron_bars"
        },
    );
    event.remove({ id: 'createdeco:copper_catwalk_forge' })
    event.shaped(
        Item.of("createdeco:copper_catwalk", 4),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:copper_sheet",
            B: "createdeco:copper_bars"
        },
    );

    // Catwalk Railings
    event.remove({ id: 'createdeco:brass_catwalk_railing_forge' })
    event.shaped(
        Item.of("createdeco:brass_catwalk_railing", 8),
        [
            "AAA",
            "B B",
            "B B",
        ],
        {
            A: "create:brass_sheet",
            B: "createdeco:brass_bars"
        },
    );
    event.remove({ id: 'createdeco:iron_catwalk_railing_forge' })
    event.shaped(
        Item.of("createdeco:iron_catwalk_railing", 8),
        [
            "AAA",
            "B B",
            "B B",
        ],
        {
            A: "create:iron_sheet",
            B: "minecraft:iron_bars"
        },
    );
    event.remove({ id: 'createdeco:copper_catwalk_railing_forge' })
    event.shaped(
        Item.of("createdeco:copper_catwalk_railing", 8),
        [
            "AAA",
            "B B",
            "B B",
        ],
        {
            A: "create:copper_sheet",
            B: "createdeco:copper_bars"
        },
    );

    // Support Wedges
    event.remove({ id: 'createdeco:brass_support_wedge' })
    event.shaped(
        Item.of("createdeco:brass_support_wedge", 3),
        [
            " A ",
            "AA ",
            "   ",
        ],
        {
            A: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:iron_support_wedge' })
    event.shaped(
        Item.of("createdeco:iron_support_wedge", 3),
        [
            " A ",
            "AA ",
            "   ",
        ],
        {
            A: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:copper_support_wedge' })
    event.shaped(
        Item.of("createdeco:copper_support_wedge", 3),
        [
            " A ",
            "AA ",
            "   ",
        ],
        {
            A: "create:copper_sheet"
        },
    );

    // Hulls
    event.remove({ id: 'createdeco:andesite_hull' })
    event.shaped(
        Item.of("createdeco:andesite_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "createdeco:andesite_sheet",
            B: "create:andesite_alloy_block"
        },
    );
    event.remove({ id: 'createdeco:brass_hull' })
    event.shaped(
        Item.of("createdeco:brass_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:brass_sheet",
            B: "create:brass_block"
        },
    );
    event.remove({ id: 'createdeco:iron_hull' })
    event.shaped(
        Item.of("createdeco:iron_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:iron_sheet",
            B: "minecraft:iron_block"
        },
    );
    event.remove({ id: 'createdeco:copper_hull' })
    event.shaped(
        Item.of("createdeco:copper_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "create:copper_sheet",
            B: "minecraft:copper_block"
        },
    );
    event.remove({ id: 'createdeco:industrial_iron_hull' })
    event.shaped(
        Item.of("createdeco:industrial_iron_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "createdeco:industrial_iron_sheet",
            B: "create:industrial_iron_block"
        },
    );
    event.remove({ id: 'createdeco:zinc_hull' })
    event.shaped(
        Item.of("createdeco:zinc_hull", 2),
        [
            " A ",
            "ABA",
            " A ",
        ],
        {
            A: "createdeco:zinc_sheet",
            B: "create:zinc_block"
        },
    );

    // Yellow Lamps
    event.remove({ id: 'createdeco:yellow_brass_lamp' })
    event.shaped(
        Item.of("createdeco:yellow_brass_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:brass_nugget",
            B: "minecraft:torch",
            C: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:yellow_iron_lamp' })
    event.shaped(
        Item.of("createdeco:yellow_iron_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "minecraft:iron_nugget",
            B: "minecraft:torch",
            C: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:yellow_copper_lamp' })
    event.shaped(
        Item.of("createdeco:yellow_copper_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:copper_nugget",
            B: "minecraft:torch",
            C: "create:copper_sheet"
        },
    );
    event.remove({ id: 'createdeco:yellow_zinc_lamp' })
    event.shaped(
        Item.of("createdeco:yellow_zinc_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:zinc_nugget",
            B: "minecraft:torch",
            C: "createdeco:zinc_sheet"
        },
    );

    // Red Lamps
    event.remove({ id: 'createdeco:red_brass_lamp' })
    event.shaped(
        Item.of("createdeco:red_brass_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:brass_nugget",
            B: "minecraft:redstone_torch",
            C: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:red_iron_lamp' })
    event.shaped(
        Item.of("createdeco:red_iron_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "minecraft:iron_nugget",
            B: "minecraft:redstone_torch",
            C: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:red_copper_lamp' })
    event.shaped(
        Item.of("createdeco:red_copper_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:copper_nugget",
            B: "minecraft:redstone_torch",
            C: "create:copper_sheet"
        },
    );
    event.remove({ id: 'createdeco:red_zinc_lamp' })
    event.shaped(
        Item.of("createdeco:red_zinc_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:zinc_nugget",
            B: "minecraft:redstone_torch",
            C: "createdeco:zinc_sheet"
        },
    );

    // Green Lamps
    event.remove({ id: 'createdeco:green_brass_lamp' })
    event.shaped(
        Item.of("createdeco:green_brass_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:brass_nugget",
            B: "minecraft:glow_berries",
            C: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:green_iron_lamp' })
    event.shaped(
        Item.of("createdeco:green_iron_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "minecraft:iron_nugget",
            B: "minecraft:glow_berries",
            C: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:green_copper_lamp' })
    event.shaped(
        Item.of("createdeco:green_copper_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:copper_nugget",
            B: "minecraft:glow_berries",
            C: "create:copper_sheet"
        },
    );
    event.remove({ id: 'createdeco:green_zinc_lamp' })
    event.shaped(
        Item.of("createdeco:green_zinc_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:zinc_nugget",
            B: "minecraft:glow_berries",
            C: "createdeco:zinc_sheet"
        },
    );

    // Blue Lamps
    event.remove({ id: 'createdeco:blue_brass_lamp' })
    event.shaped(
        Item.of("createdeco:blue_brass_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:brass_nugget",
            B: "minecraft:soul_torch",
            C: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:blue_iron_lamp' })
    event.shaped(
        Item.of("createdeco:blue_iron_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "minecraft:iron_nugget",
            B: "minecraft:soul_torch",
            C: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:blue_copper_lamp' })
    event.shaped(
        Item.of("createdeco:blue_copper_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:copper_nugget",
            B: "minecraft:soul_torch",
            C: "create:copper_sheet"
        },
    );
    event.remove({ id: 'createdeco:blue_zinc_lamp' })
    event.shaped(
        Item.of("createdeco:blue_zinc_lamp", 1),
        [
            "A  ",
            "B  ",
            "C  ",
        ],
        {
            A: "create:zinc_nugget",
            B: "minecraft:soul_torch",
            C: "createdeco:zinc_sheet"
        },
    );

    // Sheet Metals
    event.remove({ id: 'createdeco:brass_sheet_metal' })
    event.shaped(
        Item.of("createdeco:brass_sheet_metal", 4),
        [
            "AA ",
            "AA ",
            "   ",
        ],
        {
            A: "create:brass_sheet"
        },
    );
    event.remove({ id: 'createdeco:iron_sheet_metal' })
    event.shaped(
        Item.of("createdeco:iron_sheet_metal", 4),
        [
            "AA ",
            "AA ",
            "   ",
        ],
        {
            A: "create:iron_sheet"
        },
    );
    event.remove({ id: 'createdeco:copper_sheet_metal' })
    event.shaped(
        Item.of("createdeco:copper_sheet_metal", 4),
        [
            "AA ",
            "AA ",
            "   ",
        ],
        {
            A: "create:copper_sheet"
        },
    );
})
