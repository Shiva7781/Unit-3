let getFooddata = async (url) => {

    try {

        let res = await fetch(url)

        let data = await res.json()

        return data

    } catch (error) {

        console.log(error);
    }
}

let appendData = (data, parent) => {

    console.log(data.meals);

    data.meals.map(function (item) {

        let div1 = document.createElement("div")
        div1.setAttribute("id", "div1")

        let poster = document.createElement("img")
        poster.setAttribute("id", "poster");
        poster.src = item.strMealThumb

        let name = document.createElement('p');
        name.setAttribute("id", "dishname");
        name.innerHTML = `Dish - ${item.strMeal}`

        let area = document.createElement('p');
        area.setAttribute("id", "disharea");
        area.innerHTML = `Country - ${item.strArea}`

        div1.append(poster, name, area)

        div1.addEventListener("click", function () {

            listdata(data)
        })

        parent.append(div1)
    })
}

let arr = []
let listdata = (data) => {

    arr.push(data)
    localStorage.setItem("dishdata", JSON.stringify(arr))

    window.location.href = 'details.html';
}
export { getFooddata, appendData };