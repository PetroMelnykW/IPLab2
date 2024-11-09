function isInteger(number) {
    return (number % 1) == 0;
}

function findPrimes(start, end) {
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
    
        for (let index = 2; (index < (parseInt(Math.sqrt(number)) + 1)); index++) {
            if ((number % index) == 0) {
                return false;
            }
        }
    
        return true;
    }

    let array = [];

    for (let index = start; index <= end; index++) {
        if (isPrime(index)){
            array.push(index);
        }
    }

    return array;
}