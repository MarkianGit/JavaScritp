// function calc(a,b){
//     return a+b;
// }
//
// function calc(a,b,c){
//     return a + b + c;
// }


function foobar(a,b,c){
    console.log(arguments);
    if (arguments.length === 2) {
        return arguments ;
    }
    
}

foobar(1,2,3);

