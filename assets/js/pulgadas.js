(function(exports) {
  "use strict";

  function Pulgada(valor)
  {
    this.valor = valor;
    this.tipo = "P";
  }
  exports.Pulgada = Pulgada;
  Pulgada.prototype.toMetro = function() {
    return (this.valor *0.0254);
  };
})(this);