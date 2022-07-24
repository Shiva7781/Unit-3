let cartdata = JSON.parse(localStorage.getItem("cart"));

const cart = document.getElementById("cart")
// const menu = document.getElementById("menu");

cartdata.map(function (elem) {
  let div = document.createElement("div");

  let name = document.createElement("p");
  name.innerText = elem.strMeal;

  let image = document.createElement("img");
  image.src = elem.strMealThumb;

  let price = document.createElement("p");
  elem.price = Math.floor(Math.random() * 500);
  price.textContent = `${elem.price} $`;

  let R_btn = document.createElement("button");
  R_btn.textContent = "Remove";
  R_btn.onclick = function (event) {
    // console.log(elem.name);
    };
    div.append(image, name, price, R_btn)

    cart.append(div)
    // menu.append(div);
});

