//#Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let area = function ( r, h ){

    let p = 3.14;
    return 2 * p * r * h + 2 * p * r**2;
}
console.log(area (5,2));
