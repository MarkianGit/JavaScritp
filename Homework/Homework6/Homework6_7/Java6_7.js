// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

 function sortNums(array,direction) {
     if (direction === 'ascending') {
         array.sort((a, b) => a - b);
         return array;
     }
     if (direction === 'descending') {
         array.sort((a, b) => b - a);
         return array;
         
     }
 }

sortNums([3,11,21],'ascending') ;
sortNums([21,11,3],'descending') ;
console.log(sortNums([3,11,21],'descending') );
console.log(sortNums([3,11,21],'ascending') );




