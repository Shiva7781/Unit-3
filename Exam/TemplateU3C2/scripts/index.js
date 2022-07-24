let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

const menu = document.getElementById("menu");

async function IndianDishes() {
  try {
    let res = await fetch(url);

    let data = await res.json();

    Productappend(data);
    // console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}

IndianDishes();

let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  count(cart);
} else {
  cart = JSON.parse(cart);
  count(cart);
}

function count() {
  let count = document.getElementById("count");
  count.textContent = `count ${cart.length}`;
}

// item.price = Math.random() ( this is just a hint, not complete code ).
// Price should be between 0 to 500 Rs

function Productappend(data) {
  //   console.log("data:", data);

  data.meals.map(function (elem) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerText = elem.strMeal;

    let image = document.createElement("img");
    image.src = elem.strMealThumb;

    let price = document.createElement("p");
    elem.price = Math.floor(Math.random() * 500);
    price.textContent = `${elem.price} Rs.`;

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.onclick = function (event) {
      // console.log(elem.name);
      addtocart(elem);
    };

    function addtocart(elem) {
      cart.push(elem);
      localStorage.setItem("cart", JSON.stringify(cart));
      count(cart);
    }

    div.append(image, name, price, btn);
    menu.append(div);
  });
}
