let chef = {
    name: "Kelly",
    age: 40,
};
chef.sayHi = function() {
    console.log(`Hi,my name is ${this.name} am going to make you a yummy meal today `) //this.identifier
}
chef.sayHi();
class Kitchen {
    constructor(Item, Quantity, Price) { //classes
        this.Item = Item;
        this.Quantity = Quantity;
        this.Price = Price;
        this.Total = Price * Quantity
    };
    getTotalStock() { return `${ this.Quantity } kgs of ${ this.Item }for dollars ${ this.Total }`; }
}
let kitchen = new Kitchen("Rice ", 5, 100);
console.log(kitchen.getTotalStock());
let kitchen1 = new Kitchen("Wheat ", 10, 100);
console.log(kitchen1.getTotalStock());
let kitchen2 = new Kitchen("Flour ", 8, 100);
console.log(kitchen2.getTotalStock())

function prepare(ingredients, callback) { //Callback
    console.log(` preparing ${ ingredients}`);
    callback();
}

function chop() {
    console.log('chopping')
}
prepare("Tomatoes,onions,garlic", chop);


let foodSelection = {
    get: "chapati ",
    plus: "beef ",
    isEat: "ugali ",
    isEnjoy: "Spaghetti ",

}
let {get, ...rest } = foodSelection; //destructuring.
console.log(get);
console.log(rest.isEat);
console.log(rest.isEnjoy);


function stuff(Quantity) { //conditional
    let amount;
    if (Quantity <= 5) {
        console.log(`food is enough for 10 students`);
    } else if (Quantity > 5 && Quantity <= 14) {
        console.log(`food is enough for 30 students`);
    } else {
        console.log(`food is enough for all students`);

    }
}
stuff(20)
stuff(3)