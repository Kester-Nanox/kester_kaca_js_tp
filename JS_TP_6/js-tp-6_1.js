    let personne = {
        nom : "yvernaux",
        prenom : "lucas",
        sexe : "M",
        naissance : "29/12/98"
    };

    let codeItalie = [],
    myTabNom = [],
    myTabPrenom = [],
    myTabDate = [],
    myTabAnnee = [],
    myTabAnnee2 = [];





    function fiscalCode () {
        let monNom = personne.nom.split("");
        
        for (let i = 0; i < monNom.length; i++) {
            if (monNom[i] != 'a' && monNom[i] != 'e' && monNom[i] != 'i' && monNom[i] != 'o' && monNom[i] != 'u' /*&& monNom[i] != 'y'*/
            && monNom[i] != 'A' && monNom[i] != 'E' && monNom[i] != 'I' && monNom[i] != 'O' && monNom[i] != 'U' /*&& monNom[i] != 'Y'*/) {
                myTabNom.push(monNom[i]);
            }
        }
        
        if (myTabNom.length < 3) {
            for (let j = 0; j < monNom.length; j++) {
                if (monNom[j] == 'a' || monNom[j] == 'e' || monNom[j] == 'i' || monNom[j] == 'o' || monNom[j] == 'u' /*|| monNom[j] == 'y'*/
                || monNom[j] == 'A' || monNom[j] == 'E' || monNom[j] == 'I' || monNom[j] == 'O' || monNom[j] == 'U' /*|| monNom[j] == 'Y'*/) {
                    myTabNom.push(monNom[j]);
                }
            }
        }

        while (myTabNom.length < 3) {
            myTabNom.push('X');
        }

        codeItalie.push(myTabNom[0].toUpperCase());
        codeItalie.push(myTabNom[1].toUpperCase());
        codeItalie.push(myTabNom[2].toUpperCase());
        // 3 lettres du nom (consonnes, puis voyelles, puis 'X')
        // console.log(codeItalie);





        let monPrenom = personne.prenom.split("");

        for (let i = 0; i < monPrenom.length; i++) {
            if (monPrenom[i] != 'a' && monPrenom[i] != 'e' && monPrenom[i] != 'i' && monPrenom[i] != 'o' && monPrenom[i] != 'u' /*&& monPrenom[i] != 'y'*/
            && monPrenom[i] != 'A' && monPrenom[i] != 'E' && monPrenom[i] != 'I' && monPrenom[i] != 'O' && monPrenom[i] != 'U' /*&& monPrenom[i] != 'Y'*/) {
                myTabPrenom.push(monPrenom[i]);
            }
        }

        if (myTabPrenom.length == 3) {
            codeItalie.push(myTabPrenom[0].toUpperCase());
            codeItalie.push(myTabPrenom[1].toUpperCase());
            codeItalie.push(myTabPrenom[2].toUpperCase());
        } else if (myTabPrenom.length > 3) {
            codeItalie.push(myTabPrenom[0].toUpperCase());
            codeItalie.push(myTabPrenom[2].toUpperCase());
            codeItalie.push(myTabPrenom[3].toUpperCase());
        } else if (myTabPrenom.length < 3) {

            for (let j = 0; j < monPrenom.length; j++) {
                if (monPrenom[j] == 'a' || monPrenom[j] == 'e' || monPrenom[j] == 'i' || monPrenom[j] == 'o' || monPrenom[j] == 'u' /*|| monPrenom[j] == 'y'*/
                || monPrenom[j] == 'A' || monPrenom[j] == 'E' || monPrenom[j] == 'I' || monPrenom[j] == 'O' || monPrenom[j] == 'U' /*|| monPrenom[j] == 'Y'*/) {
                    myTabPrenom.push(monPrenom[j].toUpperCase());
                }
            }

            for (let k = 0; k < myTabPrenom.length; k++) {
                codeItalie.push(myTabPrenom[k].toUpperCase());
            }
        }

        if (codeItalie.length < 6) {
            while (codeItalie.length < 6) {
                codeItalie.push('X');
            }
        } 
        // 3 lettres du prénom (consonnes mais pas la 2e, sauf si que 3 consonnes, puis voyelles si pas assez de consonnes, si toujours pas assez 'X')
        // console.log(codeItalie);





        let myTabDate = personne.naissance.split("/");
        myTabAnnee.push(myTabDate[2])
        myTabAnnee2 = myTabAnnee.join("").split("");
        
        codeItalie.push(myTabAnnee2[2]);
        codeItalie.push(myTabAnnee2[3]);
        // 2 derniers chiffres année de naissance





        const test = parseInt(myTabDate[1]);
        console.log(test);
        switch (test) {
            case 01:
            case 1:
                codeItalie.push("A"); break;
            case 02:
            case 2:
                codeItalie.push("B"); break;
            case 03:
            case 3:
                codeItalie.push("C"); break;
            case 04:
            case 4:
                codeItalie.push("D"); break;
            case 05:
            case 5:
                codeItalie.push("E"); break;
            case 06:
            case 6:
                codeItalie.push("H"); break;
            case 07:
            case 7:
                codeItalie.push("L"); break;
            case 08:
            case 8:
                codeItalie.push("M"); break;
            case 09:
            case 9:
                codeItalie.push("P"); break;
            case 10:
                codeItalie.push("R"); break;
            case 11:
                codeItalie.push("S"); break;
            case 12:
                codeItalie.push("T");
        }
        // 1 lettre pour le mois





        let jour = myTabDate[0];
        if (personne.sexe == 'M') {
            if (jour < 10) {
                jour = '0' + jour;
                let myTabJourH1 = jour.split("");
                codeItalie.push(myTabJourH1[0]);
                codeItalie.push(myTabJourH1[1]);
            } else {
                let myTabJourH2 = jour.split("");
                codeItalie.push(myTabJourH2[0]);
                codeItalie.push(myTabJourH2[1]);
            }
        } else if (personne.sexe == 'F') {
            jour = parseInt(jour) + 40;
            jour = jour.toString();
            let myTabJourF = jour.split("");
            codeItalie.push(myTabJourF[0]);
            codeItalie.push(myTabJourF[1]);
    }
        // 2 chiffres jour de naissance





        const resultat = codeItalie.join("");
        return resultat;
    }
    fiscalCode();