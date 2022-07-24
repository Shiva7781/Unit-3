// url
// api key
// https://masai-api-mocker.herokuapp.com/auth/register

// https://masai-api-mocker.herokuapp.com

// https://masai-api-mocker.herokuapp.com/auth/login

let Register = async () => {
  try {
    let register_data = {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      password: document.getElementById("password").value,

      username: document.getElementById("username").value,

      mobile: document.getElementById("mobile").value,

      description: document.getElementById("description").value,
    };

    register_data = JSON.stringify(register_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: register_data,

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();

    console.log("data:", data);
  } catch (error) {
    console.log("error:", error);
  }
};

let Login = async () => {
  try {
    let login_data = {
      username: document.getElementById("login-username").value,

      password: document.getElementById("login-password").value,
    };

    let login_data_json = JSON.stringify(login_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: login_data_json,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    // console.log("data:", data);   // token

    getUser(login_data.username, data.token);
  } catch (error) {
    console.log("error:", error);
  }
};

// token:"8cecaefa8d8631dfd74b71faf207fd10"

let getUser = async (username, token) => {
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    // console.log("data:", data);
    let local_data = localStorage.setItem(json.stringify("user", data.name))
    appendProduct(data);
  } catch (error) {
    // console.log("error:", error);
  }
};



const Show = document.getElementById("Show");
function appendProduct(data) {
  data.map(function (el) {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = el.name;

    div.append(title);

    Show.append(div);
  });
}
