let foodarr = []

let order = new Promise(function(resolve, reject){

    resolve()

    reject(function (){

        return foodarr.length == 0
    })
})

document.querySelector("button").addEventListener("click",function(){

    setTimeout(function (){

        order.then(function (){

            console.log("Your order is ready", foodarr);

            if(foodarr.lenght == 0){

                order.catch(alert("First order something"))
                document.getElementById("order-id").style.display = "none"
                document.getElementById("image").style.display = "none"
            }
            else if(foodarr.length > 1){

                document.getElementById("order-id").style.display = "block"
                document.getElementById("order-id").textContent = `Order :- ${Math.floor(Math.random()*50 + 1)}`
                document.getElementById("image").style.display = "block"
                document.getElementById("image-ic").setAttribute("src","https://b.zmtcdn.com/data/pictures/9/4000269/00626e13ffc691e4fa6de148148a614e.jpg?fit=around|750:500&crop=750:500")
            }
            else if(foodarr.length == 1){

                document.getElementById("order-id").style.display = "block"
                document.getElementById("order-id").textContent = `Order :- ${Math.floor(Math.random()*50)}`

                if(foodarr[0] == "pizza"){
                    document.getElementById("image").style.display = "block"
                    document.getElementById("image-ic").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjxohTSVQ4KgiYHWWKZtKq444EXFORFRg-w&usqp=CAU")
                }
                else if(foodarr[0] == "burger"){
                    document.getElementById("image").style.display = "block"
                    document.getElementById("image-ic").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalCPMNVRNsBc1LdtiVoDcFuzH8bYCzrqT5w&usqp=CAU")
                }
                else if(foodarr[0] == "fries"){
                    document.getElementById("image").style.display = "block"
                    document.getElementById("image-ic").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiV8KldvQnwNKaRoLzFELFFD77sbIB1g_KHQ&usqp=CAU")
                }
                else{
                    document.getElementById("image").style.display = "block"
                    document.getElementById("image-ic").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqBMCXG7q9n3vQ1qXfk5WaB0JoPof7rPvSg&usqp=CAU")
                }
            }
        })
    }, 5000)
})

function foodStore(val) {
    let flag = true
    for (let i = 0; i < foodarr.length; i++) {
        if (foodarr[i] == val) {
            foodarr.splice(i, 1);
            flag = false
            break;
        }
    }
    if (flag == true) {
        foodarr.push(val)
    }
}