// let user = new User('vasya', 31);
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
//
// console.log(user.greeting('hello'));
// let user2 = new User('petya', 123123);
//
// console.log(user.greeting.apply(user2, ['hi']));
// console.log(user.greeting.call(user2, 'olla'));

let user = new User('vasya', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name} `;
};
let user2 = new User('petya', 123123);
let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('quwteyqwfe'));
