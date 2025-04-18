let kalTimeSeAaegaa = new Promise((resolve,reject)=>{
    let KalAaaya = true;
    if(KalAaaya){
        resolve("aa gya");
    }else {
        reject("nhi aya")
    }
})

kalTimeSeAaegaa
.then((msg)=>{
    console.log(msg)
    return "Task Complete kr"
})
.then((msg)=>{
    console.log(msg)
    return "good"
})
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})