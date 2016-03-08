/* Parte de Daniel */

(function(exports) {
  "use strict";

  function Fahrenheit(valor)
  {
    Temperatura.call(this,valor,"F");
  }

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  exports.Fahrenheit = Fahrenheit;
  Fahrenheit.prototype.toCelsius = function() {
    return (this.valor -32) * 5/9;
  };
  Fahrenheit.prototype.toKelvin = function() {
    return (this.valor + 459.67) * 5/9;
  };
})(this);
