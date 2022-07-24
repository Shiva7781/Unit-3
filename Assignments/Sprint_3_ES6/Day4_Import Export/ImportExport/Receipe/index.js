import navbar from "./components/navbar.js"

let navbar_div = document.getElementById("navbar")

// console.log(navbar_div);
navbar_div.innerHTML = navbar()

import {getFooddata, appendData} from "./scripts/data.js"

dishdata()

async function dishdata() {

    let z = document.querySelector("#search").value;
    console.log(z)

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${z}`

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

let e = document.getElementById('search')

e.oninput = debounce;

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
