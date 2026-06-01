// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

const list = (text) => {
    const p = document.createElement('p')
    p.textContent = text;
    document.body.appendChild(p);
}

list("Hello");


