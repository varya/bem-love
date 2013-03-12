({
    block: 'b-page',
    title: 'A boy, a girl and the heartless world',
    head: [
        { elem: 'css', url: '_container.css', ie: false},
        { elem: 'css', url: '_container', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_container.js'},
    ],
    content: {
        block: 'world',
        content: [
            {
                block: 'boy',
                js: {
                    music: 'hip-hop'
                }
            },
            {
                block: 'girl',
                js: {
                    music: 'classic'
                }
            }
        ]
    }
})
