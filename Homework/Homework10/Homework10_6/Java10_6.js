// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById(`num`);
input.oninput = function () {
    const kil= this.value;
    let result = kil * 2.2046 ;
    
    res.innerText = result;
};
