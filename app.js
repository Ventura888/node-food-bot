const fs =  require('fs');
const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
    {name: 'name', type: String},
    {name: 'order', type: String},
    {name: 'payment', type: Number},
    {name: 'exit', type: Boolean}
];

const options = commandLineArgs(optionsDefinitions);

let getJson = fs.readFileSync('db.json'); //gets data from db.json file
let data = JSON.parse(getJson); //parsing json data.


//Function that stringifies the entered data and inserts to db.json.
const saveIt = (newData) => {
    const toString = JSON.stringify(newData);
    fs.writeFileSync('db.json', toString);
}

if (options.name) {

    data.name = options.name; //grabs the user input for name.
    console.log(`Hello, ${options.name}, We are serving CAKE, PIZZA and SALAD`)
    saveIt(data);

} else if (options.order) {

    data.order = options.order; //grabs the user input for order.
    console.log(`OK, ${data.name},that would be 25$, you will pay with...`)
    saveIt(data);

} else if (options.payment) {

    data.payment = options.payment; //grabs the user input for payment.
    console.log(`Your change is ${options.payment - 25}, thanks for eating. Type --exit to get the order.`)
    saveIt(data);

} else if (options.exit) {
    console.log(data)
    console.log(`Thanks.`)

    data.name = '';
    data.order = '';
    data.payment = '';

    saveIt(data);
} else {
    console.log(`Hello, please enter your name.`)
}

console.log(options);