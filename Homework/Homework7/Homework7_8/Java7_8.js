// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popelushkyArray = [
    new Popelushka('Оля', 19, 35),
    new Popelushka('Дарина', 22, 38),
    new Popelushka('Марія', 20, 36),
    new Popelushka('Катя', 18, 37),
    new Popelushka('Ганна', 21, 39),
    new Popelushka('Юлія', 23, 40),
    new Popelushka('Олена', 20, 35.5),
    new Popelushka('Христина', 19, 36.5),
    new Popelushka('Тетяна', 25, 41),
    new Popelushka('Наталія', 22, 37.5)
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
let prince = new Prince('Чарівний Принц', 23, 37);

let Popelushkatrue = null; // не впевнений що тут потрібен null


for (const girl of popelushkyArray) {
    if (girl.footsize === prince.foundShoeSize) {
        Popelushkatrue = girl;
        break;
    }
}


console.log('Знайшли:', Popelushkatrue);
        
    
