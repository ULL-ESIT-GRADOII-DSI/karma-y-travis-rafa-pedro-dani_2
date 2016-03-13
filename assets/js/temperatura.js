function Temperatura(valor, tipo) {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Medida();

exports.Temperatura = Temperatura;
//=======================================================
          //clase Celsius
//=======================================================
function Celsius(valor) {
    Temperatura.call(this, valor, "C");
}
Celsius.prototype = new Temperatura();
Celsius.prototype.constructor = Celsius;
exports.Celsius = Celsius;
Celsius.prototype.toFahrenheit = function () {
    return (this.valor * 9 / 5) + 32;
};
Celsius.prototype.toKelvin = function () {
    return (this.valor + 273.15);
};
//=======================================================
          //clase fahrenheit
//=======================================================
function Fahrenheit(valor) {
    Temperatura.call(this, valor, "F");
}

Fahrenheit.prototype = new Temperatura();
Fahrenheit.prototype.constructor = Fahrenheit;

exports.Fahrenheit = Fahrenheit;
Fahrenheit.prototype.toCelsius = function () {
    return (this.valor - 32) * 5 / 9;
};
Fahrenheit.prototype.toKelvin = function () {
    return (this.valor + 459.67) * 5 / 9;
};
//=======================================================
          //clase kelvin
//=======================================================
function Kelvin(valor) {
    Temperatura.call(this, valor, "K");
}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;
exports.Kelvin = Kelvin;

Kelvin.prototype.toCelsius = function () {
    return (this.valor - 273.15);
};
Kelvin.prototype.toFahrenheit = function () {
    return (this.valor - 273.15) * (9 / 5) + 32;
};

//=======================================================
          //clase metro
//=======================================================
function Metro(valor)
{
  this.valor = valor;
  this.tipo = "M";
}
exports.Metro = Metro;
Metro.prototype.toPulgada = function() {
  return (this.valor *39.3701);
};

//=======================================================
          //clase pulgada
//=======================================================
function Pulgada(valor)
{
  this.valor = valor;
  this.tipo = "P";
}
exports.Pulgada = Pulgada;
Pulgada.prototype.toMetro = function() {
  return (this.valor *0.0254);
};
