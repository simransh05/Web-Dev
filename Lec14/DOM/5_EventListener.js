// any activity - event


document.querySelector('body').addEventListener(('click'),(event)=>{
    event.target.style.background='red'
    setTimeout(()=>{
        event.target.style.background=''
    },2000)
    // console.log(event)
    // alert("clicked");
})

document.querySelector('body').addEventListener('dblclick',(event)=>{
    event.target.style.backgroundColor='green'
    setTimeout(()=>{
        event.target.style.backgroundColor=''
    },2000)
})



// keywords events
document.querySelector('body').addEventListener('keydown',()=>{
    alert('key is pressed')
})


// window event 

let body = document.querySelector('body')
window.addEventListener('scroll',()=>{
    let xPosition = window.scrollX;
    let yPosition= window.scrollY;

    console.log(xPosition,yPosition)
})