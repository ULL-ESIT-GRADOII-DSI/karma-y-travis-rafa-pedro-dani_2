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
        if (arguments.length === 1) {
            var controlConstructor = new XRegExp(
                '^\\s* \n' +
                '(?<numero>  [+-]?[0-9]*\\.?[0-9]+([eE][+-]?[0-9]+)?)  # la cantidad, es numerica \n' +
                '\\s*   \n' +
                '(?<tipo> [a-zA-Z]+ )\n'+
                '\\s*   $', 'x'
            );
            var v=XRegExp.exec(valor, controlConstructor);
            this.tipo=v.tipo;
            this.valor=v.numero;
        }
    }
    Medida.tipos = [];
    Medida.regexp_complete = null;
    Medida.floatexp = "(?<NUM> [+-]?[0-9]*\\.?[0-9]+([eE][+-]?[0-9]+)?)";
    Medida.whiteexp = "\\s*";
    Medida.tiposexp = "";
    Medida.regexp_partial = new XRegExp('^\\s* \n' +
                        Medida.floatexp.replace(/NUM/g, "numero") +
                        Medida.whiteexp +
                        "(?<tip1> [a-z]+)" +
                        Medida.whiteexp +
                       '(to)? \n' +
                        Medida.whiteexp +
                        "(?<tip2> [a-z]+)" +
                        Medida.whiteexp +
                       '$', 'x');


    Medida.anadirTipos = function (valor) {
        if(valor === undefined){
            return;
        }
        Medida.tipos.push(valor);
        this.tiposexp = "(?<SALIDA> (";
        this.tipos.forEach(function(element, index){
            if(index !== 0) {
                Medida.tiposexp += "|";
            }
            Medida.tiposexp += element;
        });
        this.tiposexp += '))';

        this.regexp_complete = new XRegExp('^\\s* \n' +
                        this.floatexp.replace(/NUM/g, "numero") +
                        this.whiteexp +
                        this.tiposexp.replace(/SALIDA/g, "tipo") +
                        this.whiteexp +
                        '(to)? \n' +
                        this.whiteexp +
                        this.tiposexp.replace(/SALIDA/g, "destino") +
                        this.whiteexp +
                        '$', 'x');
    };

    Medida.match_partial = function (valor) {
        return XRegExp.exec(valor, this.regexp_partial);
    };

    Medida.match = function (valor) {
        return XRegExp.exec(valor, this.regexp_complete);
    };

    Medida.measures = {};

    Medida.convertir = function (valor) {
        valor = valor.toLowerCase();
        var measures = Medida.measures;

        var partial_match = Medida.match_partial(valor);

        if (partial_match) {
            var match = Medida.match(valor);
            if (match) {
                var numero = parseFloat(match.numero);
                var tipo = match.tipo[0];
                var destino = match.destino[0];
                if(tipo === destino){
                    return new measures[tipo](numero).toString();
                }
                var source = new measures[tipo](numero);  // new Fahrenheit(32)
                var target = "to" + measures[destino].name; // "toCelsius"
                //console.log(source)
                //console.log(target)
                return source[target]().toString();
            } else {
                console.log("No se convertir de " + partial_match.tip1 + " a " + partial_match.tip2);
                return "No se convertir de " + partial_match.tip1 + " a " + partial_match.tip2;
            }
        } else {
            console.log("Introduzca una entrada valida como: 330e-1 F to C");
            return "Introduzca una entrada valida como: 330e-1 F to C";
        }
    };
    exports.Medida = Medida;
}(this));
