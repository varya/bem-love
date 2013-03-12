/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

var sheLikes;

BEM.DOM.decl('boy', {

    onSetMod : {

        'js' : function() {
            this.askGirl();
        },
        'i-know' : {
            'yes' : function() {
                this.elem('speech-cloud').text('I know! She likes ' + sheLikes + ' music!');
            }
        }

    },
    askGirl: function() {
        sheLikes = this.findBlockOutside('world').findBlockInside('girl').params['music'];
        this.setMod('i-know', 'yes');
    }

}, {

    live: function() {
        this.liveInitOnEvent('button', 'leftclick');
    }

});

})();
