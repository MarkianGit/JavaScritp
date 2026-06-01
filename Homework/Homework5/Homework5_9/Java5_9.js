// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

const objects =(arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        const div = document.createElement("div");
        div.textContent = `ID: ${arr[i].id}  Name: ${arr[i].name}  Age: ${arr[i].age}`;
        document.body.appendChild(div);
    }
 
}
const users = [
    { id: 1, name: "Олег", age: 20 },
    { id: 2, name: "Анна", age: 24 },
    { id: 3, name: "Олексій", age: 31 }
];

objects(users);



