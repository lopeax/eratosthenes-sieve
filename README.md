# Eratosthenes Sieve
An ES2015 (javascript) implementation of the eratosthenes sieve for prime numbers

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. A natural number greater than 1 that is not a prime number is called a composite number.

This method of getting a prime number is limited to 10,000,000,000 as the max number for execution time.

## Using the sieve itself

```javascript
//Give it a minimum and maximum value
var sieve = Math.eratosthenesSieve(0,10);
console.log(typeof sieve, sieve);
```

Result
```javascript
object [2,3,5,7]
```

## Getting a random prime number in a range

```javascript
//Give it a minimum and maximum value
var sieve = Math.randomEratosthenesPrime(0,10);
console.log(typeof sieve, sieve);
```

Result
```javascript
number 5
```

## Getting a random prime number in a range

```javascript
//Give it a minimum and maximum value
var num = Math.isEratosthenesPrime(5);
console.log(typeof num, num);
```

Result
```javascript
boolean true
```
