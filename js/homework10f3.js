// 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
    let count = 0;

    for (let element of array) {
        if (condition(element)) {
            count++;
        }
    }

    return count;
}

const isEven = num => num % 2 === 0;
console.log(countItems(numbers, isEven));

const isLarge = num => num > 10;
console.log(countItems(numbers, isLarge));

const isShort = word => word.length <= 3;
console.log(countItems(words, isShort));

// 2
function calculate(a, b, operation) {
    return operation(a, b);
}

// стрількові фцнкції
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if (b === 0) {
        console.log("помилка, на нуль не ділиться");
        return;
    } 
    return a / b;
}

// консолі
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));   
console.log(calculate(10, 5, divide)); 
console.log(calculate(10, 0, divide));

3
function repeatMessage(times, messageCreator) {
    const results = [];
    for (let i = 0; i < times; i++) {
        results.push(messageCreator(i));
    }
    return results;
}

const callback = num => num + 6

console.log(repeatMessage(10, callback));

// 4 
const films = ["film1","film2","film3"];

function processMovies(movies, action) {
    const results = [];
    for (let i = 0; i < movies.length; i++) {
        results.push(action(movies[i], i));
    }
    return results;
}

const callback01 = (movie, index) => {
  if (index === 0) {
    return movie + " 12+";
  } else {
    return movie;
  }
};

const callback02 = (movie, index) => {
  if (index === 1) {
    return movie + " 16+";
  } else {
    return movie;
  }
};

const callback03 = (movie, index) => {
  if (index === 2) {
    return movie + " 18+";
  } else {
    return movie;
  }
};

console.log(processMovies(films, callback01));
console.log(processMovies(films, callback02));
console.log(processMovies(films, callback03));
