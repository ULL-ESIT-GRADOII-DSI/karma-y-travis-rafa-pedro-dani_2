/* Parte de Pedro */

(function(exports) {
  "use strict";

  function Kelvin(valor)
  {
    this.valor=valor;
    this.tipo='k';
  }
  exports.Kelvin = Kelvin;
  Kelvin.prototype.toCelsius = function() {
    return (this.valor-273.15);
  };
  Kelvin.prototype.toFahrenheit = function() {
    return (this.valor-273.15)*(9/5)+32;
  };
})(this);
