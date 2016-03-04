/* Parte de Daniel */

(function(exports) {
  "use strict";

  function Fahrenheit(valor)
  {
    this.valor = valor;
    this.tipo = "F";
  }
  exports.Fahrenheit = Fahrenheit;
  Fahrenheit.prototype.toCelsius = function() {
    return (this.valor -32) * 5/9;
  };
  Fahrenheit.prototype.toKelvin = function() {
    return (this.valor + 459.67) * 5/9;
  };
})(this);