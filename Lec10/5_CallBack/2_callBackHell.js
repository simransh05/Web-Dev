function f1(cb){
    setTimeout(()=>{
        console.log("Maggi is here")
        cb(f3)
    },5000)
}


function f2(cb){
    setTimeout(()=>{
        console.log("Maggi is prepared")
        cb()
    },4500)
}

function f3(){
    setTimeout(()=>{
        console.log("Maggi is served")
    },4000)
}


// f1((cb)=>{
//     setTimeout(()=>{
//         console.log("Maggi is prepared")
//         setTimeout(()=>{
//             console.log("Maggi is served")
//         },4000)
//     },4500)
// })


f1(()=>{
    f2(()=>{
        f3()
    })
})