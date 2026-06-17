// Це дуже цікава задача! Тут нам знадобиться localStorage для збереження двох речей: поточного значення ціни та точного часу (таймстампу) останнього успішного оновлення.
//
//     Коли сторінка перезавантажується, ми порівнюємо поточний час із часом минулого оновлення. Якщо різниця більша за 10 000 мілісекунд (10 секунд), ми додаємо 10 грн і записуємо новий час. Якщо менша — залишаємо все як є.
//
//     Ось повне рішення з HTML та JavaScript, яке ти можеш скопіювати до себе.



const priceBlock = document.getElementById('price-block');
let currentPrice = +localStorage.getItem('savedPrice') || 100;
const lastUpdateTime = +localStorage.getItem('lastUpdateTime') || 0;
const now = Date.now();
if (now - lastUpdateTime >= 10000) {
    if (lastUpdateTime !== 0) {
        currentPrice += 10;
    }
    localStorage.setItem('savedPrice', currentPrice);
    localStorage.setItem('lastUpdateTime', now);
}

priceBlock.textContent = `${currentPrice}грн`;
