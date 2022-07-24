function order() {
  let status = "open";

  let order = document.getElementById("food").value;

  let food_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status === "open") {
        resolve(order);
      } else {
        reject("Told you, it was close!");
      }
    }, 3000);
  });
  food_promise.then(function (res) {
    console.log("res:", res);
  });

  food_promise.catch(function (err) {
    console.log("err:", err);
  });
}
