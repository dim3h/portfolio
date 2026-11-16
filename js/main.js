// =========================================================
// JavaScript du portfolio
// Rôle 1 : ouvrir et fermer le menu sur mobile.
// Rôle 2 : filtrer les projets par compétence (page Projets PPE).
// =========================================================


// ----- 1. Menu mobile -----

// On récupère le bouton "Menu" et la balise nav grâce à leur id
const boutonMenu = document.getElementById("bouton-menu");
const menu = document.getElementById("menu");

// À chaque clic sur le bouton, on ajoute ou on retire la classe "ouvert".
// C'est le CSS qui affiche la liste quand cette classe est présente.
boutonMenu.addEventListener("click", function () {
    menu.classList.toggle("ouvert");

    // On indique aux lecteurs d'écran si le menu est ouvert ou fermé
    const estOuvert = menu.classList.contains("ouvert");
    boutonMenu.setAttribute("aria-expanded", estOuvert);
});


// ----- 2. Filtre des projets par compétence -----

// On récupère tous les boutons du filtre et toutes les cartes de projets.
// Sur les autres pages, ces listes sont vides et le code ne fait rien.
const boutonsFiltre = document.querySelectorAll(".filtre");
const projets = document.querySelectorAll(".carte-projet");
const messageAucunProjet = document.getElementById("aucun-projet");

boutonsFiltre.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        // La compétence choisie : "toutes", "c1", "c2"...
        const competence = bouton.value;

        // 1. On met en avant le bouton cliqué et on retire la mise en avant des autres
        boutonsFiltre.forEach(function (autreBouton) {
            autreBouton.classList.remove("filtre-actif");
            autreBouton.setAttribute("aria-pressed", "false");
        });
        bouton.classList.add("filtre-actif");
        bouton.setAttribute("aria-pressed", "true");

        // 2. On affiche les projets qui ont la classe de la compétence, on cache les autres
        let nombreAffiches = 0;
        projets.forEach(function (projet) {
            if (competence === "toutes" || projet.classList.contains(competence)) {
                projet.classList.remove("cache");
                nombreAffiches = nombreAffiches + 1;
            } else {
                projet.classList.add("cache");
            }
        });

        // 3. Si aucun projet ne correspond, on affiche un message
        if (nombreAffiches === 0) {
            messageAucunProjet.classList.remove("cache");
        } else {
            messageAucunProjet.classList.add("cache");
        }
    });
});
