console.log("Ordering Pizza...");

const orderPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pizza Delivered");
    }, 5000);
});

orderPizza.then((message) => {
    console.log(message);
});

console.log("Waiting for Pizza...");