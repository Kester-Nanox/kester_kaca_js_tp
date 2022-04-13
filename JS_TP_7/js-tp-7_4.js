// Exercice 1
const str = "Hello";

function max20Caracs() {
    try {
        myPromise1(str).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise1 = (value) => {
    return new Promise((resolve, failure) => {
        if (str.length <= 20) {
            resolve("str est inférieur ou égal à 20");
        } else {
            failure("str est supérieur à 20");
        }
    })
}

max20Caracs();



// Exercice 2
const a = 10, b = 2;

function difference() {
    try {
        myPromise2(a, b).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise2 = (value) => {
    return new Promise((resolve, failure) => {
        if (a > b) {
            resolve(`${a - b}`);
        } else {
            failure("a est inférieur à b");
        }
    })
}

difference();



// Exercice 3
const birthDate = "22/02/1996";
let myTabBirth = birthDate.split("/");
console.log(birthDate);
myTabBirth = myTabBirth.reverse();
// console.log(myTabBirth); // ['1996', '02', '22']

let today = new Date();
let jour = today.getDate();
let mois = today.getMonth();
let annee = today.getFullYear();
let myTabToday = [];
myTabToday.push(jour);
myTabToday.push(mois);
myTabToday.push(annee);
myTabMinor = myTabToday.reverse();
myTabMinor[0] = myTabMinor[0] - 18;
// console.log(myTabMinor); // [2004, 3, 10]

function isMinor() {
    try {
        myPromise3(birthDate).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise3 = (value) => {
    return new Promise((resolve, failure) => {
        if (myTabBirth[0] < myTabMinor[0]) {
            resolve("Cette personne est majeure");
        } else {
            if (myTabBirth[0] == myTabMinor[0] && myTabBirth[1] < myTabMinor[1]) {
                resolve("Cette personne est majeure");
            } else {
                if (myTabBirth[1] == myTabMinor[1] && myTabBirth[2] < myTabMinor[2]) {
                    resolve("Cette personne est majeure");
                } else {
                    failure("Cette personne est mineure");
                }
            }
        }
    })
}

isMinor();