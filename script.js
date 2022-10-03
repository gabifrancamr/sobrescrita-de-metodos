class Spaceship {
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxVelocidade){
            console.log("Velocidade máxima ultrapassada. Diminua")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp(){
        console.log("Naves de transporte só aumenta a velocidade em 1 Km/s")
        this.currentVelocity++
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transportSpaceship.speedUp()

console.log(transportSpaceship)