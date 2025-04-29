let newMovie = document.createElement('li')
newMovie.innerText='SpiderMan';
newMovie.classList.add('movie-name')

let movieList = document.querySelector(".movie-list")

setTimeout(()=>{
    movieList.append(newMovie)
    let movie = document.querySelectorAll('.movie-name');
    console.log(movie)
},5000)
// movieList.append(newMovie)