var expect = chai.expect;

describe('Prueba', function(){
    var sandbox;

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
      sandbox.stub(window.console, "log");
      sandbox.stub(window.console, "error");
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('Prueba de prueba', function(){
        it('deberia pasar si todo esta bien configurado', function () {
            expect(true).to.be.true; // Prueba de que chai se carga correctamente
            sinon.assert.notCalled(console.log); // Prueba de que sinon se carga correctamente
        });
    });
    describe ('Pruebas con el constructor de Medida.',function(){
      it ('Debería  pasar si se le pasan dos argumentos.',function(){
          var prueba1=(new Medida(2,"f"));
           expect("2f").to.equal(prueba1.valor+prueba1.tipo);
      });
      it ('Debería  pasar si se le pasa un argumento.',function(){
          var prueba1=(new Medida("32f"));
           expect("32f").to.equal(prueba1.valor+prueba1.tipo);
      });
    });
});
