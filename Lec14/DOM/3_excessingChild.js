let list = document.querySelector('.movie-list')


// let list = document.querySelectorAll('.movie-list')[0]
// console.log(list)

let children = list.children

for(let i =0;i<children.length;i++){
    console.log(children[i])
}

setTimeout(()=>{
    children[0].remove()
},4000)