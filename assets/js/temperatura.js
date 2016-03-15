/*jslint browser: true, this: true*/
/*global
    Medida
*/

(function () {
    "use strict";
    function Temperatura(valor, tipo) {
        /* tipo es opcional. Debería admitir new Medida("45.2 F") */
        Medida.call(this, valor, tipo);
    }

    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;

    // =========================================================
    // Definiciones de las clases de los tipos
    //==========================================================

    function Celsius(valor) {
        Temperatura.call(this, valor, "C");
    }
    Celsius.prototype = new Temperatura();
    Celsius.prototype.constructor = Celsius;
    Medida.measures.c = Celsius;

    function Fahrenheit(valor) {
        Temperatura.call(this, valor, "F");
    }
    Fahrenheit.prototype = new Temperatura();
    Fahrenheit.prototype.constructor = Fahrenheit;
    Medida.measures.f = Fahrenheit;

    function Kelvin(valor) {
        Temperatura.call(this, valor, "K");
    }
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;
    Medida.measures.k = Kelvin;

    // =========================================================
    // Métodos de las clases de los tipos
    //==========================================================
    //Celsius
    Celsius.prototype.toFahrenheit = function () {
        return new Fahrenheit((this.valor * 9 / 5) + 32);
    };
    Celsius.prototype.toKelvin = function () {
        return new Kelvin(this.valor + 273.15);
    };
    Celsius.prototype.toString = function () {
        return this.valor.toFixed(2) + " Celsius";
    };

    //Fahrenheit
    Fahrenheit.prototype.toCelsius = function () {
        return new Celsius((this.valor - 32) * 5 / 9);
    };
    Fahrenheit.prototype.toKelvin = function () {
        return new Kelvin((this.valor + 459.67) * 5 / 9);
    };
    Fahrenheit.prototype.toString = function () {
        return this.valor.toFixed(2) + " Fahrenheit";
    };

    //Kelvin
    Kelvin.prototype.toCelsius = function () {
        return new Celsius(this.valor - 273.15);
    };
    Kelvin.prototype.toFahrenheit = function () {
        return new Fahrenheit((this.valor - 273.15) * (9 / 5) + 32);
    };
    Kelvin.prototype.toString = function () {
        return this.valor.toFixed(2) + " Kelvin";
    };
}(this));
