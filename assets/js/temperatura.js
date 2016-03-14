function Temperatura(valor, tipo) {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

//=======================================================
          //clase Celsius
//=======================================================
function Celsius(valor) {
    Temperatura.call(this, valor, "C");
}
Celsius.prototype = new Temperatura();
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;
Celsius.prototype.toFahrenheit = function () {
    return (this.valor * 9 / 5) + 32;
};
Celsius.prototype.toKelvin = function () {
    return (this.valor + 273.15);
};
Celsius.prototype.toString = function () {
    return this.valor + " Celsius";
}
//=======================================================
          //clase fahrenheit
//=======================================================
function Fahrenheit(valor) {
    Temperatura.call(this, valor, "F");
}

Fahrenheit.prototype = new Temperatura();
Fahrenheit.prototype.constructor = Fahrenheit;

Medida.measures.f = Fahrenheit;
Fahrenheit.prototype.toCelsius = function () {
    return (this.valor - 32) * 5 / 9;
};
Fahrenheit.prototype.toKelvin = function () {
    return (this.valor + 459.67) * 5 / 9;
};
Fahrenheit.prototype.toString = function () {
    return this.valor + " Fahrenheit";
}
//=======================================================
          //clase kelvin
//=======================================================
function Kelvin(valor) {
    Temperatura.call(this, valor, "K");
}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;
Medida.measures.k = Kelvin;

Kelvin.prototype.toCelsius = function () {
    return (this.valor - 273.15);
};
Kelvin.prototype.toFahrenheit = function () {
    return (this.valor - 273.15) * (9 / 5) + 32;
};
Kelvin.prototype.toString = function () {
    return this.valor + " Kelvin";
}
