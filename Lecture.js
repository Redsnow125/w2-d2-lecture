const hello = name => `Hello ${name}!`;
const yo = name => `Yo ${name}!`;
const sup = name => `Sup ${name}?`;

const greetingMachine = (greeting,name) => {
    console.log(greeting(name))
}
greetingMachine(yo, `Lukas`)
greetingMachine(hello, `Nick`)
greetingMachine(sup, `Taylor`)

greetingMachine((name) => {
    return `How are you doing ${name}`
}, `Malika`)

const addFive = (num) => num + 5;

greetingMachine(addFive,`Cam`);

const discount = (itemTotal) => itemTotal - 5;
const blackFriday = itemTotal => itemTotal / 2;

let shoppingCart = [7,9,3,4,7];
let shoppingSpree = [200,330,440,22,3,4,20];
const cartTotal = (cupon,cart,tax) =>{
    let total = 0;
    for (i = 0; i < cart.length; i++){
        if (cart[i] > 5){
            cart[i] = cupon(cart[i])
        }
        total += cart[i];
    }
    total = total + (total * tax)
    return total.toFixed(2)
}

console.log(cartTotal(discount,shoppingCart,0.085))
console.log(cartTotal(blackFriday,shoppingSpree,0.085))