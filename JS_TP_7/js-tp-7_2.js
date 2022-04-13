const a = 10, b = 2;

function difference(a, b) {
    return new Promise((succesCallBack, failureCallBack) => {
        console.log('Promesse');

        if (a > b) {
            succesCallBack("Réussite");
        } else {
            failureCallBack("Échec");
        }
    })
}

function succesCallBack(résultat) {
    console.log(`${a - b} ` + résultat);
}

function failureCallBack(erreur) {
    console.log("a est inférieur à b " + erreur);
}

const promise = difference(a, b);
promise.then(succesCallBack, failureCallBack);