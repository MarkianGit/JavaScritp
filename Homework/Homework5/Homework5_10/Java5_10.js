// #pghbnSB
//
// – створити функцію, яка повертає найменше число з масиву\


 const area = (numbers) => {

    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        let number= numbers[i];
        if (number < min){
            min = number
        }
    }
    return min;
}
console.log(area([1, 2, 3, 4, 5, -4123, 412]));
