# Блок girl

## Функциональность блока
Девочка красиво стоит на странице и содержит данные о том, какая музыка ей
нравится. Эти данные размещены в параметрах JavaScript-компонента. В HTML они хранятся в атрибуте `onclick` и
считываются при инициализации блока.


## BEMJSON данные и BEMHTML шаблоны
HTML блоков на странице получается при наложении BEMHTML-шаблона на
BEMJSON-данные (описание блока). В BEMJSON можно указать JavaScript-параметры
блока:

    block: 'girl',
    js: {
        music: 'classic'
    }

<!-- Yandex.Metrika counter -->
<img src="http://mc.yandex.ru/watch/20590624" style="position:absolute;left:-9999px;" alt="" />
<!-- /Yandex.Metrika counter -->
