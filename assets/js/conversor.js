(function (exports) {
    "use strict";

    function Medida(valor, tipo) {
        /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
        /* ademas de new Medida(45.2, "Km") */
        this.valor = valor;
        this.tipo = tipo;
    }

    function Temperatura(valor, tipo) {
        /* tipo es opcional. Debería admitir new Medida("45.2 F") */
        Medida.call(this, valor, tipo);
    }

    Temperatura.prototype = new Medida();

    exports.Temperatura = Temperatura;

    exports.convertir = function () {
        var valor = document.getElementById('convert').value,
            elemento = document.getElementById('converted'),

            /* Extienda la RegeExp a la especificación. use una XRegExp */
            regexp = new XRegExp('^\\s* \n' +
                           '(?<cantidad>  [+-]?[0-9]*\\.?[0-9]+([eE][+-]?[0-9]+)?)  # la cantidad, es numerica \n' +
                           '\\s*   \n' +
                           '(?<medida> (' +
                               '(f|fa|fah|fahr|fahre|fahren|fahrenh|fahrenhe|fahrenhei|fahrenheit)| # Posibles valores para fahrenheit \n' +
                               '(c|ce|cel|cels|celsi|celsiu|celsius)| # Valores de grados celsius \n' +
                               '(k|ke|kel|kelv|kelvi|kelvin)|       #grados kelvin\n' +
                               '(m|me|met|metr|metro|metros)| #metros \n' +
                               '(p|pu|pul|pulg|pulga|pulgad|pulgada|pulgadas) #pulgadas \n' +
                           ')) \n' +
                           '\\s*   \n' +
                           '(?<verbo> to)? \n' +
                           '\\s*   \n' +
                           '(?<medida_dest> (' +
                               '(f|fa|fah|fahr|fahre|fahren|fahrenh|fahrenhe|fahrenhei|fahrenheit)| # Posibles valores para fahrenheit \n' +
                               '(c|ce|cel|cels|celsi|celsiu|celsius)| # Valores de grados celsius \n' +
                               '(k|ke|kel|kelv|kelvi|kelvin)|       #grados kelvin\n' +
                               '(m|me|met|metr|metro|metros)| #metros \n' +
                               '(p|pu|pul|pulg|pulga|pulgad|pulgada|pulgadas) #pulgadas \n' +
                           ')) \n' +
                           '\\s*   $', 'x');
        valor = valor.toLowerCase();
        valor = XRegExp.exec(valor, regexp);
        if (valor) {
            var numero = valor.cantidad,
                tipo = valor.medida[0], //Primer carácter del tipo, o sea f para fahrenheit, k para kelvin y c para celsius
                tipo_dest = valor.medida_dest[0];

            numero = parseFloat(numero);
            console.log("Valor: " + numero + ", Tipo: " + tipo + ", Destino: " + tipo_dest);

            var obj_numer = null;
            switch (tipo) {
            case 'c':
                obj_numer = new Celsius(numero);
                break;
            case 'f':
                obj_numer = new Fahrenheit(numero);
                break;
            case 'k':
                obj_numer = new Kelvin(numero);
                break;
            case 'm':
                obj_numer = new Metro(numero);
                break;
            case 'p':
                obj_numer = new Pulgada(numero);
                break;
            }
            try {
                switch (tipo_dest) {
                case 'c':
                    elemento.innerHTML = obj_numer.toCelsius().toFixed(2) + " Celsius";
                    break;
                case 'f':
                    elemento.innerHTML = obj_numer.toFahrenheit().toFixed(2) + " Fahrenheit";
                    break;
                case 'k':
                    elemento.innerHTML = obj_numer.toKelvin().toFixed(2) + " Kelvin";
                    break;
                case 'm':
                    elemento.innerHTML = obj_numer.toMetro().toFixed(2) + " Metros";
                    break;
                case 'p':
                    elemento.innerHTML = obj_numer.toPulgada().toFixed(2) + " Pulgadas";
                    break;
                }
            } catch (err) {
                if (tipo === tipo_dest) {
                    elemento.innerHTML = numero.toFixed(2) + " " + obj_numer.constructor.name;
                } else {
                    console.error('No se convertir a ese tipo');
                    elemento.innerHTML = "No se convertir de " + tipo + " a " + tipo_dest;
                }
            }
        } else {
            console.error('Error en la expresión');
            elemento.innerHTML = "Error en la entrada";
        }
    };
})(this);
