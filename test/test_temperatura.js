var expect = chai.expect;

describe("Pruebas de Temperatura y herencia",function(){
    describe("Probando herencia",function(){
      it ("Temperatura hereda de Medida",function(){
         function Temperatura(valor,tipo){
             Medida.call(this, valor, tipo);
         }
        var t1=new Medida(2,"f");
        t1.prototype instanceof Medida;
        t1 instanceof Temperatura;
        //t1.prototype instanceof Medida;
      });
      it ("Celsius hereda de Temperatura.",function(){
        function Celsius(valor) {
            Temperatura.call(this, valor, "C");
            Celsius.prototype = new Temperatura();
            Celsius.prototype.constructor = Celsius;
        }
        
        //Celsius.prototype instanceof Temperatura;
      });
    });
});
