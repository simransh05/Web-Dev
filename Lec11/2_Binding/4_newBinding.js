function person(n,a,c){
    this.name=n;
    this.age =a;
    this.college=c;
}
// creating an object using constructor (function)--->new binding 
let p1 = new person("pratham",19,"BVP")

let p2 = new person("Aryan",18,"MAIT")


console.log(p1)