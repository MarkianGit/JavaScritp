//
//
//
//
//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.


// <div id="text">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minima nam nemo qui ratione voluptatum. Beatae corporis et iure maxime nisi numquam officia perspiciatis quasi sequi sint! Dolore, eaque, perferendis!
// </div>





const button = document.getElementById(`but`);

button.onclick = () => { document.getElementById('text').remove(); };







