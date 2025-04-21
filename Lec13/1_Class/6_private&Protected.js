// class coffeeMaker{
//     waterAmount = 0

//     constructor(type){
//         this.type=type;
//     }
// }

// let cm = new coffeeMaker("espresso")
// console.log(cm.waterAmount)

// protected
// class vehicle{
//     _year=2025
//     constructor(company){
//         this.company=company;
//     }
// }

// class car extends vehicle{
//     constructor(name,company){
//         super(company)
//         this.name=name
//         console.log(`this car has a name ${this.name} made by ${this.company} in ${this._year}`)
//     }
// }

// let c = new car("Punch","tata")
// console.log(c.year)

// private
class coffeeMaker{
    #waterAmount = 20

    constructor(type){
        this.type=type;
        console.log(this.#waterAmount)
    }
    details(){
        console.log(this.#waterAmount)
    }
}

let cm1 = new coffeeMaker("Latte")
cm1.details()