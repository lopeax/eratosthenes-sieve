Math.randomInt = function(min, max){
    return Math.floor((Math.random() * (max - min))) + min
}

Math.eratosthenesSieve = function(min, max){
    "use strict";

    const END = 10000000000;

    if(max < END){
        let start = min;
        let range = [];
        let primes = [];

        while(start<max){
            range.push(start);
            start++;
        }

        let len = range.length;
        let len2 = range.length;

        let i = 0;
        let j = 0;
        let num = 0;

        while(i<=len){
            // console.log(range);
            num = range[0];
            if(typeof num != 'undefined'){
                primes.push(num);
                range.splice(0,1);
                len--;
                while(j<=len2){
                    if(range[j] % num == 0){
                        range.splice(j,1);
                        len2--;
                    }
                    j++;
                }
                j = 0;
            }
            i++;
        }

        return primes;
    } else {
        return ['Sorry, the maximum was too big for this function'];
    }
}

Math.randomEratosthenesPrime = function(min, max){
    "use strict";

    let arr = this.eratosthenesSieve(min, max);

    return arr[this.randomInt(0, arr.length - 1)];
}

Math.isEratosthenesPrime = function(num){
    "use strict";

    const MINIMUM = 2;

    if(typeof num === 'number' && num === parseInt(num, 10) && num > MINIMUM){
        let arr = this.eratosthenesSieve(MINIMUM, num + 1);
        if(arr.indexOf(num) > -1){
            return true;
        } else {
            return false;
        }
    } else {
        return num + ' is not an integer or more than ' + MINIMUM;
    }
}
