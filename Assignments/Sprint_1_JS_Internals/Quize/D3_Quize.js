const parents = {
    father: 'krishna',
    mother:'priya',
}

const son = Object.create(parents)
    parents.father = "sata"
console.log(son.father)

// var amar = { money: 1000 }

// var akbar = Object.create(amar)

// var anthony = Object.create(akbar)

// console.log('anthony:', anthony.money)

// function iphone11() {
//     this.name = "iphone 11";
    
// } //blueprint
// iphone11.prototype.FaceId = function () {
//     console.log("Scanning Face");
// };

// var iphone1 = new iphone11();

// iphone1.FaceId();
