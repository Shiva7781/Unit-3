import navbar from "./components/navbar.js";

import { getData, appendData } from "./scripts/showdata.js";
// console.log(navbar);

//referance to div
let navbar_div = document.getElementById("navbar_container");

//setting the HTML
navbar_div.innerHTML = navbar();

let url = "https://fakestoreapi.com/products/category/jewelery";

let res = await getData(url);
console.log("res:", res);

let parent = document.getElementById("data");
appendData(res, parent);
