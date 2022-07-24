
import { getFooddata } from "./scripts/data.js";

let dishdata = async () => {
    // async function dishdata(){

    let url = `https://www.themealdb.com/api/json/v1/1/random.php`


    let data = await getFooddata(url);
    console.log(data)

    get(data);

}
dishdata();

// function get(data){
let get = (data) => {
    console.log(data.meals[0])
    var h1 = document.querySelector('h1')
    h1.innerHTML = `${data.meals[0].strMeal},${data.meals[0].strArea}`;

    var image = document.createElement('img')
    image.setAttribute("id", "poster")
    image.src = data.meals[0].strMealThumb;

    var Receipe = document.createElement('p')
    Receipe.setAttribute("id", "Receipe")
    Receipe.innerHTML = `Receipe::--${data.meals[0].strInstructions}`;


    document.querySelector("#content_box").append(image, Receipe)

    for (let key in data.meals[0]) {


        if (key.includes("strIngredient")) {

            if (data.meals[0][key] != "") {

                var inger = document.createElement('p')
                inger.setAttribute("id", "ing")
                inger.innerHTML = data.meals[0][key].trim()

                document.querySelector("#box1").append(inger)

            }

        }
    }

    for (let key in data.meals[0]) {
        if (key.includes("strMeasure")) {

            if (data.meals[0] != "") {

                var meal = document.createElement('p')
                meal.setAttribute("id", "meal")
                meal.innerHTML = data.meals[0][key].trim()

                document.querySelector("#box2").append(mea)

            }

        }

    }

}