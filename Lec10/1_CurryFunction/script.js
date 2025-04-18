function add(a,b){
    return a+b;
}

console.log(add(1,2))

function addAll(num){
    if(!num){
        return 0;
    }return function helper(num1){
        if(!num1){
            return num;
        }num+=num1;
        return helper
    }
}
console.log(addAll(2)(5)(6)())