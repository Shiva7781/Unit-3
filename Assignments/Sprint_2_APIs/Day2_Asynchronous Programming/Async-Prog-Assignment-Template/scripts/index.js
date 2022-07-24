var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel,3000);
  // console.log(x);
}


var movieData = [
  {
    image_url: "https://img.sflix.to/xxrz/250x400/224/e6/01/e601d7f0210f043be46f0e6eb26c05b7/e601d7f0210f043be46f0e6eb26c05b7.jpg",
    name: "Movie:Home Team",
    genre: "Genres:Family,Comedy",
    rating:6,
  },
  {
    image_url:"https://img.sflix.to/xxrz/250x400/224/d0/91/d091a6e8a6fa4dda1a04630c6227f8b4/d091a6e8a6fa4dda1a04630c6227f8b4.jpg",
    name: "Movie:This Is Us",
    genre: "Genres:Family,Comedy,Drama",
    rating: 8.6,
},
{
    image_url: "https://img.sflix.to/xxrz/250x400/224/95/f4/95f4fc9cd1c34c893514f1650e15ce4a/95f4fc9cd1c34c893514f1650e15ce4a.jpg",
    name: "Movie:Resident Evil: Welcome to Raccoon City",
    genre: "Genres:Horror, Mystery, Action, Science Fiction",
    rating: 5.2,
},
{
  image_url:"https://img.sflix.to/xxrz/250x400/224/97/0d/970d1971e17da102526d5080f89001b6/970d1971e17da102526d5080f89001b6.jpg",
  name:"Movie:Ghostbusters",
  genre: "Genres:Comedy, Fantasy",
  rating: 7,
},
{
  image_url:"https://img.sflix.to/xxrz/250x400/224/1b/5b/1b5b341d7b53f796beb50b84dfee9f69/1b5b341d7b53f796beb50b84dfee9f69.jpg",
  name:"Movie:The Matrix Resurrections",
  genre: "Genres:Fantasy",
  rating: 5.7,
},
{
  image_url: "https://img.sflix.to/xxrz/250x400/224/57/68/576899c7db56f47fa48dbdab100d9edb/576899c7db56f47fa48dbdab100d9edb.jpg",
  name: "Movie:Dune",
  genre: "Genres:Science Fiction, Adventure, Drama, Action",
  rating: 8.1,
},
{
  image_url:"https://img.sflix.to/xxrz/250x400/224/97/e0/97e0f2adee791cfe2e0feb9406b5ba50/97e0f2adee791cfe2e0feb9406b5ba50.jpg",
  name:"Movie:Venom- Let There Be Carnage",
  genre:"Genres:Science Fiction, Action",
  rating: 6,
},
{
  image_url:"https://img.sflix.to/xxrz/250x400/224/d7/aa/d7aa5df3efadadc7686029082b594359/d7aa5df3efadadc7686029082b594359.jpg",
  name:"Movie:No Time to Die",
  genre:"Genres:Action, Thriller, Adventure",
  rating: 7.4,
},
{
  image_url:"https://img.sflix.to/xxrz/250x400/224/09/57/095742054aa3011505313fe959802ef9/095742054aa3011505313fe959802ef9.jpg",
  name:"Movie:The King's Man",
  genre:"Genres:Action, Adventure, Comedy, Thriller",
  rating: 6.5,
},
]



function handleRatingSort() {
  
  var selected = document.querySelector("#ratingsort").value;
  console.log(selected);
  if (selected == "high") {
    movieData.sort(function (a,b) {
      return (b.rating) - (a.rating);
    });
    document.querySelector("#movies").innerHTML = "";
    displayData(movieData);
    console.log("high")
  }
  console.log("high")

  if (selected == "low") {
    movieData.sort(function (a,b) {
      return (a.rating) -  (b.rating);
    }) ;
    document.querySelector("#movies").innerHTML = "";
    displayData(movieData);
    console.log("low")
  }
}
document.querySelector("#ratingsort").addEventListener("click", handleRatingSort);

displayData(movieData);

function displayData(data) {

data.map(function(data) {

    var div = document.createElement("div");

    var div2 = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", data.image_url);


    var div3 = document.createElement("div");
    var name = document.createElement("p");
    name.textContent = data.name;

    var genre = document.createElement("p");
    genre.textContent = data.genre;

    var p1 = document.createElement("p")
    p1.textContent = data.rating;


    div2.append(image);
    div3.append(name,genre,p1);
    div.append(div2,div3);
    
    
    document.querySelector("#movies").append(div);
});
}