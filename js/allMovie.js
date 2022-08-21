export default class Movies{
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
        document.querySelector(this.parent)

    }
}