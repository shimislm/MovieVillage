const movie_ar =[];
export const getAPi =() =>{
    // input.value="";
    // let _searchQuery = urlParams.get("s")? urlParams.get("s") : "red"
    // let url = `https://www.omdbapi.com/?s=${_searchQuery}&apikey=26dac8a0`;
    let url = `https://www.omdbapi.com/?s=red&apikey=26dac8a0`
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      creatMoviesList(data.Search);
    })
}
const 