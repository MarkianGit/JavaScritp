// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const ageInput = document.getElementById('age-input');
const checkBtn = document.getElementById('check-btn');
const resultMessage = document.getElementById('result-message');

checkBtn.addEventListener('click', function() {
    const age = parseInt(ageInput.value);
    
    resultMessage.classList.add('color');



    if (age >= 18) {
        resultMessage.textContent = "+";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "-";
        resultMessage.style.color = "red";
    }
});
