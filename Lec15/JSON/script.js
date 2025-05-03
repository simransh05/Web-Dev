let p1 = {
    name:'xyz',
    age:19,
    city:'delhi',
    college:'MAIT'
}

let stringifiedP1 = JSON.stringify(p1);

console.log(
    "p1 as object",p1,
    "p1 as string",stringifiedP1)


let arr = [0,true,'hi',.01];

let stringifiedArr = JSON.stringify(arr)

let parsedP1 = JSON.parse(stringifiedP1);
let parsedarr = JSON.parse(stringifiedArr);

console.log(stringifiedArr,parsedarr)

console.log(stringifiedP1,parsedP1)