let user = {
    firstName: 'Taras',
    lastname: 'Schevchenko'
}

// user.firstName = 'asdsad';
// console.log(user);
// for (const userKey in user) {
//     console.log(userKey);
// }

Object.defineProperty(
    user,
    'id',
    {
        value: 100500,
        writable: false,
        enumerable: false,
        configurable: false
        
    }
)

console.log(user);
user.id = 100;
console.log(user);
for (const userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 200600,
        writable: false,
        enumerable: false,
        configurable: false
        
    }
);
console.log(user);
