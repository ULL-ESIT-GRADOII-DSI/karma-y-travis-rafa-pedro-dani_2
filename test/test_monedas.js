var expect = chai.expect;

describe("Pruebas de Monedas y herencia",function(){
    describe("Probando herencia",function(){
      it ("Moneda hereda de Medida",function(){
          expect(Medida.measures.moneda.prototype).to.be.instanceof(Medida);
      });
      it ("Euro hereda de Moneda.",function(){
         expect(Medida.measures.e.prototype).to.be.instanceof(Medida.measures.moneda);        
      });
      it ("Dolar hereda de Moneda.",function(){
         expect(Medida.measures.d.prototype).to.be.instanceof(Medida.measures.moneda);        
      });
      it ("Libra hereda de Moneda.",function(){
         expect(Medida.measures.l.prototype).to.be.instanceof(Medida.measures.moneda);        
      });
    });
    describe("Probando medidas",function(){
      describe("Probando euros", function(){
        euro = new Medida.measures.e(2);
        it ("Se debe poder convertir a dolares",function(){
          expect(euro.toDolar().valor).to.equal(new Medida.measures.d(2.2).valor);
        });
        it ("Se debe poder convertir a libras",function(){
          expect(euro.toLibra().valor).to.equal(new Medida.measures.l(1.56).valor);
        });
      });
      describe("Probando dolares", function(){
        dolar = new Medida.measures.d(2);
        it ("Se debe poder convertir a dolares",function(){
          expect(dolar.toEuro().valor).to.equal(new Medida.measures.e(1.8).valor);
        });
        it ("Se debe poder convertir a libras",function(){
          expect(dolar.toLibra().valor).to.equal(new Medida.measures.l(1.39056).valor);
        });
      });
      describe("Probando libras", function(){
        libra = new Medida.measures.l(2);
        it ("Se debe poder convertir a dolares",function(){
          expect(libra.toEuro().valor).to.equal(new Medida.measures.e(2.8766).valor);
        });
        it ("Se debe poder convertir a libras",function(){
          expect(libra.toDolar().valor).to.equal(new Medida.measures.d(2.2).valor);
        });
      });
    });
});