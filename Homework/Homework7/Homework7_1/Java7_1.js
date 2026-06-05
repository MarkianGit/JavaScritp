// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User {
 
 constructor ( id, name, surname, email, phone) {
     this.name = name;
     this.id = id;
    this.surname= surname;
    this.email= email;
    this.phone= phone;
 }
 
}

let Array = [];


Array.push(new User(1, 'Олег', 'Петренко', 'oleg@example.com', '+380501111111'));
Array.push(new User(2, 'Ганна', 'Сидоренко', 'anna@example.com', '+380672222222'));
Array.push(new User(3, 'Ігор', 'Іваненко', 'igor@example.com', '+380933333333'));
Array.push(new User(4, 'Олена', 'Коваленко', 'elena@example.com', '+380504444444'));
Array.push(new User(5, 'Дмитро', 'Ковальчук', 'dima@example.com', '+380675555555'));
Array.push(new User(6, 'Марія', 'Васильчук', 'masha@example.com', '+380936666666'));
Array.push(new User(7, 'Віталій', 'Попович', 'vitalik@example.com', '+380507777777'));
Array.push(new User(8, 'Ольга', 'Сокіл', 'olga@example.com', '+380678888888'));
Array.push(new User(9, 'Артем', 'Михайленко', 'artem@example.com', '+380939999999'));
Array.push(new User(10, 'Тетяна', 'Федорчук', 'tanya@example.com', '+380500000000'));

console.log(Array);
