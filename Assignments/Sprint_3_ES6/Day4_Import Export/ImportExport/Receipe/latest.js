import navbar from "./components/navbar.js"

import { getFooddata, appendData } from "./scripts/data.js"

let nav = document.querySelector("#navbar");

nav.innerHTML = navbar();

navbar();

dishdata()

async function dishdata() {
    // let dishdata = async () =>{
    var xyz = document.querySelector("#search").value;
    console.log(xyz)

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${xyz}`

    let data = await getFooddata(url);
    console.log(data)

    let parent = document.querySelector("#box")
    parent.innerHTML = ""
    appendData(data, parent)

}

let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    dishdata();

})


let item = document.getElementById('search')

item.oninput = debounce;

let timerId;
// var debounce = () =>{
function debounce() {

    if (timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(function () {

        dishdata();
    }, 1000);

}