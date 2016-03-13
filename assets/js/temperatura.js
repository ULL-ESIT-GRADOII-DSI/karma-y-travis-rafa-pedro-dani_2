function Temperatura(valor, tipo) {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Medida();

exports.Temperatura = Temperatura;
