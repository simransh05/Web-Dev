var x=1
var s = "hello"

function fun(){
    function fun1(){
        console.log(this.x)
    }return fun1
}

let y = fun()
y()