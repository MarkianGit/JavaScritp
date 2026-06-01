// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const list =  (arr) => {
    const ul = document.createElement("ul");
    for ( let i = 0; i < arr.length; i++ ) {
        const li = document.createElement("li");
        li.textContent = arr[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    
}
list ([312321,4, 4124, `dad343123`])
