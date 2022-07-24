// getData()
//appendData()

async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data;
  } catch (err) {
    console.log("err:", err);
  }
}

function appendData(data, parent) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = el.title;

    let image = document.createElement("img");
    image.src = el.image;

    div.append(image, title);

    parent.append(div);
  });
}

export { getData, appendData };
