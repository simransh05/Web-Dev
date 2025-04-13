// That is returning higher order fun
function generator(){
    console.log()
    function innerfun(){
        console.log("I am  inside another function")
    }
    return innerfun;
}
// call function 
let f = generator();
// console.log(f);
// f();

function user(fun){
    fun();
}
// user(f);

function hof(fun){
    function hello(){
        fun();
        console.log("hello")
    }
    return hello;
}

let f2= hof(f);
f2();