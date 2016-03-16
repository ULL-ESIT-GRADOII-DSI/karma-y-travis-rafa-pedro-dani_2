/*jslint browser: true, this: true, white: true*/
/*global
    XRegExp, console
*/

(function (exports) {
    "use strict";
    function Medida(valor, tipo) {
        /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
        /* ademas de new Medida(45.2, "Km") */
        this.valor = valor;
        this.tipo = tipo;
        if(arguments.length===1){
          var regexp2 = new XRegExp('^\\s* \n' +
                         '(?<numero>  [+-]?[0-9]*\\.?[0-9]+([eE][+-]?[0-9]+)?)  # la cantidad, es numerica \n' +
                         '\\s*   \n' +
                         '(?<tipo> [a-zA-Z]+ )\n'+
                         '\\s*   $', 'x');
          var v=XRegExp.exec(valor, regexp2);
          this.tipo=v.tipo;
          this.valor=v.numero;
        }
    }
    Medida.tipos = "";
    Medida.tipos2 = [];
    var regexp = null;

    Medida.anadirTipos = function (valor) {
        if(valor === undefined){
            return;
        }
        Medida.tipos2.push(valor);
        this.tipos = "(?<SALIDA> (";
        for(var i = 0; i < Medida.tipos2.length; i++) {
            if(i !== 0) {
                Medida.tipos += "|";
            }
            this.tipos += Medida.tipos2[i];
        }
        this.tipos += '))';

        regexp = new XRegExp('^\\s* \n' +
                       '(?<numero>  [+-]?[0-9]*\\.?[0-9]+([eE][+-]?[0-9]+)?)  # la cantidad, es numerica \n' +
                       '\\s*   \n' +
                        this.tipos.replace(/SALIDA/g, "tipo") +
                       '\\s*   \n' +
                       '(to)? \n' +
                       '\\s*   \n' +
                        this.tipos.replace(/SALIDA/g, "destino") +
                       '\\s*   $', 'x');
    };
/*
    Medida.tipos2 = [
        '(f|fa|fah|fahr|fahre|fahren|fahrenh|fahrenhe|fahrenhei|fahrenheit)',
        '(c|ce|cel|cels|celsi|celsiu|celsius)',
        '(k|ke|kel|kelv|kelvi|kelvin)',
        '(m|me|met|metr|metro|metros)',
        '(p|pu|pul|pulg|pulga|pulgad|pulgada|pulgadas)',
        '(e|eu|eur|euro|euros)',
        '(d|do|dol|dola|dolar|dolare|dolares)',
        '(l|li|lib|libr|libra|libras)'

    ];*/

    Medida.match = function (valor) {
        return XRegExp.exec(valor, regexp);
    };

    Medida.measures = {};

    Medida.convertir = function (valor) {
        valor = valor.toLowerCase();
        var measures = Medida.measures;

        var match = Medida.match(valor);
        if (match) {
            var numero = parseFloat(match.numero);
            var tipo = match.tipo[0];
            var destino = match.destino[0];

            console.log("El match da " + numero + " de tipo " + tipo + " a " + destino);

            try {
                if(tipo === destino){
                    return new measures[tipo](numero);
                }
                var source = new measures[tipo](numero);  // new Fahrenheit(32)
                var target = "to" + measures[destino].name; // "toCelsius"
                return source[target]().toString();
            } catch (err) {
                console.log('Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"');
                console.log(err);
                return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
            }
        } else {
            return "Introduzca una entrada valida como: 330e-1 F to C";
        }
    };
    exports.Medida = Medida;
}(this));
