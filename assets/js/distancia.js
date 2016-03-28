/*jslint browser: true, this: true*/
/*global
    Medida
*/

(function () {
    "use strict";
    function Distancia(valor, tipo) {
        /* tipo es opcional. Debería admitir new Medida("45.2 F") */
        Medida.call(this, valor, tipo);
    }

    Distancia.prototype = new Medida();
    Distancia.prototype.constructor = Distancia;
    Medida.measures.distancia = Distancia;

    function Metro(valor) {
        Distancia.call(this, valor, "M");
    }
    Metro.prototype = new Distancia();
    Metro.prototype.constructor = Metro;
    Medida.measures.m = Metro;
    Medida.anadirTipos('(m|me|met|metr|metro|metros)');

    function Pulgada(valor) {
        Distancia.call(this, valor, "P");
    }
    Pulgada.prototype = new Distancia();
    Pulgada.prototype.constructor = Pulgada;
    Medida.measures.p = Pulgada;
    Medida.anadirTipos('(p|pu|pul|pulg|pulga|pulgad|pulgada|pulgadas)');

    Metro.prototype.toPulgada = function () {
        return new Pulgada(this.valor * 39.3701);
    };
    Metro.prototype.toString = function () {
        return this.valor.toFixed(2) + " Metros";
    };

    Pulgada.prototype.toMetro = function () {
        return new Metro(this.valor * 0.0254);
    };
    Pulgada.prototype.toString = function () {
        return this.valor.toFixed(2) + " Pulgadas";
    };
}(this));
