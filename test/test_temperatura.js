/*jslint browser: true, this: true*/
/*global
    chai describe it beforeEach afterEach sandbox sinon window console Medida
*/
var expect = chai.expect;

describe("Pruebas de Temperatura y herencia", function () {
    "use strict";
    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        sandbox.stub(window.console, "log");
        sandbox.stub(window.console, "error");
    });

    afterEach(function () {
        sandbox.restore();
    });
    describe("Probando herencia", function () {
        it("Temperatura hereda de Medida", function () {
            expect(Medida.measures.temperatura.prototype).to.be.instanceof(Medida);
            sinon.assert.notCalled(console.log);
        });
        it("Celsius hereda de Temperatura", function () {
            expect(Medida.measures.c.prototype).to.be.instanceof(Medida.measures.temperatura);
            sinon.assert.notCalled(console.log);
        });
        it("Kelvin hereda de Temperatura", function () {
            expect(Medida.measures.k.prototype).to.be.instanceof(Medida.measures.temperatura);
            sinon.assert.notCalled(console.log);
        });
        it("Fahrenheit hereda de Temperatura", function () {
            expect(Medida.measures.f.prototype).to.be.instanceof(Medida.measures.temperatura);
            sinon.assert.notCalled(console.log);
        });
    });
    describe("Probando metodos Celsius", function () {
        describe("Probando celsius", function () {
            var celsius = new Medida.measures.c(2);
            it("#toFahrenheit", function () {
                expect(celsius.toFahrenheit().valor).to.be.within(35.6, 35.7);
                sinon.assert.notCalled(console.log);
            });
            it("#toKelvin", function () {
                expect(celsius.toKelvin().valor).to.be.within(275.15, 275.16);
                sinon.assert.notCalled(console.log);
            });
            it("#toString", function () {
                expect(celsius.toString()).to.equal("2.00 Celsius");
                sinon.assert.notCalled(console.log);
            });
        });
    });
    describe("Probando metodos Fahrenheit", function () {
        describe("Probando Fahrenheit", function () {
            var fahrenheit = new Medida.measures.f(2);
            it("#toCelsius", function () {
                expect(fahrenheit.toCelsius().valor).to.be.within(-16.7, -16.6);
                sinon.assert.notCalled(console.log);
            });
            it("#toKelvin", function () {
                expect(fahrenheit.toKelvin().valor).to.be.within(256.4, 256.5);
                sinon.assert.notCalled(console.log);
            });
            it("#toString", function () {
                expect(fahrenheit.toString()).to.equal("2.00 Fahrenheit");
                sinon.assert.notCalled(console.log);
            });
        });
    });
    describe("Probando metodos Kelvin", function () {
        describe("Probando Kelvin", function () {
            var kelvin = new Medida.measures.k(2);
            it("#toCelsius", function () {
                expect(kelvin.toCelsius().valor).to.be.within(-271.16, -271.15);
                sinon.assert.notCalled(console.log);
            });
            it("#toFahrenheit", function () {
                expect(kelvin.toFahrenheit().valor).to.be.within(-456.1, -456.0);
                sinon.assert.notCalled(console.log);
            });
            it("#toString", function () {
                expect(kelvin.toString()).to.equal("2.00 Kelvin");
                sinon.assert.notCalled(console.log);
            });
        });
    });
});
