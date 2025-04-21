class vehicle{
    constructor (company,year){
        this.company=company
        this.year=year
    }

    details(){
        console.log(`This vehicle was made in ${this.year} by ${this.company}`)
    }
}
class car extends vehicle{
    start(){
        console.log("this car is running")
    }
}

let v1 = new car("BYD",2024)
v1.details()
v1.start()