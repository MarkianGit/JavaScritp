// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client



class Client {
    
    constructor ( id, name, surname, email, phone, order) {
        this.name = name;
        this.id = id;
        this.surname= surname;
        this.email= email;
        this.phone= phone;
        this.order= order;
    }
    
}

let client = [];


client.push(new Client(1, 'Олег', 'Петренко', 'oleg@example.com', '+380501111111', ['телефон', 'чохол']));
client.push(new Client(2, 'Ганна', 'Сидоренко', 'anna@example.com', '+380672222222', ['ноутбук']));
client.push(new Client(3, 'Ігор', 'Іваненко', 'igor@example.com', '+380933333333', ['кава', 'печиво', 'цукор']));
client.push(new Client(4, 'Олена', 'Коваленко', 'elena@example.com', '+380504444444', [])); // пустой заказ тоже можно
client.push(new Client(5, 'Дмитро', 'Ковальчук', 'dima@example.com', '+380675555555', ['книга']));
client.push(new Client(6, 'Марія', 'Васильчук', 'masha@example.com', '+380936666666', ['сукня', 'туфлі']));
client.push(new Client(7, 'Віталій', 'Попович', 'vitalik@example.com', '+380507777777', ['навушники']));
client.push(new Client(8, 'Ольга', 'Сокіл', 'olga@example.com', '+380678888888', ['чайники', 'чашка']));
client.push(new Client(9, 'Артем', 'Михайленко', 'artem@example.com', '+380939999999', ['рюкзак']));
client.push(new Client(10, 'Тетяна', 'Федорчук', 'tanya@example.com', '+380500000000', ['мило', 'рушник']));

console.log(client);
