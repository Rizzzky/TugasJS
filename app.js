// app.js
const math = require('./math.js');
const string = require('./string.js');
const time = require('./time.js');
const util = require('./util.js');

console.log(math.tambah(5, 3)); // Contoh penggunaan modul matematika
console.log(string.upperCase('hello')); // Contoh penggunaan modul string
console.log(time.getDateTime()); // Contoh penggunaan modul waktu
const squareResult = util.calculateSquare(5);
console.log('Kuadrat dari 5:', squareResult); // Contoh penggunaan modul utilitas
