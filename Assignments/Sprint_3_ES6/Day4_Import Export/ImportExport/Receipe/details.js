
let data = JSON.parse(localStorage.getItem("dishdata")) || []

console.log(data);

let h1 = document.querySelector('h1')
h1.innerHTML = `${data[0].meals[0].strMeal},${data[0].meals[0].strArea}`;

let image = document.createElement('img')
image.setAttribute("id", "poster")
image.src = data[0].meals[0].strMealThumb;

let receipe = document.createElement('p')
receipe.setAttribute("id", "Receipe")
receipe.innerHTML = `Receipe::--${data[0].meals[0].strInstructions}`;

document.querySelector("#detail_box").append(image, receipe)

for (let key in data[0].meals[0]) {

    if (key.includes("strIngredient")) {

        if (data[0].meals[0][key] != "") {

            var inger = document.createElement('p')
            inger.setAttribute("id", "ing")
            inger.innerHTML = data[0].meals[0][key].trim()

            document.querySelector("#box1").append(inger)

        }

    }
}

for (let key in data[0].meals[0]) {
    if (key.includes("strMeasure")) {

        if (data[0].meals[0][key] != "") {

            var meal = document.createElement('p')
            meal.setAttribute("id", "mea")
            meal.innerHTML = data[0].meals[0][key].trim()

            document.querySelector("#box2").append(meal)

        }

    }


}