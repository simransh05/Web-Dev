// setTimeout(()=>{
//     console.log("Maggi is here")
// },5000)


// setTimeout(()=>{
//     console.log("Maggi is prepared")
// },4500)


// setTimeout(()=>{
//     console.log("Maggi is served")
// },4000)


// setTimeout(()=>{
//     console.log("Maggi is here")
//     setTimeout(()=>{
//         console.log("Maggi is prepared")
//         setTimeout(()=>{
//             console.log("Maggi is served")
//         },4000)
//     },4500)
// },5000)


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

f1(f2)