let movieHeading = document.getElementById('movie-heading')
console.log(movieHeading);


let movieName= document.getElementsByClassName('movie-name')
console.log(movieName)


let movieList = document.getElementsByTagName("div")
console.log(movieList)

// use for selecting all 3 together --- for id -# , for class ., for tag - normal name
let movieHead = document.querySelector('#movie-heading')
let movieL = document.querySelector(".movie-name") //will get the first element and return that

// for multiple element for same use 
let movie =  document.querySelectorAll(".movie-name")
console.log(movie)


let movieLi = document.querySelectorAll("li")
console.log(movieLi)