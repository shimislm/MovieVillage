const init = () => {
    // updateLoading();
    doApi()
  }
  
  const doApi = () => {
    const urlParams = new URLSearchParams(window.location.search);
    // .html?id=
    let idMovie = urlParams.get("id");
    console.log("im here")
    console.log(idMovie)
    if(idMovie){
      let url = `http://www.omdbapi.com/?i=${idMovie}&apikey=5a292f28`;
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
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
    div.className = "bg-danger";
    document.querySelector("#id_main").append(div);
    div.innerHTML = 
    `
            <div class="imageBox col-md-4 col-sm-6 col-8 mx-auto">
                <img src="${_movieItem.Poster}"
                    alt="" width="100%" height="100%">
            </div>
            <div class="description container">
                <h2 class="display-5 fst-italic">Title : ${_movieItem.Title}</h2>
                <h5>bla bla</h5>
            </div>
    `
    // imdbRating Year Writer Title
  }
  
  
  init();