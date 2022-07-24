// function Test() {
//   console.log(this);
// }

// // function My(){
// //     console.log("Yes")
// // }

// const person = {
//   test: function () {
//     console.log(this);
//   },
// };

// const person2 = {
//   name: "pablo",

//   test: function () {
//     console.log(this);
//   },
// };

// const person3 = {
//   name: "pablo",

//   test: function () {
//     console.log(this);
//   },
// };

// function NikeProduct() {
//     let obj = {
//         name: 'shoes',
//         price: '2000',
//         type: 'sneakers'
//     }
//     return obj
// }

// let p1 = NikeProduct()
// console.log('p1:', p1)

// *****constructor_function*****

function NikeProductCF() {
    this.name = "shoes";
    this.price = 2000;
}

let p2 = new NikeProductCF();
console.log("p2", p2);
