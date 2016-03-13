function Distancia(valor, tipo) {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
}

Distancia.prototype = new Medida();
Distancia.prototype.constructor = Distancia;

function Metro(valor) {
    Distancia.call(this, valor, "M");
}
Metro.prototype = new Distancia();
Metro.prototype.constructor = Metro;
Medida.measures.m = Metro;
Metro.prototype.toPulgada = function () {
    return (this.valor *39.3701);
};

function Pulgada(valor) {
    Distancia.call(this, valor, "P");
}
Pulgada.prototype = new Distancia();
Pulgada.prototype.constructor = Pulgada;
Medida.measures.m = Pulgada;
Pulgada.prototype.toMetro = function() {
    return (this.valor *0.0254);
};