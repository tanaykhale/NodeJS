const isPrime = (n) => {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;

        }
    }
    return true;


}
var names = ['tanay', 'anuj']

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const isPerfect = (n) => {
    let product = 1;
    let sum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i == 0) {
            product = product * i;
            sum = sum + i;

        }
    }
    if (product === sum) {
        return true;
    } else {
        return false;
    }
}

module.exports.myModule = { isPrime, names, factorial, isPerfect }