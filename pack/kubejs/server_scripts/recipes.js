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
            A: "#minecraft:stone_crafting_materials",
        },
    );

    // Remove trident recipe
    event.remove({ id: 'hybrid-aquatic:trident' })
})
