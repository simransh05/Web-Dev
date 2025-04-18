function download(msg){
    console.log("Download started")
    return new Promise((resolve,reject)=>{
        let downloadComplete = true;
        setTimeout(()=>{
            if(downloadComplete){
                resolve("download complete")
            }else {
                reject("download not complete")
            }
        },5000)
    })
}

function compress(msg){
    console.log(msg)
    console.log("compress started")
    return new Promise((resolve,reject)=>{
        let compressCompleted = true;
        setTimeout(()=>{
            if(compressCompleted){
                resolve("compress completed")
            }else{
                reject("compress not completed")
            }
        },4000)
    })
}

function upload(msg){
    console.log(msg)
    console.log("Upload started")
    return new Promise((resolve,reject)=>{
        let uploadCompleted = true;
        setTimeout(()=>{
            if(uploadCompleted){
                resolve("upload completed")
            }else{
                reject("upload fail")
            }
    },5000)
    })
    
}

function allDone(msg){
    console.log(msg)
    console.log("Process Completed")
}

// download()
// .then((msg)=>{
//     console.log(msg)
//     compress()
//     .then((msg)=>{
//         console.log(msg)
//         upload()
//         .then((msg)=>{
//             console.log(msg)
//             allDone()
//         })
//         .catch((msg)=>{
//             console.log(msg)
//         })
//     })
//     .catch((msg)=>{
//         console.log(msg)
//     })
// })
// .catch((msg)=>{
//     console.log(msg)
// })


// better option
download()
.then(compress)
.then(upload)
.then(allDone)
.catch((msg)=>{
    console.log(msg)
})