var inverted = false;

// script.js
const codeGroups = document.querySelectorAll(".code");

codeGroups.forEach((group) => {
  const codeElement = group.querySelector("code");
  const code = codeElement.textContent.trim();

  // Fonction pour convertir les balises en éléments HTML
  const convertToHTML = (text) => {
    const replacements = {
      "<": "<",
      ">": ">",
      "&": "&",
      "'": "'",
      '"': '"',
    };

    return text.replace(/[<>&'"]/g, (character) => replacements[character]);
  };

  // Fonction pour appliquer les couleurs de l'IDE et les indentations
  const applyCodeColorsAndIndentation = (codeElement, code) => {
    const coloredCode = Prism.highlight(code, Prism.languages.c, "c");
    const indentedCode = coloredCode.replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    codeElement.innerHTML = `<pre>${indentedCode}</pre>`;
  };

  applyCodeColorsAndIndentation(codeElement, convertToHTML(code));
});

function copyCode(nom,btn) {
  var codeElement = document.getElementById(nom);
  var codeText = codeElement.innerText;

  // Créer un élément de texte temporaire
  var tempElement = document.createElement('textarea');
  tempElement.value = codeText;
  document.body.appendChild(tempElement);

  // Sélectionner et copier le contenu du texte temporaire
  tempElement.select();
  document.execCommand('copy');

  // Supprimer l'élément de texte temporaire
  document.body.removeChild(tempElement);

  // Mettre à jour le texte du bouton après la copie
  var copyButton = document.getElementById(btn);
  copyButton.innerText = 'Copied!';
}

// Sélectionnez la balise image-slider
const slider = document.querySelector('.image-slider');
// Sélectionnez toutes les images à l'intérieur du slider
const images = slider.querySelectorAll('img');

let currentIndex = 0;

function startSlider() {
  setInterval(() => {
    // Supprimez la classe "active" de l'image actuelle
    images[currentIndex].classList.remove('active');

    // Incrémentez l'index pour passer à l'image suivante
    currentIndex = (currentIndex + 1) % images.length;

    // Ajoutez la classe "active" à l'image suivante
    images[currentIndex].classList.add('active');
  }, 3000); // Définissez la durée souhaitée entre chaque image (en millisecondes)
}

// Démarrer le défilement automatique au chargement de la page
startSlider();

// Récupérer le bouton à partir de son ID
var colorButton = document.getElementById('colorButton');

// Définir l'événement onclick pour le bouton
colorButton.onclick = function() {
  // Inverser les couleurs du site
  var body = document.body;
  body.classList.toggle('invert-colors');
  if (inverted == true) {
    inverted = false;
  }else {
    inverted = true;
  }
  if (inverted) {
    colorButton.innerText = "Mode Jour"
  }else {
    colorButton.innerText = "Mode Nuit"
  }
  
};




// script.js



window.addEventListener("scroll", () => {
  if (inverted) {
    var header = document.querySelector('header.invert-colors');
    var topbar = document.querySelector('nav.invert-colors ul');
  }else {
    var header = document.querySelector("header");
    var topbar = document.querySelector("nav ul");
  }
  const scrollPosition = window.scrollY;
  topbar.classList.add("fixed-topbar");
});