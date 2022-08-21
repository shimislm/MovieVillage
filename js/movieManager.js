import AllMovies from "./allMovie.js";

const movie_ar =[];
export const getAPi =() =>{
    // input.value="";
    // let _searchQuery = urlParams.get("s")? urlParams.get("s") : "red"
    // let url = `https://www.omdbapi.com/?s=${_searchQuery}&apikey=26dac8a0`;
    let url = `https://www.omdbapi.com/?s=red&apikey=26dac8a0`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.Search)
      creatMoviesList(data.Search);
    })
}
const creatMoviesList =(_ar) =>{
    _ar.forEach(item =>{
        let movie = new AllMovies("#id_row",item);
    });
}