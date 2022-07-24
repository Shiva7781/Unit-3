// // // // var name = 'Tony'
// // // // name[0] = 'J'
// // // // console.log('name:', name)

// // // var arr = [1, 2, 3, 4, 5, 6]
// // // arr[0] = 999
// // // console.log('arr:', arr)

// // var a = 10
// // function scope() {
// //     var b = 20
// // }
// // scope()
// // console.log(a,b)

// {
//     let b = 20
// }
// console.log(b)

var x = 10
function test() {
    x = 20
}
test()
console.log(x)