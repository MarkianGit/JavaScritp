// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//
//
//
//

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const value of values) {
        const color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}

const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
const allSixes = deck.filter(card => card.value === '6');
const redCards = deck.filter(card => card.color === 'red');
const diamondCards = deck.filter(card => card.cardSuit === 'diamond');

const validClubsValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
const highClubs = deck.filter(card => card.cardSuit === 'clubs' && validClubsValues.includes(card.value));

console.log('Піковий туз:', spadeAce);
console.log('Кількість шісток:', allSixes.length);
console.log('Кількість червоних карт:', redCards.length);
console.log('Кількість бубнових карт:', diamondCards.length);
console.log('Трефи від 9 і більше:', highClubs);
