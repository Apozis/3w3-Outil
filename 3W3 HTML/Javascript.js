const cases = [
    {
        titre: "Pourquoi ?",
        texte:
            "Le vrai problème et pourquoi il doit être résolu"
    },
    {
        titre: "Pourquoi Maintenant ?",
        texte:
            "Pourquoi est-ce maintenant le bon moment pour régler le problème ?"
    },
    {
        titre: "Pourquoi nous ?",
        texte:
            "Pourquoi sommes nous les seuls à pouvoir régler ce problème et qu'y gagnerons-nous ?"
    },
    {
        titre: "Qui ?",
        texte:
            "Les utilisateurs principaux & acheteurs à cibler :"
    },
    {
        titre: "Qui d'autre ?",
        texte:
            "Les utilisateurs secondaires & influenceurs à cibler :"
    },
    {
        titre: "Et pas qui ?",
        texte:
            "Qui ne pas cibler ?"
    },
    {
        titre: "Quoi ?",
        texte:
            "Solutions possibles pour adresser le pourquoi :"
    },
    {
        titre: "Et donc quoi ?",
        texte:
            "Les bénéfices de la solution possible :"
    },
    {
        titre: "Et maintenant, quoi ?",
        texte:
            "Opportunité, priorisation et prochain étape ?"
    },
]
let l1 = document.getElementById("L1");
let l2 = document.getElementById("L2");
let l3 = document.getElementById("L3");
let compteur = 0

cases.map(caseElement => {
    let aside = document.createElement("aside");
    let h3 = document.createElement("h3");
    h3.innerHTML = caseElement.titre;
    let textArea = document.createElement("textarea");
    textArea.cols = 45;
    textArea.rows = 3;
    textArea.placeholder = caseElement.texte;
    aside.appendChild(h3);
    aside.appendChild(textArea);

    if (compteur < 3) {
        l1.appendChild(aside);
    }
    else if (compteur < 6) {
        l2.appendChild(aside);
    } else {
        l3.appendChild(aside);
    }
    compteur++;
})
