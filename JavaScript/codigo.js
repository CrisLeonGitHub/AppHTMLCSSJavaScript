//let nombre = prompt("ingresa tu nombre:")
//document.write("hola " + nombre + "<br>");



class Animal {
    constructor(espesie,eda,kolor){
        this.raza = espesie;
        this.edad = eda;
        this.color = kolor;
        this.info = `Soy ${this.raza}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo(){
        document.writeln(this.info + '<br>');
    }
}

class Canino extends Animal{
    constructor(espesie,eda,kolor,raza){
        super(espesie,eda,kolor);
        this.raza=raza;
        this.info = `Soy ${this.raza}, tengo ${this.edad} años y soy de color ${this.color} de raza ${this.raza}`;
    }

    ladrar(){
        document.writeln("<br>guau<br><br>");
    }
}

const mascota = new Animal("gato",7,"amarillo");
console.log(mascota);
console.log(mascota.info);

const mascotad = new Canino("perro",11,"negro","doverman");
const mascotab = new Animal("pagaro",2,"verde");

mascota.verInfo();
mascotad.verInfo();
mascotad.ladrar();
mascotab.verInfo();

//DOM
const titulo = document.querySelector(".titulo");
titulo.classList.add("grande");