// hello()

// function hello(){
//     console.log(hello)
// }


// outerFun()
// innerfun()
/*
inner function is notin global scope that why 
*/

outerFun()

function outerFun(){
    innerfun()
    console.log("I am outside")
    function innerfun(){
        console.log("I am inside")
    }
    return innerfun
}