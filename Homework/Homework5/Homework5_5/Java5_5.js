// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

function list(text) {
    const p = document.createElement('p')
    p.textContent = text;
    document.body.appendChild(p);
}

list("Hello");


// Чомусь не працює
