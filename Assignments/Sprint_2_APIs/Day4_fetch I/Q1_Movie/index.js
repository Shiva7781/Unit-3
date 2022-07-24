// // // .....Search Movies //---------------------------
const container = document.getElementById("container");

async function getMovieData() {
  try {
    let Search = document.getElementById("search_movie").value;

    let url = `https://www.omdbapi.com/?apikey=1910078&t=${Search}`;

    let res = await fetch(url);

    let data = await res.json();
    console.log("data:", data);
    appendData(data);
  } catch (err) {
    console.log("err:", err);
  }
}
// getMovieData();

function appendData(elem) {
  let div1 = document.createElement("div");

  let img = document.createElement("img");
  img.src = elem.Poster;

  let div2 = document.createElement("div");

  let title = document.createElement("h3");
  title.innerText = `Title - ${elem.Title}`;

  let actors = document.createElement("p");
  actors.innerText = `Actor - ${elem.Actors}`;

  let awards = document.createElement("p");
  awards.innerText = elem.Awards;

  let director = document.createElement("p");
  director.innerText = elem.Director;

  let money = document.createElement("p");
  money.innerText = elem.BoxOffice;

  div1.append(img);

  div2.append(title, actors, awards, director, money);

  container.append(div1, div2);
}
