var expect = chai.expect;

describe("Pruebas de Distancia y herencia",function(){
    describe("Probando herencia",function(){
      it ("Distancia hereda de Medida",function(){
          expect(Medida.measures.distancia.prototype).to.be.instanceof(Medida);
      });
      it ("Metro hereda de Distancia.",function(){
         expect(Medida.measures.m.prototype).to.be.instanceof(Medida.measures.distancia);        
      });
      it ("Pulgada hereda de Distancia.",function(){
         expect(Medida.measures.p.prototype).to.be.instanceof(Medida.measures.distancia);        
      });
    });
    describe("Probando medidas",function(){
    	metro = new Medida.measures.m(2);
    	it("Se debe poder convertir a pulgadas", function(){
    		expect(metro.toPulgada().valor).to.equal(new Medida.measures.p(78.7402).valor);
    	});
    	pulgada = new Medida.measures.p(15);
    	it("Se debe poder convertir a metros", function(){
    		expect(pulgada.toMetro().valor).to.equal(new Medida.measures.m(0.381).valor);
    	});
    });
});