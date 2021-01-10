const Atrament = require('atrament');

window.atramentWrapper = {
    initializeCanvas: function (canvasElement) {
        sketchpad = new Atrament(canvasElement, {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
}