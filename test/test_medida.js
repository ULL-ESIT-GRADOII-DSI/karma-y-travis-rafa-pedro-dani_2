/*jslint browser: true, this: true*/
/*global
    chai describe it beforeEach afterEach sandbox sinon window console Medida
*/

var expect = chai.expect;

describe("Pruebas de Medida", function () {
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

    describe('#constructor.', function () {
        it('Debería  pasar si se le pasan dos argumentos.', function () {
            var prueba1 = (new Medida(2, "f"));
            expect("2f").to.equal(prueba1.valor + prueba1.tipo);
            sinon.assert.notCalled(console.log);
        });
        it('Debería  pasar si se le pasa un argumento.', function () {
            var prueba1 = (new Medida("32f"));
            expect("32f").to.equal(prueba1.valor + prueba1.tipo);
            sinon.assert.notCalled(console.log);
        });
    });
    describe('#convertir', function () {
        it('El metodo convertir debe funcionar correctamente', function () {
            var input = "23 f to c";
            expect(Medida.convertir(input)).to.equal("-5.00 Celsius");
            sinon.assert.notCalled(console.log);
        });
        it('Se debe poder convertir a su mismo tipo', function () {
            var input = "23 f to f";
            expect(Medida.convertir(input)).to.equal("23.00 Fahrenheit");
            sinon.assert.notCalled(console.log);
        });
        it('Se debe imprimir un error si la entrada no esta bien tipada (EDGE)', function () {
            var input = "2asd233 asdf asdatasdo r";
            expect(Medida.convertir(input)).to.equal("Introduzca una entrada valida como: 330e-1 F to C");
            expect(console.log).to.have.been.called;
        });
        it('Se debe imprimir un error si el flotante no esta bien (EDGE)', function () {
            var input = "23e-2kasd2 f to r";
            expect(Medida.convertir(input)).to.equal("Introduzca una entrada valida como: 330e-1 F to C");
            expect(console.log).to.have.been.called;
        });
        it('Se debe imprimir un error si se desconoce el tipo (EDGE)', function () {
            var input = "23 r to f";
            expect(Medida.convertir(input)).to.equal("No se convertir de r a f");
            expect(console.log).to.have.been.called;
        });
    });
    describe('#anadirTipos', function () {
        it('Cuando se llama sin argumentos, devuelve undefined', function () {
            expect(Medida.anadirTipos()).to.be.undefined;
        });
    });
});
