// all the elements need too wrappped in jquery wrapper
// use $ or jquery
// console.log($("body"))

const heading =$('#heading')

// read create update on element

console.log(heading)

heading.text('your website')

const p = $('<p></p>').text('i am in website')
console.log(p)

// events 
heading.click((event)=>{
    console.log(event)
})

heading.mouseenter((event)=>{
    console.log('i am over heading')
})