// Exercice 1
async function max20Caracs() {
    try {
        const str = myPromise1("Hello");
        console.log(str);
    } catch(e) {
        console.log(e);
    }
}

const myPromise1 = (value) => {
    return new Promise((resolve, failure) => {
        if (value.length <= 20) {
            resolve("str est inférieur ou égal à 20");
        } else {
            failure("str est supérieur à 20");
        }
    })
}

max20Caracs();



// Exercice 2
const a = 10;
const b = 4;

async function difference() {
    try {
        const c = myPromise2(a - b);
        console.log(c);
    } catch(e) {
        console.log(e);
    }
}

const myPromise2 = (value) => {
    return new Promise((resolve, failure) => {
        if (value >= 0) {
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

async function isMinor() {
    try {
        const verificationAnnee = myPromise3(myTabMinor[0] - myTabBirth[0]);
        console.log(verificationAnnee);
        const verificationMois = await myPromise3(myTabMinor[1] - myTabBirth[1]);
        console.log(verificationMois);
        const verificationJour = await myPromise3(myTabMinor[2] - myTabBirth[2]);
        console.log(verificationJour);
    } catch(e) {
        console.log(e);
    }
}

const myPromise3 = (value) => {
    return new Promise((resolve, failure) => {
        if (value >= 0) {
            resolve("Cette personne est majeure");
        } else {
            if (value >= 0) {
                resolve("Cette personne est majeure");
            } else {
                if (value >= 0) {
                    resolve("Cette personne est majeure");
                } else {
                    failure("Cette personne est mineure");
                }
            }
        }
    })
}

isMinor();



/*
async function execute() {
    try {
        const firstPromise = myPromise(1);
        console.log(firstPromise);
        const secondePromise = myPromise(2);
        console.log(secondePromise);
    } catch(e) {
        console.log(e);
    }
}

const myPromise = (value) => {
    return new Promise((resolve, failure) => {
        if (value === 1) {
            resolve('GOOD');
        } else {
            failure("BAD");
        }
    })
}

execute();
*/