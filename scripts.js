//Ejer 1:
class Warrior{
    constructor(life,power){
        this.life = life;
        this.power = power;

    }
    attack(){
        return this.power;
    }
    defend(damage){
        this.life -= damage;
        console.log(`vida restante ${this.life}`);
        
    }
}
let warrior1 = new Warrior (100,40);
warrior1.attack();
warrior1.defend(30);

//Ejer 2:

class Maya extends Warrior{
    constructor(life,power,){
        super(life,power)
    }
    drinkColacao(){
        this.power += 10;
        console.log(`Poder aumenta a ${this.power}`);
    }
}

class Aztec extends Warrior{
    constructor(life,power){
        super(life,power)
    }
    drinkNesquik(){
        this.life += 10;
        console.log(`Vida aumenta a ${this.life}`);
    }
}
let maya = new Maya(100, 20);
let aztec = new Aztec(120, 15);
maya.drinkColacao();//sube 10
maya.attack();//30
aztec.drinkNesquik();//Sube 10, life 130
aztec.defend(20)//Defiende 20, le quedan life 110

//Ejer 3: Intercambio de golpes

//Personajes:
let maya1 = new Maya(180,50);
let aztec1 = new Aztec(180,40);

//Beben

maya1.drinkColacao();
aztec1.drinkNesquik();

//Maya ataca a azteca. Azteca defiende:
let damageFromMaya = maya1.attack();
aztec1.defend(damageFromMaya);

//Azteca ataca a maya. Maya defiende:

let damageFromAztec = aztec1.attack();
maya1.defend(damageFromAztec);




