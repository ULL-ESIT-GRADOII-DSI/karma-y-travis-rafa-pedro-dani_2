/*jslint browser: true, this: true, white: true*/
/*global
    Medida
*/

(function(exports) {
    "use strict";
    function main() {
        var valor     = document.getElementById('convert').value;
        var elemento  = document.getElementById('converted');
        elemento.innerHTML = Medida.convertir(valor);
        return false;
    }
    exports.main = main;
}(this));
