class Combattant {
    constructor(nom, attaque, precision, pv) {
        this.nom = nom
        this.attaque = attaque
        this.precision = precision
        this.pv = pv
    }
    getAttaque() {
        return this.attaque
    }
    getPrecision() {
        return Math.random() < this.precision
    }
}

let Combattant1 = new Combattant("Romulus", 25, 0.82, 100)
let Combattant2 = new Combattant("Rémus", 36, 0.68, 100)

console.log("ROMULUS ET RÉMUS S'AFFRONTENT EN DUEL :")

let round = 1;
while (Combattant1.pv > 0 && Combattant2.pv > 0) {
    console.log("Tour " + round + " - " + Combattant1.nom + " attaque " + Combattant2.nom)

    if (Combattant1.getPrecision()) {
        console.log(Combattant1.nom + " frappe " + Combattant2.nom + " et lui assène " + Combattant1.getAttaque() + " points de dégâts.")
        Combattant2.pv -= Combattant1.getAttaque()
        console.log("Vie restante de " + Combattant2.nom + ": " + Combattant2.pv)
    } else {
        console.log(Combattant1.nom + " a raté son attaque !")
    }

    if (Combattant2.pv <= 0) {
        console.log(Combattant2.nom + " est vaincu ! " + Combattant1.nom + " ressort du combat victorieux !")
        break;
    }


    console.log("Round " + round + " - " + Combattant2.nom + " attaque " + Combattant1.nom)

    if (Combattant2.getPrecision()) {
        console.log(Combattant2.nom + " fait mouche et inflige " + Combattant2.getAttaque() + " points de dégâts à " +Combattant1.nom)
        Combattant1.pv -= Combattant2.getAttaque()
        console.log("Vie restante de " + Combattant1.nom + ": " + Combattant1.pv)
    } else {
        console.log(Combattant2.nom + " rate son attaque.")
    }

    if (Combattant1.pv <= 0) {
        console.log(Combattant1.nom + " est vaincu ! " + Combattant2.nom + " remporte le combat!")
        break;
    }

    round++
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
