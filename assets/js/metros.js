(function(exports) {
  "use strict";

  function Metro(valor)
  {
    this.valor = valor;
    this.tipo = "M";
  }
  exports.Metro = Metro;
  Metro.prototype.toPulgada = function() {
    return (this.valor *39.3701);
  };
})(this);