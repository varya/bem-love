({
    block: 'b-page',
    title: 'A boy, a girl and the heartless world',
    head: [
        { elem: 'css', url: '_ask-her-what-music-she-likes.css', ie: false},
        { elem: 'css', url: '_ask-her-what-music-she-likes', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_ask-her-what-music-she-likes.js'},
    ],
    content: [
        {
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
                        music: 'classical'
                    }
                }
            ]
        },
        '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter20590624 = new Ya.Metrika({id:20590624, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/20590624" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    ]
})
