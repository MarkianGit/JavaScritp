// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.



const div = document.createElement('div');

div.classList.add(`wrap`);
div.classList.add( `collapse`);
div.classList.add( `beta`);
div.classList.add( `alpha`);

div.innerText = 'TEST';

document.body.appendChild(div);

const clone = div.cloneNode(true);

document.body.appendChild(clone);




