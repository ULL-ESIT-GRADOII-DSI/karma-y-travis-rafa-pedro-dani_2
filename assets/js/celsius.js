/* Parte de Rafa */

(function(exports) {
  "use strict";

  function Celsius(valor)
  {
    this.valor = valor;
    this.tipo = "C";
  }
  exports.Celsius = Celsius;
  Celsius.prototype.toFahrenheit = function() {
    return (this.valor *9/5) + 32;
  };
  Celsius.prototype.toKelvin = function() {
    return (this.valor +273.15);
  };
})(this);