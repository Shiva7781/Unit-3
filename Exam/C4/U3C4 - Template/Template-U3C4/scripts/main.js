// let url = `https://shrouded-earth-23381.herokuapp.com/api/headlines/india`

async function apiCall(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data;
    // console.log('data:', data)
  } catch (err) {
    console.log("error:", err);
  }
}

function appendArticles(articles, main) {
  //add append logic here
  articles.forEach((ele) => {
    let div = document.createElement("div");

    let images = document.createElement("img");
    images.src = ele.urlToImage;

    // let name = documnet.createElement("p")
    // name.innerHTML = ele.name

    // let author = document.createElement("p")
    // author.innerHTML = ele.author

    let titl = document.createElement("p");
    titl.innerHTML = ele.title;

   

    div.append(images, titl);

    div.onclick = () => {
      var arr = [];
      arr.push(ele);
      localStorage.setItem("article", JSON.stringify(arr));
      console.log("arr:", arr);
      window.location.href = "news.html";
    };

    main.append(div);
  });
}

export { apiCall, appendArticles };
