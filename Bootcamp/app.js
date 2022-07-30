// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++){
//     console.log(`Row ${i + 1}`)
//     for (let j = 0; j < seatingChart[i].length; j++){
//         console.log(' ' + seatingChart[i][j]);
//     }
// }

// let count = 0;
// while (count <= 10){
//     console.log(count);
//     count++;
// }

// const password = 'Turkey';
// let guess = (prompt("Guess password"));

// while (guess !== password) {
//     guess = prompt("Guess Password");
// }


// let maxNumber = parseInt(prompt('Enter a max number.'));
// while (!maxNumber){
//     maxNumber = parseInt(prompt('Enter a valid max number.'));
// }
// let magicNumber = Math.floor(Math.random() * maxNumber) + 1;
// console.log(magicNumber);

// let guess = parseInt(prompt('Guess the magic number.'));
// let attempt = 1;
// while (parseInt(guess) !== magicNumber){
//     if (guess === 'q') break;
//     attempt++;
//     if ( guess > magicNumber){
//         guess = prompt('Too high! Enter a new guess');
//     } else {
//         guess = prompt('Too low! Enter a new guess');
//     }
// }
// if (guess === 'q') {
//     console.log('OK QUITTER');
// } else {
// console.log(`You got it! it took you ${attempt} attempt(s)`);
// }

// const subreddits = ['cringe', 'books', 'chickens'];

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }

// const testScores = {
//     keenan: 80,
//     bob: 70,
//     ross: 23,
// }

// for (let person in testScores) {
//     console.log(`${person} scored: ${testScores[person]}`);
// }

// let total = 0;
// let scores = Object.values(testScores);

// for ( score of scores) {
//     total += score;
// }

// console.log(total / scores.length);

// let taskList = [];
// let quit = false;

// while(!quit){
//     let task = prompt('What would you like to do?');
//     if (task === 'quit') {
//         console.log('Quitter!');
//         quit = true;
//     } else if (task === 'new'){
//         taskList.push(prompt('Please enter task.'));
//     } else if (task === 'delete') {
//         taskList.splice(prompt('which index to delete?'));
//     } else if (task === 'list') {
//         console.log('**********');
//         for (let item of taskList){
//             console.log(`${taskList.indexOf(item)}. ${item}`);
//         }
//         console.log('**********');
//     }
// }

// function singSong(){
//     console.log('DO');
//     console.log('RE');
//     console.log('MI');
// }

// singSong();

// function repeat(phrase, amount){
//     let result = '';
//     let i = 0;
//     while ( i <= amount - 1){
//         result += phrase;
//         i++;
//     }
//     console.log(result);
// }

// let week = {
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thusday: 4,
//     Friday: 5,
//     Saturday: 6,
//     Sunday: 7
// }

// // console.log(week.monday);
// function returnDay(num){
//     for (let day in week){
//         console.log(day + ' ' + week[day])
//         // if (num === week[day]){
//         //     console.log(day)
//         // }
//     }
// }

// returnDay();

// 
// function makeBetween(max, min) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     }
// }

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log(`Meow im ${this.name}`);
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const oddNumbers = numbers.filter(num => num %2 === 1)
// const each = numbers.forEach(el => console.log(el))

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print)
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 97
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 99
//     }
// ]

// const highestRating = movies.reduce((result, target) => {
//     if (target.score > result.score){
//         return target;
//     }
//     return result;
// }).title;

// const test = movies.some(movie => movie.score === 90)
// const goodMovies = movies.filter(movie => movie.score >= 95).map(m => m.title)
// const goodTitles = goodMovies.map(m => m.title)


// let overview = movies.map((movie) => {(
//     `${movie.title} - ${movie.score / 10}`
// })
    
// const square = num => {
//     return num * num;
// }

// const titles = movies.map(function(movie){
//     return movie.title;
// });

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score /10}`;
// })

// const newMovies = movies.map(movie => `${movie.title} - ${movie.score /10}`)

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score /10}`
// ))

// let names = ['mark', 'stacyyy', 'Robert2349WTFLMAO'];
// const validUserNames = usernames.filter(names => names.length < 10)

// const words = ['dog', 'dig', 'log'];

// const test = words.every(word => {
//     return word.length === 3
// })

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const reduct = prices.reduce((total, price) => {
//     return total + price;
// })

// const minimum = prices.reduce((min, targ) => {
//     if(targ < min){
//         return targ;
//     }
//     return min;
// })

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(function() {
//             console.log(this.fullName())
//         },3000)
//     }
// }

// const cats  = ['blue', 'Scout', 'Rocket']
// const dogs = []

function sum(){
    console.log(arguments)
}