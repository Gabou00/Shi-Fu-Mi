let images = document.querySelectorAll("img");

let scorePlayer1 = 0;
let scoreText1 = document.getElementById("scorePlayer1");

let scorePlayer2 = 0;
let scoreText2 = document.getElementById("scorePlayer2");

let scoreEgalite = 0;
let scoreText3 = document.getElementById("scoreEgalite");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        const joueur = images[i].id;
        // console.log(joueur);
        let ordi = images[Math.floor(Math.random() * images.length)].id;
        // console.log(ordi);
        resultat = play(ordi, joueur);
        gagner(resultat);
        
    });
    
    const play = (ordi, joueur) => {
        if (ordi === joueur) {
            resultat = "Egalité";
            // console.log(resultat);
        } else if (
            (joueur === "ciseau" && ordi === "foret") ||
            (joueur === "foret" && ordi === "pierre") ||
            (joueur === "pierre" && ordi === "ciseau")
            ) {
                // console.log("C'est gagné ! We did it");
                resultat = "Joueur 1 a gagnégnégné !";
            } else {
                // console.log("Tu as perdu gros naze");
                resultat = "Joueur 1 a perdududu !";
            }
            return resultat;
        };
    }
    
    function gagner(resultat) {
        console.log(resultat);
        if ((resultat === "Joueur 1 a gagnégnégné !")) {
            scorePlayer1++;
            scoreText1.innerText = "Score Joueur 1 : " + scorePlayer1;
        }

        else if (resultat === "Joueur 1 a perdududu !") {
            scorePlayer2++;
            scoreText2.innerText = "- Score Ordi 2 : " + scorePlayer2
        }

        else {
            scoreEgalite++;
            scoreText3.innerText = "Nombre d'égalités : " + scoreEgalite;
        }

        nombreclics.innerText = "Nombre de clics total : " + (scorePlayer1 + scorePlayer2 + scoreEgalite);

    }

let reinitialiser = document.getElementById("reinitialiser");


function limite () {
    
}
