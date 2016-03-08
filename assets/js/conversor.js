(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
    this.valor = valor;
    this.tipo = tipo;
  }

  Temperatura.prototype = new Medida;

  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this,valor,tipo);
  }

  exports.Temperatura = Temperatura;

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento_cel  = document.getElementById('converted_cel'),
        elemento_far  = document.getElementById('converted_far'),
        elemento_kel  = document.getElementById('converted_kel'),
        elemento_met  = document.getElementById('converted_met'),
        elemento_pul  = document.getElementById('converted_pul'),

        /* Extienda la RegeExp a la especificación. use una XRegExp */
        regexp = XRegExp('^\\s*  \n' +
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
                         '((?<verbo> to) \n' +
                         '\\s*   \n' +
                         '(?<medida_dest> (' +
                                      '(f|fa|fah|fahr|fahre|fahren|fahrenh|fahrenhe|fahrenhei|fahrenheit)| # Posibles valores para fahrenheit \n' +
                                      '(c|ce|cel|cels|celsi|celsiu|celsius)| # Valores de grados celsius \n' +
                                      '(k|ke|kel|kelv|kelvi|kelvin)|       #grados kelvin\n' +
                                      '(m|me|met|metr|metro|metros)| #metros \n' +
                                      '(p|pu|pul|pulg|pulga|pulgad|pulgada|pulgadas) #pulgadas \n' +
                                    ')))? \n' +
                         '\\s*   $', 'x');
    valor = valor.toLowerCase();
    valor = XRegExp.exec(valor,regexp);
    if(valor){
      elemento_cel.innerHTML = "";
      elemento_far.innerHTML = "";
      elemento_kel.innerHTML = "";
      elemento_met.innerHTML = "";
      elemento_pul.innerHTML = "";
      var numero    = valor.cantidad,
          tipo      = valor.medida[0], //Primer carácter del tipo, o sea f para fahrenheit, k para kelvin y c para celsius
          tipo_dest = null;

      if(valor.medida_dest)
        tipo_dest = valor.medida_dest[0];

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo + ", Destino: " + tipo_dest);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento_cel.innerHTML = numero.toFixed(2) + " Celsius";
          elemento_far.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          elemento_cel.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          elemento_far.innerHTML = numero.toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          elemento_cel.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
          elemento_far.innerHTML = kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          elemento_kel.innerHTML = numero.toFixed(2) + " Kelvin";
          break;
        case 'm':
          var metro = new Metro(numero);
          elemento_pul.innerHTML = metro.toPulgada().toFixed(2) + " Pulgadas";
          elemento_met.innerHTML = numero.toFixed(2) + " Metros";
          break;
        case 'p':
          var pulgada = new Pulgada(numero);
          elemento_met.innerHTML = pulgada.toMetro().toFixed(2) + " Metros";
          elemento_pul.innerHTML = numero.toFixed(2) + " Pulgadas";
          break;
      }
    }
    else{
      console.error('Error en la expresión');
      elemento_cel.innerHTML = "Error en la entrada";
      elemento_far.innerHTML = "";
      elemento_kel.innerHTML = "";
      elemento_met.innerHTML = "";
      elemento_pul.innerHTML = "";
    }
  };
})(this);
