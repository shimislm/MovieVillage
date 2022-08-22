import { getApi } from "./movieManager.js";
import { declareEvents } from "./viewEvents.js";

const init =()=>{
    getApi("red");
    declareEvents();
}

init();