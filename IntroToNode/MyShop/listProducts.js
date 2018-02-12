var fake = require("faker");


function random(num) {
    for (var i = 0; i < num; i++) {
        console.log(fake.commerce.productAdjective() + " " + fake.commerce.productMaterial() + " " + fake.commerce.product() + " " + fake.commerce.price());
    }
}

console.log("=========================");
console.log("Welcome to Lamothe's Shop");
console.log("=========================");
random(10);