Array.prototype.reduceFun = function (fun) {
    let acc = this[0];
    for (let i = 1; i < this.length; i++) {
        acc = fun(acc, this[i])
    }
    return acc;
}

let arr = [1, 2, 3, 4, 5]
let value = arr.reduceFun((item, curr) => {
    return item + curr;
})

console.log(value)