// make an API call & return data

async function makeAPICall(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log("error:", error);
    }
}

function appendPicture(data, parent) {
    data.forEach((ele) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.urls.small;

        let p = document.createElement("p");
        p.innerHTML = ele.user.name;

        div.append(image, p);
        // div.id = "picture";

        div.onclick = () => {

            localStorage.setItem("clicked_image", JSON.stringify(ele));
        };


        parent.append(div);
    });
}

export { makeAPICall, appendPicture };



