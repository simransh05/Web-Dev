// use for combining the function and call any time 


// (function fun(){
//     var x = 10
//     console.log(x)
// })()
// console.log(x)


// (function greet(name){
//     console.log(`hi ${name}`)
// })('jack')


let module1 = (function(){
    var x =10;
    function myfun(){
        console.log(new Date())
    }
    return {
        val:x,
        fun:myfun
    }
})()

module1.fun()
console.log(module1.val)


var counter= (function(){
    var cnt = 0;
    function decrement(){
        cnt--;
        console.log(cnt) 
    }
    function increment(){
        cnt++;
        console.log(cnt)
    }
    return {
        cnt, // cnt:cnt (same)
        increment,
        decrement
    }
})()

counter.increment();
counter.increment()
counter.decrement()