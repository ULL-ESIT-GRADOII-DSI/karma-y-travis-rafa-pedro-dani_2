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
    describe("Probando metodos Celsius",function(){
      describe("Probando celsius",function(){
        celsius = new Medida.measures.c(2);
    
        it ("Se debe poder convertir a Fahrenheit",function(){
          expect(celsius.toFahrenheit().valor).to.equal(new Medida.measures.f(35.6).valor);
        });
        it ("Se debe poder convertir a Kelvin",function(){
          expect(celsius.toKelvin().valor).to.equal(new Medida.measures.k(275.15).valor);
        });

      });
    });
    describe("Probando metodos Fahrenheit",function(){
      describe("Probando Fahrenheit",function(){
        fahrenheit = new Medida.measures.f(2);

        it ("Se debe poder convertir a Celsius",function(){
          expect(fahrenheit.toCelsius().valor).to.equal(new Medida.measures.c(-16.666666666666668).valor);
        });
        it ("Se debe poder convertir a Kelvin",function(){
          expect(fahrenheit.toKelvin().valor).to.equal(new Medida.measures.k(256.48333333333335).valor);
        });

      });
    });
    describe("Probando metodos Kelvin",function(){
      describe("Probando Kelvin",function(){
        kelvin = new Medida.measures.k(2);
        it ("Se debe poder convertir a Celsius",function(){
          expect(kelvin.toCelsius().valor).to.equal(new Medida.measures.c(-271.15).valor);
        });
        it ("Se debe poder convertir a Fahrenheit",function(){
          expect(kelvin.toFahrenheit().valor).to.equal(new Medida.measures.f(-456.07).valor);
        });

      });
    });
});
