/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('boy', {

    onSetMod : {

        'js' : function() {
            console.log('xxx111');
        }

    }

}, {

    live: function() {
        this.liveInitOnEvent('button', 'leftclick');
    }

});

})();
