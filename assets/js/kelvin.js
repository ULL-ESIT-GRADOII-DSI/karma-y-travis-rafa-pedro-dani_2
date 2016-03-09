/* Parte de Pedro */

(function (exports) {
    "use strict";

    function Kelvin(valor) {
        Temperatura.call(this, valor, "K");
    }
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;
    exports.Kelvin = Kelvin;

    Kelvin.prototype.toCelsius = function () {
        return (this.valor - 273.15);
    };
    Kelvin.prototype.toFahrenheit = function () {
        return (this.valor - 273.15) * (9 / 5) + 32;
    };
})(this);
