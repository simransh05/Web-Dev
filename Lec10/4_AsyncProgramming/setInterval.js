let intervalID =setInterval(()=>{
    console.log("hello world")
},2000)


setTimeout(()=>{
    clearInterval(intervalID)
},8050)


