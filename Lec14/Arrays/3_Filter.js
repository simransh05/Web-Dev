let arr =[1,2,3,4,5,6,7,8]
let arr1 = arr.filter((item,index,arr)=>{
    console.log(item,index,arr)
    return (item%2==0)
})

console.log(arr1)
