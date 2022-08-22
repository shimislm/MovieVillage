import AllMovies from "./allMovie.js";
const movie_ar =[];
export const getApi = searchValue =>{
    let url = `http://www.omdbapi.com/?s=${searchValue}&apikey=26dac8a0`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.Search)
      creatMoviesList(data.Search);
    })
}
export const creatMoviesList = _ar =>{
  document.querySelector("#id_action").innerHTML = '';
        _ar.forEach(item =>{
            let movie = new AllMovies("#id_action",item);
        });
}