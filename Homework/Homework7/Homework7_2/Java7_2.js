// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

class User {
    
    constructor ( id, name, surname, email, phone) {
        this.name = name;
        this.id = id;
        this.surname= surname;
        this.email= email;
        this.phone= phone;
    }
    
}

let ArrayofUsers = [];


ArrayofUsers.push(new User(1, 'Олег', 'Петренко', 'oleg@example.com', '+380501111111'));
ArrayofUsers.push(new User(2, 'Ганна', 'Сидоренко', 'anna@example.com', '+380672222222'));
ArrayofUsers.push(new User(3, 'Ігор', 'Іваненко', 'igor@example.com', '+380933333333'));
ArrayofUsers.push(new User(4, 'Олена', 'Коваленко', 'elena@example.com', '+380504444444'));
ArrayofUsers.push(new User(5, 'Дмитро', 'Ковальчук', 'dima@example.com', '+380675555555'));
ArrayofUsers.push(new User(6, 'Марія', 'Васильчук', 'masha@example.com', '+380936666666'));
ArrayofUsers.push(new User(7, 'Віталій', 'Попович', 'vitalik@example.com', '+380507777777'));
ArrayofUsers.push(new User(8, 'Ольга', 'Сокіл', 'olga@example.com', '+380678888888'));
ArrayofUsers.push(new User(9, 'Артем', 'Михайленко', 'artem@example.com', '+380939999999'));
ArrayofUsers.push(new User(10, 'Тетяна', 'Федорчук', 'tanya@example.com', '+380500000000'));

console.log(ArrayofUsers);

function filterrr(user) {
    if (user.id % 2 === 0){
        return true;
    }
        return false;
    

}

console.log(ArrayofUsers.filter(filterrr));
