/*
1. API - Road
2. fetch - Roadmap
3. url - location
*/

// // // .....Method-I......................................

// let url = "https://fakestoreapi.com/products/1";
// let myRequest = fetch(url);

// myRequest
//   .then(function (res) {
//     return res.json();
//   })

//   .then(function (res) {
//     console.log("res:", res);
//   })

//   .catch(function (err) {
//     console.log("err:", err);
//   });

// // // .....Method-II......................................

// let url = "https://fakestoreapi.com/products/1";

// async function getData() {
//   try {
//     let res = await fetch(url);

//     let data = await res.json();

//     console.log("data:", data);
//   } catch (err) {
//     console.log("err:", err);
//   }
// }
// getData();

// // .....Method-II + appendProduct() //---------------------------

let url = "https://fakestoreapi.com/products";

const container = document.getElementById("container");

async function getData() {
  try {
    let res = await fetch(url);

    let data = await res.json();

    appendProduct(data);

    // console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}
getData();

function appendProduct(data) {
  data.map(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let title = document.createElement("p");
    title.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Buy";

    div.append(img, title, price, btn);

    container.append(div);
  });
}


// var myPromise = new Promise(function(myResolve, myReject) {
//   const x = 2+1
//   const y = 2
// if(x == y) {
// myResolve();
// } else {
// myReject();  }
// });
// myPromise
//   .then(function () {
//           console.log('Success');
//   })
//   .catch(function () {
//           console.log('Some error has occurred');
//   });


