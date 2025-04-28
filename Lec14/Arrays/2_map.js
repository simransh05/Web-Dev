let arr = [1,2,3,4,5,6,7,8]


// not applicable in js
// let newArr = []
// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i]*2);
// }

// console.log(newArr)

// let newMap = arr.map(item=>{
//     return item*2
// })

// console.log(newMap)

let newMap = arr.map((item,index,arr)=>{
    console.log(item,index,arr)
    return item*2
})