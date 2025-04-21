class person{
    name="person" // classified

    greet(){ // class method
        console.log("hi")
    }
}

let p1 = new person()

// console.log(p1.name,person.name)
console.log(p1)
console.log(person.prototype)