// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


// const Array = [`Main`,`Products`,`About us`,`Contacts`];
//
// let ul = document.createElement("ul");
// let li = document.createElement("li");
//
// li.classList.add("li");
//
// for (const item of Array) {
//     document.createElement(`li`)
//     li.innerText = item;
//     ul.appendChild(li);
// }



const Items = [`Main`, `Products`, `About us`, `Contacts`];

let ul = document.createElement("ul");

for (const item of Items) {
    let li = document.createElement("li");
    li.classList.add("li");
    li.innerText = item;
    ul.appendChild(li);
    document.body.appendChild(ul);
}
