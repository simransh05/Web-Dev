class vehicle{
    constructor (company,year){
        // console.log("in vehicle class")
        this.company=company
        this.year=year
    }

    details(){
        console.log(`This vehicle was made in ${this.year} by ${this.company}`)
    }
}
class car extends vehicle{
    constructor(name,price,company,year){
        super(company,year)
        // console.log("in car class")
        this.name=name;
        this.price=price
    }
    start(){
        console.log("this car is running")
    }
    details(){
        console.log(`This car ${this.name} car with a price of ${this.price}`)
        super.details()
    }
}

let c1 = new car("punch",80000,"BYD",2024)
c1.details()
// c1.start()
console.log("car object",c1)
console.log("c1 parent",c1.__proto__)
console.log("c1 parent ka parent",c1.__proto__.__proto__)
