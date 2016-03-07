(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
    this.valor = valor;
    this.tipo = tipo;
  }

  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    this.valor = valor;
    this.tipo = tipo;
  }

  exports.Temperatura = Temperatura;

  exports.convertir = function() {
      var elemento_cel  = document.getElementById('converted_cel'),
          elemento_far  = document.getElementById('converted_far'),
          elemento_kel  = document.getElementById('converted_kel'),
          elemento_met  = document.getElementById('converted_met'),
          elemento_pul  = document.getElementById('converted_pul');
        /* Extienda la RegeExp a la especificación. use una XRegExp */
        var regexp=XRegExp('(?<entrada>^[ ]*([-+]?[0-9]+(?:\.[0-9]+)?[ ]*(?:e[+-]?[1-9]+)?))#entrada \n\
        (?<medida>[ ]*([cCfFkKmM])?) #medida \n\
        (?<parteopcional> [ ]*([tT][o])?[ ]*) #parteopcional \n\
         (?<conversion>[ ]*[cCfFkKmMpP][ ]*) #conversion','x');
         var valor=XRegExp.exec(document.getElementById('convert').value,regexp);
         console.log(valor.parteopcional);
    if (valor) {
      var numero = valor.entrada,
          tipomedida=(valor.medida).toLowerCase(),
          tipoconversion= valor.conversion.toLowerCase();
          console.log("Numero: "+numero);
          console.log("tipomedida: "+tipomedida);
          console.log("tipoconversion: "+tipoconversion);

      numero = parseFloat(numero);


      if(tipomedida==="")
      {
      switch (tipoconversion) {
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
        default:
          elemento_cel.innerHTML = "";
          elemento_far.innerHTML = "";
          elemento_kel.innerHTML = "";
          elemento_met.innerHTML = "";
          elemento_pul.innerHTML = "";
      }

  }
  else {
      switch (tipoconversion) {
        case 'c':

          if(tipomedida=='c')
          {

            var celsius = new Celsius(numero);
            elemento_cel.innerHTML = numero.toFixed(2) + " Celsius";
          }
          else if(tipomedida=='f')
          {

            var fahrenheit = new Fahrenheit(numero);
            elemento_cel.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          }
          else if(tipomedida=='k')
          {

            var kelvin = new Kelvin(numero);
              elemento_cel.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
          }
        break;



        case 'f':
          if(tipomedida=='c')
          {
            var celsius = new Celsius(numero);
            elemento_far.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          }
          else if(tipomedida=='f')
          {
            var fahrenheit = new Fahrenheit(numero);
            elemento_far.innerHTML = numero.toFixed(2) + " Fahrenheit";
          }
          else if(tipomedida=='k')
          {
            var kelvin = new Kelvin(numero);
          elemento_far.innerHTML = kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          }
        break;




        case 'k':
          if(tipomedida=='c')
          {
            var celsius = new Celsius(numero);
            elemento_kel.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
          }
          else if(tipomedida=='f')
          {
            var fahrenheit = new Fahrenheit(numero);
            elemento_kel.innerHTML = fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          }
          else if(tipomedida=='k')
          {
            var kelvin = new Kelvin(numero);
            elemento_kel.innerHTML = numero.toFixed(2) + " Kelvin";
          }
        break;

        case 'm':
          if(tipomedida=='m')
          {
            var metro = new Metro(numero);
            elemento_met.innerHTML = numero.toFixed(2) + " Metros";
          }
          else if(tipomedida=='p')
          {
            var pulgada = new Pulgada(numero);
            elemento_met.innerHTML = pulgada.toMetro().toFixed(2) + " Metros";
          }
          break;

        case 'p':
          if(tipomedida=='m')
          {
            var metro = new Metro(numero);
            elemento_pul.innerHTML = metro.toPulgada().toFixed(2) + " Pulgadas";

          }
          else if(tipomedida=='p')
          {
            var pulgada = new Pulgada(numero);
            elemento_pul.innerHTML = numero.toFixed(2) + " Pulgadas";
          }
          break;
        default:
          elemento_cel.innerHTML = "";
          elemento_far.innerHTML = "";
          elemento_kel.innerHTML = "";
          elemento_met.innerHTML = "";
          elemento_pul.innerHTML = "";
      }
    }
  }
    else{
      elemento_cel.innerHTML = "error";
      elemento_far.innerHTML = "error";
      elemento_kel.innerHTML = "error";
      elemento_met.innerHTML = "error";
      elemento_pul.innerHTML = "error";
    }
  };
})(this);
