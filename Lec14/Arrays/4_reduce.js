let arr =[1,2,3,4,5,6,7,8]

// let sum =0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }

// console.log(sum)

let sum = arr.reduce((acumulator,item)=>{
    return acumulator+=item;
},5)
//  5 is acumulator value start with 

console.log(sum)