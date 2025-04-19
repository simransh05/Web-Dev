function printPersonDetails(city,country){
    console.log(this.name)
    console.log(this.age)
    console.log(this.college)
    console.log(city)
    console.log(country)
}
// this is for global - browser
let p1={
    name:"Partham",
    age:19,
    college:"BVP"
}

let p2={
    name:"Aryan",
    age:18,
    college:"MAIT"
}
// bind with the p1
// approach I
// printPersonDetails.call(p1)


// in call we send context first and the parameters required by the function
// printPersonDetails.call(p1,"Delhi","India")

// approach -II
// printPersonDetails.apply(p2,["Delhi","India"])


// bind for binding the data 
let f1 = printPersonDetails.bind(p1,"Delhi","India")
let f2 = printPersonDetails.bind(p2,"Delhi","India")

f1()
console.log()
f1()