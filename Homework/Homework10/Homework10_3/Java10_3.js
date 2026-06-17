// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const someForm = document.forms.name1;
someForm.send.addEventListener('click', () => {
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    const sendButton = someForm.age.s;
    let o = {nameValue, surnameValue, ageValue};
    
    
    console.log(o);
    
});


