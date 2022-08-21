const init = () => {
    updateLoading();
    doApi()
  }
  
  const doApi = () => {
    const urlParams = new URLSearchParams(window.location.search);
    // .html?id=
    let idMovie = urlParams.get("id");
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
  
  const updateLoading = () => {
    //ידאג שרק אנימציית טעינה יוצג
    document.querySelector("#id_info_div").style.display = "none";
  }
  
  const updateUi = (_movieItem) => {
    // מחזיר את הדיב עם המידע על הסרט ומסתיר את הטעינה
    document.querySelector("#id_info_div").style.display = "block";
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_h1").innerHTML = _movieItem.Title;
    _movieItem.Poster = (_movieItem.Poster != "N/A") ? _movieItem.Poster : "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg";
    document.querySelector("#id_img").src = _movieItem.Poster;
    document.querySelector("#id_img").alt = _movieItem.Title;
    document.querySelector("#id_score").innerHTML = _movieItem.imdbRating;
    document.querySelector("#id_runtime").innerHTML = _movieItem.Runtime;
    document.querySelector("#id_span").innerHTML = _movieItem.Plot;
  
  }
  
  
  init();