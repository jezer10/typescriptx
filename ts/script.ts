let nombre:string;

nombre="lp1";

let edad:number;

edad=20;

const persona={nombre:nombre,edad:edad}

let varsuma=(a:number,b:number)=>(a+b);

class Circulo{
    public radio:number;
    constructor(radio:number){
        this.radio=radio;
    }
    calculararea(){
        return Math.PI*Math.pow(this.radio,2);
    }
}

let clase:Circulo = new Circulo(5);
console.log(clase.calculararea());
export{}