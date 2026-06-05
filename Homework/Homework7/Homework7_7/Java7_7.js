// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car



class Car{
    
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive = function () {
        console.log(`їдемо зі швидкістю ${this} на годину`);
    };
    
    info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    
   increaseMaxSpeed = function (newMaxSpeed) {
        this.maxSpeed = this.maxSpeed * 1.25;
    };
    
    
    
    
  changeYear = function (newYear) {
        this.year = newYear;
    };
    
    
  addDriver = function (driverObject) {
        this.driver = driverObject;
    };
    
}
