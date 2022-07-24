// console.log(typeof null)

// console.log(1 == '1')


var players = ['Ronaldo', 'Messi', 'Neymar']

players[0] = "Salah"
console.log("players:", players)

Object.freeze(players)

players[0] = "Sergio"
console.log('players:', players)