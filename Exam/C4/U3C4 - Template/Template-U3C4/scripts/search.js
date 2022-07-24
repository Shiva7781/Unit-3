async function storeSearchterm(term) {
    try {
        let res = await fetch(term);

        let data = await res.json();

        return data;
        // console.log("data:", data);
    } catch (err) {
        console.log("err:", err);
    }
}

function displayData(data, parent) {
    data.forEach((ele) => {
        let div = document.createElement("div");
        div.setAttribute("id", "cricket_div");

        let images = document.createElement("img");
        images.src = ele.urlToImage;
        images.setAttribute("id", "img_cricket");

        let titl = document.createElement("p");
        titl.innerHTML = ele.title;
        titl.setAttribute("id", "search_term");

        let description = document.createElement("p");
        description.innerHTML = `Publish: ${ele.description}`;

        div.append(images, titl, description);

        parent.append(div)
    });
}

export  { storeSearchterm, displayData };
