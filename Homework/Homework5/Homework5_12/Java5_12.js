// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

function swap(arr,index1,index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
const numbers = [11,22,33,44,55,66,77];
console.log(swap(numbers, 1,5));
