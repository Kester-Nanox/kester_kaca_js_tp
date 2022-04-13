const str = "Hello";

function max20Caracs() {
    return new Promise((succesCallBack, failureCallBack) => {
        console.log('Promesse');

        if (str.length <= 20) {
            succesCallBack("Réussite");
        } else {
            failureCallBack("Échec");
        }
    })
}

function succesCallBack(résultat) {
    console.log("OK " + résultat);
    return true;
}

function failureCallBack(erreur) {
    console.log("NOT OK " + erreur);
}

const promise = max20Caracs(str);
promise.then(succesCallBack, failureCallBack);