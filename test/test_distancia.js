/*jslint browser: true, this: true*/
/*global
    chai describe it beforeEach afterEach sandbox sinon window console Medida
*/

var expect = chai.expect;

describe("Pruebas de Distancia y herencia", function () {
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

    describe("Distancia", function () {
        it("Distancia hereda de Medida", function () {
            expect(Medida.measures.distancia.prototype).to.be.instanceof(Medida);
            sinon.assert.notCalled(console.log);
        });
    });
    describe("Metro", function () {
        it("Metro hereda de Distancia", function () {
            expect(Medida.measures.m.prototype).to.be.instanceof(Medida.measures.distancia);
            sinon.assert.notCalled(console.log);
        });
        var metro = new Medida.measures.m(2);
        it("#toPulgada", function () {
            expect(metro.toPulgada().valor).to.be.within(78.7, 78.8);
            sinon.assert.notCalled(console.log);
        });
    });
    describe("Pulgada", function () {
        it("Pulgada hereda de Distancia", function () {
            expect(Medida.measures.p.prototype).to.be.instanceof(Medida.measures.distancia);
            sinon.assert.notCalled(console.log);
        });
        var pulgada = new Medida.measures.p(15);
        it("#toMetro", function () {
            expect(pulgada.toMetro().valor).to.be.within(0.38, 0.39);
            sinon.assert.notCalled(console.log);
        });
    });
});

