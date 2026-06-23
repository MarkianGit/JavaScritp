// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається



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
