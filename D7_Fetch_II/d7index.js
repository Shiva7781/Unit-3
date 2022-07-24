async function searchMovie() {
  //0. Get the movie name
  try {
    let movie = document.querySelector("#query").value;
    // let movie = document.getElementById("query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1910078&s=${movie}`
    );

    let data = await res.json();

    // console.log("data:", data);
    return data.Search;
  } catch (err) {
    console.log("err:", err);
  }
}
// searchMovie();

async function main() {
  let data = await searchMovie();

  if (data === undefined) {
    return false;
  }

  appendData(data);
  // console.log("data:", data);
}

let movie_div = document.getElementById("movies");

function appendData(movies) {
  movie_div.innerHTML = null;
  movies.map(function (el) {
    let p = document.createElement("p");

    p.innerText = el.Title;

    movie_div.append(p);
  });
}

// debounce?

// func - main
// "a" -> oninput -> debounce() -> main("a") -> setTimeout(main, 3000)
// "av" -> oninput -> debounce() -> main("a") -> setTimeout(main, 3000)
// "avg" -> oninput -> debounce() -> main("a") -> setTimeout(main, 3000)


let timerId;
function debounce(func, delay) {
  // main("aven")
  if (timerId) {
    clearTimeout(timerId); //main("ave")
  }

  timerId = setTimeout(function () {
    func();
  }, delay); //main("aven")
}
