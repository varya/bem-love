/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

var sheLikes;

BEM.DOM.decl('boy', {

    onSetMod : {

        'js' : function() {
            this.setMod('asking', 'process');
        },
        'asking' : {
            'process' : function() {

                var _this = this;
                setTimeout(function(){
                    _this.elem('speech-cloud').text('I know! She likes ' + _this.askGirl() + ' music!');
                    _this.setMod('asking', 'done');
                }, 2000);
            }
        }

    },
    askGirl: function() {
        return (sheLikes = sheLikes ? sheLikes : this.findBlockOutside('world').findBlockInside('girl').params.music);
    }

}, {

    live: function() {
        this.liveInitOnEvent('button', 'leftclick');
    }

});

})();
