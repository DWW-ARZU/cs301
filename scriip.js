
// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
//let fullName = 'Arzu Orucov Anar'
//let nameArray = fullName.split("")
//console.log(nameArray)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// let fullName = "Arzu Orucov";
// let nameParts = fullName.split(" ");
// let reversedFullName = nameParts[1] + " " + nameParts[0];
// console.log(reversedFullName);

// // 3) Alinan yeni arrayi stringe cevirin(join)
// let newArray = reversedFullName.split("");
// let newString = newArray.join("");
// // console.log(newString);

//  let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// // QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let countOfFive = arr.filter(num => num === 5).length;
// console.log(countOfFive );
// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let sumOfNumbers = arr.reduce((acc, num) => acc + num, 0);
// console.log(sumOfNumbers)
// //6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let sortedUniqueArray = [...new Set(arr)].sort((a, b) => a - b);
// console.log(sortedUniqueArray);
// //7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let maxNumber = Math.max(...arr);
// let countOfMaxNumber = arr.filter(num => num === maxNumber).length;
// console.log(  maxNumber + ", " + countOfMaxNumber);
// //8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let name = "Arzu";
// let letterCount = name.length;
// let isLetterCountInArray = arr.includes(letterCount);
// console.log(name + " adında " + letterCount + " hərf var və bu say arraydə mövcuddur: " + isLetterCountInArray);
// //9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let remainder2Index = arr.findIndex(num => num % 3 === 2 && num > 0);
// console.log(remainder2Index);
// //10) arraydaki en boyuk reqemin ilk indexini tapin
// let indexOfMaxNumber = arr.indexOf(maxNumber);
// console.log(indexOfMaxNumber);
// //11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let indexesOfFour = arr.reduce((acc, num, index) => (num === 4 ? [...acc, index] : acc), []);
// console.log(indexesOfFour);
// //12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let indexOfMinFive = arr.indexOf(5);
// let indexOfMaxFive = arr.lastIndexOf(5);
// console.log("5 rəqəmi arraydakı ən kiçik index: " + indexOfMinFive + ", ən böyük index: " + indexOfMaxFive);
// //13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let newArrayGreaterThanTwo = arr.filter(num => num > 2);
// let lengthDifference = arr.length - newArrayGreaterThanTwo.length;
// console.log(newArrayGreaterThanTwo.length);
// console.log(lengthDifference);
// //14) 7 reqeminin indexleri cemini tapin.
// let sumOfIndexesOfSeven = arr.reduce((acc, num, index) => (num === 7 ? acc + index : acc), 0);
// console.log("7 rəqəminin indexlərinin cəmi: " + sumOfIndexesOfSeven);
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2  
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
function filterNameStartsWithT(arr) {
    return arr.filter(item => item.name.startsWith('t'));
}
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function countNameStartsAndEndsWithT(arr) {
    return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
}
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
function sumKeysOfNameStartsAndEndsWithT(arr) {
    return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).reduce((sum, item) => sum + item.key, 0);
}
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function replaceNameEndsWithE(arr) {
    return arr.map(item => item.name.endsWith('e') ? { ...item, name: 'SuperDev' } : item);
}
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
function findKeyOfLongestName(arr) {
    return arr.reduce((maxKey, item) => item.name.length > arr[maxKey].name.length ? item.key : maxKey, 0);
}
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function squareIndexOfLongestName(arr) {
    const longestNameIndex = arr.reduce((maxIndex, item, index) => item.name.length > arr[maxIndex].name.length ? index : maxIndex, 0);
    return longestNameIndex * longestNameIndex;
}
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function filterNameLengthFour(arr) {
    return arr.filter(item => item.name.length === 4);
}

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
function findNameOfMaxKey(arr) {
    const maxKey = arr.reduce((max, item) => item.key > max ? item.key : max, 0);
    return arr.find(item => item.key === maxKey).name;
}
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
function findIndexesOfDoubleL(arr) {
    return arr.reduce((indexes, item, index) => item.name.includes('ll') ? [...indexes, index] : indexes, []);
}
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
function findKeysOfDoubleT(arr) {
    return arr.reduce((keys, item) => item.name.includes('t') ? [...keys, item.key] : keys, []);
}
console.log(filterNameStartsWithT(arr2));
console.log(countNameStartsAndEndsWithT(arr2));
console.log(sumKeysOfNameStartsAndEndsWithT(arr2));
console.log(replaceNameEndsWithE(arr2));
console.log(findKeyOfLongestName(arr2));
console.log(squareIndexOfLongestName(arr2));
console.log(filterNameLengthFour(arr2));
console.log(findNameOfMaxKey(arr2));
console.log(findIndexesOfDoubleL(arr2));
console.log(findKeysOfDoubleT(arr2));