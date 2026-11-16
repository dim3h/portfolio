// =========================================================
// JavaScript du portfolio
// Rôle : ouvrir et fermer le menu sur mobile.
// (Le filtre des projets par compétence sera ajouté ici plus tard.)
// =========================================================

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
