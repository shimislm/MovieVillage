export default class AllMovies{
    constructor(_parent , _item){
        this.parent= _parent;
        this.title = _item.Title;
        this.year = _item.Year;
        this.type = _item.Type;
        this.image =_item.Poster;
        this.id = _item.imdbID;
        this.render();
    }
    render(){
        let div = document.createElement("div")
        div.className = "col-md-1 col-xl-1 col-6 p-3"
        document.querySelector(this.parent).append(div)
        div.innerHTML += 
        `
        <div class="h-100 img-box">
           <img src="${this.image}"
            alt="dd" width="100%" class="h-100 overflow-hidden">
          <small class="text-muted d-flex justify-content-center">${this.title}</small>
          </div>
        `
        // window.location.href = `vodSingle.html?id=${this.id}` ;
    }
}