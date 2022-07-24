function navbar(){

    return `
    <p onclick="window.location.href='index.html'">Home</p>
    <p onclick="window.location.href='toDayreceipe.html'">Today's Recipe</p>
    <p onclick="window.location.href='latest.html'">Latest Meals</p>
    <input id="search"  type="text" placeholder="Search your meal here...">
    <button id="btn">Search</button>    `
}

export default navbar