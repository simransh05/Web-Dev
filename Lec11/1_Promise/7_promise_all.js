let p1 = new Promise((resolve, reject) => {
    console.log("data encryption started")
    let dataencyptionfinised = true;
    setTimeout(() => {
        if(dataencyptionfinised){
            resolve("data encryption finised")
        }else {
            reject("not finised")
        }
    },2000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("data encryption started 2")
    let dataencyptionfinised2 = true;
    setTimeout(() => {
        if(dataencyptionfinised2){
            resolve("data 2 encryption finised")
        }else {
            reject("not finised 2")
        }
    },2000);
})

Promise.race((p1,p2))
.then((msg)=>{
    console.log(msg)
})
.catch((msg)=>{
    console.log(msg)
})


// Promise.all((p1,p2))
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((msg)=>{
//     console.log(msg)
// })