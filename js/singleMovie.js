const init = () => {
  // updateLoading();
  doApi()
}

const doApi = () => {
  const urlParams = new URLSearchParams(window.location.search);
  // .html?id=
  let idMovie = urlParams.get("id");
  if (idMovie) {
    let url = `https://www.omdbapi.com/?i=${idMovie}&apikey=26dac8a0`;
    // axios.get(url)
    // .then(resp => updateUi(resp.data))
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      updateUi(data);
    })
  }
}

// const updateLoading = () => {
//   //ידאג שרק אנימציית טעינה יוצג
//   document.querySelector("#id_info_div").style.display = "none";
// }

const updateUi = (_movieItem) => {
  let div = document.createElement("div");
  div.className = "bg-danger container";
  document.querySelector("#id_main").append(div);
  div.innerHTML =
    `
        <div class="description row row-cols-md-2 h-100">
        <div class="imageBox col justify-content-md-center ">
         <img class="" src="${_movieItem.Poster}"
             alt="${_movieItem.Title}">
         </div>
            <div class=" col">
            <h2 class="display-5 fst-italic my-5">Title : ${_movieItem.Title}</h2>
            <h5>Diractor: ${_movieItem.Director}</h5>
            <h5>IMDB: ${_movieItem.imdbRating}</h5>
            <h5>Language: ${_movieItem.Language}</h5>
            <h5>First release: ${_movieItem.Released} </h5>
            <h6 class="pt-5">Duration: ${_movieItem.Runtime}</h6>
            <p>${_movieItem.Plot}</p>
            </div>
          </div>
    `
  // imdbRating Year Writer Title
}


init();