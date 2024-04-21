function makeNegative(num) {
    return -Math.abs(num)
}

let number = makeNegative(9);
console.log(number);
console.log("-------------------------------------------");
// Funkcja zwraca odwrócony string
// function reversed1(str){
//     return str.split("").reverse().join("")
//   }


//   console.log(reversed1("Hello!"));

// funkcja ktora ma sumowac podane do tablicy numery.

function sumArray(array) {
    if (array.length === 0 || !array) {
        return 0
    }

    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(sumArray([2, 2.5,]));
console.log(sumArray([]))

console.log("-----------------------------------");
// Stworzyc nowa tablice 
// Usunac liczby powtarzające sie w niej
// trezba stworzyc liste w ktorej liczby z b zostania usuniete z tablicy a 

function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let isFoundInB = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                isFoundInB = true;
                break;
            }
        }
        if (!isFoundInB) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]
console.log(arrayDiff([4, 2, 2, 2, 2], [2])); // Output: [1, 3]

// krota wersja kodu powzej 
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }
console.log("--------------------------------------------------------");
// kazda podala liczba musi zostac zwrocona w stingu 12 = "10 + 2"


function expandedForm(num) {
    let numArray = num.toString().split('');
    let expandedArray = [];

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] !== '0') {
            let expandedNum = numArray[i] + '0'.repeat(numArray.length - i - 1);
            expandedArray.push(expandedNum);
        }
    }

    return expandedArray.join(' + ');
}
console.log(expandedForm(12));
console.log(expandedForm(24));
console.log(expandedForm(70304));
// Skrocona Werjsa Zadania
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
console.log("-------------------------------------------------");
//Funkcja która ma zwracać tablice rzymską 
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
function solution(number) {
    if (number < 1 || number > 3999) {
        return "error"
    }
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let romanNumber = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (number >= romanNumerals[i].value) {
            romanNumber += romanNumerals[i].symbol;
            number -= romanNumerals[i].value;
        }
    }

    return romanNumber;
}
console.log(solution(1000)); // Output: 'M'
console.log(solution(1990)); // Output: 'MCMXC'
console.log(solution(2008)); // Output: 'MMVIII'
console.log(solution(1666)); // Output: 'MDCLXVI'
console.log('---------------------------------------------------------------------------');
// Boolean ktory zwrca Yes jezeli ture i false to nie

function boolToWord(bool) {
    if (bool == true) {
        return `Yes`
    } else {
        return `No`
    }

}
console.log(boolToWord(false));
// Szybsze rozwiazanie 
// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }
console.log('--------------------------------------------------------------------------');
