class TeamMember {
    name;

    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    groupSupportTime;
    role = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }

}
class StudentCare extends TeamMember {
    role = 'Care Web Dev';
    buildRoutine(Student) {
        console.log(this.name, 'Make a routinefor', Student);
    }
}
class NeptuneDev extends TeamMember {
    role = 'Neptune Web Dev';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release a app', version);
    }
}
/* const amir = new Support('amir khan', 'BD', 11);
const salman = new Support('salman khan', 'Dubai', 9);
console.log(amir);
const alia = new StudentCare('alia bhatt', 'Mumbai', 12);
console.log(alia)
const app = new NeptuneDev('app', 'BD', 'Android Studio');
console.log(app); */
const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 };

console.log(player.firstName);
