// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
function print1(arr) {
    for (const item of arr) {
        document.write(`<div>id: ${item.id} name: ${item.name} age: ${item.age}</div>`);
    }
    print1( [ {id: 1, name: 'John', age: 25}, {id: 2, name: 'Jane', age: 30} ]);
}

