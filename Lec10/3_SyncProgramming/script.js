function delay1Sec(){
    let beginning = new Date().getTime()
    while(new Date().getTime()-beginning<1000){

    }
}

function delayNSec(n){
    for(let i =0;i<n;i++){
        delay1Sec()
    }
}
delayNSec(10)
console.log("I am here ")
