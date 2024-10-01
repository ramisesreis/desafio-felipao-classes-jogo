// Classe com informações do Herói
class Hero{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
//Método 
    atack(){
        let atack
        switch (this.type){
            case "Mago":
                atack = "magia"
                break
            case "Guerreiro":
                atack = "espada"
                break
            case "Monge":
                atack = "artes marciais"
                break    
            case "Ninja":
                atack = "shuriken"
                break     
            }
       console.log(`O ${this.type} atacou usando ${atack}`)
    }
}


let hero1 = new Hero("Otávio", 6, "Ninja" )
let hero2 = new Hero("Neliane", 34, "Mago" )
let hero3 = new Hero("Ramisés", 37, "Guerreiro" )
let hero4 = new Hero("Yang", 6, "Monge" )

hero1.atack()
hero2.atack()
hero3.atack()
hero4.atack()
