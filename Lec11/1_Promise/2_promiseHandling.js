let kalTimeSeAaegaa = new Promise((resolve,reject)=>{
    let KalAaaya = false;
    if(KalAaaya){
        resolve("aa gya");
    }else {
        reject("nhi aya")
    }
})

kalTimeSeAaegaa
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})