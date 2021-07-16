"use strict";

function showMultiplicationTable(num) {
    for (var i=0; i<=10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

console.log(showMultiplicationTable(8));

for (var i=0; i<10; i++) {
    var randomNumber = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

for (var i=0; i<10; i++) {
    console.log(i.toString().repeat(i));
}

for (var i=100; i>=5; i-=5) {
    console.log(i);
}
