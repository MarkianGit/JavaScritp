// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (text) {
 const ul = document.createElement("ul");
 for (let i = 0; i < 3; i++) {
     const li = document.createElement("li");
     li.textContent = text;
     ul.appendChild(li);
 }
document.body.appendChild(ul);
}

list( "Hello");

//начебто код вірний, але хтмл нічого не виводить
