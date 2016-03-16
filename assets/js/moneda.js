/*jslint browser: true, this: true*/
/*global
    Medida
*/

(function () {
    "use strict";
    function Moneda(valor, tipo) {
        /* tipo es opcional. Debería admitir new Medida("45.2 F") */
        Medida.call(this, valor, tipo);
    }

    Moneda.prototype = new Medida();
    Moneda.prototype.constructor = Moneda;

    function Dolar(valor) {
        Moneda.call(this, valor, "D");
    }
    Dolar.prototype = new Moneda();
    Dolar.prototype.constructor = Dolar;
    Medida.measures.d = Dolar;
    Medida.anadirTipos('(d|do|dol|dola|dolar|dolare|dolares)');

    function Euro(valor) {
        Moneda.call(this, valor, "E");
    }
    Euro.prototype = new Moneda();
    Euro.prototype.constructor = Euro;
    Medida.measures.e = Euro;
    Medida.anadirTipos('(e|eu|eur|euro|euros)');

    function Libra(valor) {
        Moneda.call(this, valor, "L");
    }
    Libra.prototype = new Moneda();
    Libra.prototype.constructor = Libra;
    Medida.measures.l = Libra;
    Medida.anadirTipos('(l|li|lib|libr|libra|libras)');

    Dolar.prototype.toEuro = function () {
        return new Euro(this.valor * 0.90);
    };
    Dolar.prototype.toLibra = function () {
        return new Libra(this.valor * 0.69528);
    };
    Dolar.prototype.toString = function () {
        return this.valor.toFixed(2) + " Dolares";
    };

    Euro.prototype.toDolar = function () {
        return new Dolar(this.valor * 1.10);
    };
    Euro.prototype.toLibra = function () {
        return new Libra(this.valor * 0.78);
    };
    Euro.prototype.toString = function () {
        return this.valor.toFixed(2) + " Euros";
    };

    Libra.prototype.toDolar = function () {
        return new Dolar(this.valor * 1.10);
    };
    Libra.prototype.toEuro = function () {
        return new Euro(this.valor * 1.4383);
    };
    Libra.prototype.toString = function () {
        return this.valor.toFixed(2) + " Libras";
    };
}(this));
