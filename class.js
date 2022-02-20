class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }

}
const amir = new Support('amir khan', 'BD');
const salman = new Support('salman khan', 'Dubai');
// console.log(amir);
// console.log(salman);
amir.startSession();
salman.startSession();