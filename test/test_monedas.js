/*jslint browser: true, this: true*/
/*global
    chai describe it beforeEach afterEach sandbox sinon window console Medida
*/

var expect = chai.expect;

describe("Pruebas de Monedas y herencia", function () {
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
        it("Moneda hereda de Medida", function () {
            expect(Medida.measures.moneda.prototype).to.be.instanceof(Medida);
            sinon.assert.notCalled(console.log);
        });
        it("Euro hereda de Moneda.", function () {
            expect(Medida.measures.e.prototype).to.be.instanceof(Medida.measures.moneda);
            sinon.assert.notCalled(console.log);
        });
        it("Dolar hereda de Moneda.", function () {
            expect(Medida.measures.d.prototype).to.be.instanceof(Medida.measures.moneda);
            sinon.assert.notCalled(console.log);
        });
        it("Libra hereda de Moneda.", function () {
            expect(Medida.measures.l.prototype).to.be.instanceof(Medida.measures.moneda);
            sinon.assert.notCalled(console.log);
        });
    });
    describe("Probando metodos", function () {
        describe("Probando euros", function () {
            it("#toDolar", function () {
                var euro = new Medida.measures.e(2);
                expect(euro.toDolar().valor).to.be.within(2.15, 2.25);
                sinon.assert.notCalled(console.log);
            });
            it("#toLibra", function () {
                var euro = new Medida.measures.e(2);
                expect(euro.toLibra().valor).to.be.within(1.54, 1.58);
                sinon.assert.notCalled(console.log);
            });
        });
        describe("Probando dolares", function () {
            it("#toEuro", function () {
                var dolar = new Medida.measures.d(2);
                expect(dolar.toEuro().valor).to.be.within(1.7, 1.9);
                sinon.assert.notCalled(console.log);
            });
            it("#toLibra", function () {
                var dolar = new Medida.measures.d(2);
                expect(dolar.toLibra().valor).to.be.within(1.38, 1.40);
                sinon.assert.notCalled(console.log);
            });
        });
        describe("Probando libras", function () {
            it("#toEuro", function () {
                var libra = new Medida.measures.l(2);
                expect(libra.toEuro().valor).to.be.within(2.86, 2.88);
                sinon.assert.notCalled(console.log);
            });
            it("#toDolar", function () {
                var libra = new Medida.measures.l(2);
                expect(libra.toDolar().valor).to.be.within(2.15, 2.25);
                sinon.assert.notCalled(console.log);
            });
        });
    });
});