// створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);

}
console.log(sum([1,2,10]));
