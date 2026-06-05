class User {

    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    // static greeting() {
    //     console.log(this);
    //     console.log(this.age);
    //     return `hello my name is ${this.username}`;
    // }


    work() {
        return `work in process`;
    }


}

// let user = new User('vasya', 31);
// console.log(user);
//
// console.log(user.greeting());
// console.log(User.greeting());


class Customer extends User {

    constructor(username, age, password) {
        super(username, age);
        this.password = password;
    }


    work() {
        return 'hfqwyfeyqwve';
    }


    foobar() {

    }
}

let customer = new Customer('vasya', 31, '111');
console.log(customer);
console.log(customer.work());
customer.foobar();


function User(name, age) {
    this.name = name;
    this.age = age;
}


function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer('vasya', 31, '1111');
console.log(customer);




    
//     constructor(name) {
//         this.name = name;
//     }
// }
