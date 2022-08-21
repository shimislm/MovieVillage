export default class AllMovies{
    constructor(_parent , _item){
        this.parent= _parent;
        this.Title = _item.Title;
        this.Year = _item.Year;
        this.Type = _item.Type;
        this.Poster =_item.Poster;
        this.id = _item.imdbID;
        this.render();
    }
    render(){
        let div = document.createElement("div")
        div.className = "col card mb-3"
        document.querySelector(this.parent).append(div)
        div.innerHTML += 
        `
        <div class="row g-0">
        <div class="col-md-3">
          <img src="${this.Poster}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this.Title}</h5>
            <p class="card-text"><small class="text-muted">${this.Year}</small></p>
          </div>
        </div>
      </div>
        `
        // window.location.href = `vodSingle.html?id=${this.id}` ;
    }
}