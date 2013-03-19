({
    block: 'b-page',
    title: 'choose-the-one',
    head: [
        { elem: 'css', url: '_choose-the-one.css', ie: false},
        { elem: 'css', url: '_choose-the-one', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_choose-the-one.js'},
    ],
    content: [
        {
            block: 'world',
            content: [
                {
                    block: 'girl',
                    mods: { 'cute': 'no'},
                    js: {
                        music: 'rock-n-roll'
                    }
                },
                {
                    block: 'boy',
                    js: {
                        music: 'hip-hop'
                    }
                },
                {
                    block: 'girl',
                    mods: { cute: 'yes' }
                }
            ]
        },
        '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter20590624 = new Ya.Metrika({id:20590624, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/20590624" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    ]
})
