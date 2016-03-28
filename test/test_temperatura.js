var expect = chai.expect;

describe("Pruebas de Temperatura y herencia",function(){
    describe("Probando herencia",function(){
      it ("Temperatura hereda de Medida",function(){
          //console.log(Medida.measures.temperatura);
          expect(Medida.measures.temperatura.prototype).to.be.instanceof(Medida);
      });
      it("Celsius hereda de Temperatura",function(){
        expect(Medida.measures.c.prototype).to.be.instanceof(Medida.measures.temperatura);
      });
      it("Kelvin hereda de Temperatura",function(){
        expect(Medida.measures.k.prototype).to.be.instanceof(Medida.measures.temperatura);
      });
      it("Fahrenheit hereda de Temperatura",function(){
        expect(Medida.measures.f.prototype).to.be.instanceof(Medida.measures.temperatura);
      });
    });
});
