import navbar from "./components/navbar.js";
import { getData, displayRepos } from "./scripts/displayData.js";
let container = document.getElementById("container");
let header = document.getElementById("header");
header.innerHTML = navbar();

/*
  1. use github api and get the specific user data by his/her username;
  2. change the profile pic using that data;
  3. we are gonna get repo details out of that data;
  */

let searchInputElement = document.getElementById("search-input");
let profileImg = document.getElementById("profile-img");

searchInputElement.addEventListener("keypress", fetchUserDataAndUpdate);

async function fetchUserDataAndUpdate(e) {
  try {
    if (e.key === "Enter") {
      let value = searchInputElement.value; //abdul

      let responseData = await getData(`https:api.github.com/users/${value}`);

      profileImg.src = responseData.avtar_url;

      let repoDetails = await getData(responseData.repos_url);

      displayRepos(repoDetails, container); // [{reponame, id, }, {}]
    }
  } catch (error) {
    console.log("error:", error);
  }
}
