let user = {
    name : `vasya`,
    greeting : function (msg) {
        return `${msg} my name is ${this.name}`
    }
}
console.log(user.greeting (`hi`))
