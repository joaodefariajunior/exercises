// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// i.e.

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1])
        if (myArray[2] > myNumber);
    }
    console.log(myArray[2]);
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// 2. For the longest word. Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞ "development"
console.log('====task2===');

function findLongestWord(str) {
    let array = str.split(" ");
    let maxLength = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength.length) {
            maxLength = array[i];

        };



    }
    console.log(maxLength)
};

findLongestWord("this is a web development course");

//     3. Reverse. Create a function to reverse a number.

// i.e. reverse(34532) ➞ 23543

console.log('====Task 3 ===');

function reverse(number) {

    let numero = number.toString().split('').reverse('').join('');
    console.log(numero);
};
reverse(34532);

// 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

// i.e. findVowels("this is a string") ➞ 4
console.log('====Task 4===');

function vowelCount(str1) {
    let vowelList = 'aeiouAEIOU';
    let vCount = 0;
    for (let x = 0; x < str1.length; x++) {
        if (vowelList.indexOf(str1[x]) !== -1) {
            vCount += 1;

        }

    }
    return vCount;

}
console.log(vowelCount('sevandija'));
console.log(vowelCount('paparico'));
console.log(vowelCount('PROXENETA'));
console.log(vowelCount("this is a string"));



console.log('===== task  5 ====')
// 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNums(arr) {
    let n = arr.length;
    let total = ((n + 2) * (n + 1)) / 2; //N+2 =11 (first case) * N+1=10= 110/2= 55-the  sum of the array =5 (the  missing number)
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
    }
    return total;
}


console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


console.log('=======Task 6 =====')

// 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(array) {
    let sum = 0,
        i = array.length;
    while (i--)
        sum += Math.pow(array[i], 3);
    return sum;
}

Examples:

    console.log(sumOfCubes([1, 5, 9])); // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

// 7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:

// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:

// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
console.log('======== Task 7=======');
const dictionary = ["button", "breakfast", "border", "pastry", "delicious", "name", "boring", "triplet", "tries", "trip", "piano", "tree"]; //lazy  solution ...putting everything in one array....
const filterItems = (letters) => { //a new const just  for  the  letters
    return dictionary.filter(dictionary => dictionary.indexOf(letters) > -1); //using  filter and indexOf to make the dirty work  for  me! Mwa ha ha ha !
}

console.log(filterItems('bu')); // ["button"]
console.log(filterItems('tri')); //["triplet", "tries", trip"]
console.log(filterItems('beau')); //["pastry", "delicious", "name", "boring"]
console.log('===== Task 8 ======')
//     8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

// Examples:

// evenNums(8) ➞ [2, 4, 6, 8]
// evenNums(4) ➞ [2, 4]
// evenNums(2) ➞ [2] Notes:
// If there are no even numbers, return an empty array.
// Do not include 0.

function evenNums(even) {
    let empty = [];
        for (let i = 2; i <= even; i++) {
        if (i % 2 === 0) {
            empty.push(i);
        }

    }
    return empty;
}
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));


//   Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw"
console.log('=====Bonus question=====')

function sortString(str) {
    let arr = str.split(''); //split into various letters
    let sorted = arr.sort(); //method that sorts the array items into an alphabetical order
    console.log(sorted.join('')); // and  here we join everything together
}
sortString('webdev');
sortString('pepeka');
sortString('papibaquigrafo');

