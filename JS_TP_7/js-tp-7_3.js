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

function isMinor(birthDate) {
    return new Promise((succesCallBack, failureCallBack) => {
        console.log('Promesse');

        if (myTabBirth[0] < myTabMinor[0]) {
            succesCallBack("Réussite");
        } else {
            if (myTabBirth[0] == myTabMinor[0] && myTabBirth[1] < myTabMinor[1]) {
                succesCallBack("Réussite");
            } else {
                if (myTabBirth[1] == myTabMinor[1] && myTabBirth[2] < myTabMinor[2]) {
                    succesCallBack("Réussite");
                } else {
                    failureCallBack("Échec");
                }
            }
        }
    })
}

function succesCallBack(résultat) {
    console.log("Majeur " + résultat);
}

function failureCallBack(erreur) {
    console.log("Mineur " + erreur);
}

const promise = isMinor(birthDate);
promise.then(succesCallBack, failureCallBack);