/*jslint browser: true, this: true*/
/*global
    Medida
*/

(function (exports) {
    "use strict";
    function main(keypressed) {
        var valor = document.getElementById('convert').value;
        var elemento = document.getElementById('converted');
        if (keypressed.keyCode === 13) {
            elemento.innerHTML = Medida.convertir(valor);
        } else {
            elemento.innerHTML = "";
        }
        return false;
    }
    exports.main = main;
}(this));
