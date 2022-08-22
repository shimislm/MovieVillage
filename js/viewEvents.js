import { getApi } from "./movieManager.js";

export const declareEvents = () =>{
    let searchV = document.querySelector("#id_search");
    searchV.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            getApi(searchV.value);
        }
    })
}