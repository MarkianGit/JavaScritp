// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list( text, count ) {
    const ul = document.createElement("ul");
    for ( let i = 0; i <= count; i++ ) {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
    
}

list("Привіт", 5);
