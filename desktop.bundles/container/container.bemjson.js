({
    block: 'b-page',
    title: 'container',
    head: [
        { elem: 'css', url: '_container.css', ie: false},
        { elem: 'css', url: '_container', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_container.js'},
    ],
    content: [
        'block content'
    ]
})
