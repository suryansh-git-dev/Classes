console.log("Hello World");
function greet() {
    let name = prompt("Enter your name:");
    alert("Hello, " + name + "!");
    return "Hello" + name + "!";
}
console.log(greet());
function fruitchoice(fav_fruit) {
    switch(fav_fruit) {
        case "Mango":
            console.log("Your favorite fruit is Mango");
            break;
        case "Apple":
            console.log("Your favorite fruit is Apple");
            break;
        case "Banana":
            console.log("Your favorite fruit is Banana");
            break;
        case "Orange":
            console.log("Your favorite fruit is Orange");
            break;
        case "Grapes":
            console.log("Your favorite fruit is Grapes");
            break;
        default:
            console.log("Your favorite fruit is not in the list");
    }
}
fruitchoice("Mango");
fruitchoice("Pineapple");        
