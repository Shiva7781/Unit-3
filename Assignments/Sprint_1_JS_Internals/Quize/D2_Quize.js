// // // // var person1 = {
// // // //     name: 'jonny Kumar'
// // // // }
// // // // var person2 = { name: 'Happy Singh' }

// // // // function Entrepreuner() {
// // // //     console.log('I am entrepreuner')
// // // // }

// // // // Entrepreuner.call(person1)

// // // // Entrepreuner.call(person2)

// // // var person1 = {
// // //     name: 'jonny kumar'
// // // }
// // // var person2 = { name: 'happy singh' }

// // // function Entrepreuner() {
// // //     console.log(this.name)
// // // }

// // // Entrepreuner.call(person1)

// // // Entrepreuner.call(person2)

// // function Entrepreuner(n, a, u) {

// //     this.name = n
// //     this.price = a
// //     this.img = u
// // }

// // var person1 = Entrepreuner('Elon', 'Musk')
// // console.log('person1:', person1)

// var person = {
//     name: 'Rahul',
//     myName: function () {
//         console.log(this)
//     }
// }

function Entrepreuner(n, a, u) {

    this.name = n
    this.price = a
    this.img = u
}

var person1 = new Entrepreuner('Elon', 'Musk')

