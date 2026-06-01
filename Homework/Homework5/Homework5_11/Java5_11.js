// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


const sum = (arr) =>{
    let totalsum = 0;
    for(let num of arr){
    totalsum += num;
    }
return totalsum;
}
console.log(sum([1, 2, 10]));
