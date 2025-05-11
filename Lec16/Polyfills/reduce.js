Array.prototype.reduceFun = function(fun,initialVal){
    let total =0;
    let acc = initialVal;
    if(acc==undefined){
        acc=this[0]
        total=1
    }

    for(let i=1;i<this.length;i++){
        acc = fun(acc,this[i])
    }

    return acc;
}

let arr = [5,4,3,2,1]
let value = arr.reduceFun((item,curr)=>{
    return item+curr;
})

console.log(value)