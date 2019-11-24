const isPrime = require('./is-prime')

module.exports = () => {
    const response = [];

    for (let index = 0; index < 10000; index++) {
        const randomNumber = Math.ceil(Math.random(100000));
        if(isPrime(randomNumber)){
            response.push(randomNumber);
        }
    }

    return response;
}