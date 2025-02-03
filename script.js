const numero = document.querySelectorAll("li");//recup tous les li
const button = document.getElementById("button");
const firstbloc = document.querySelector(".blocstart");
const secondbloc = document.querySelector(".blocend");
const output = document.getElementById("output");
// Fonction de sélection
function select(event) {
    // Enlève la classe "clicked" de tous les <li>
    numero.forEach(li => li.classList.remove("clicked"));
    
    // Ajoute la classe "clicked" à l'élément cliqué
    event.target.classList.add("clicked"); // Utilise event.target au lieu de this
    output.textContent=event.target.textContent;//permet de recuperer le texte cliquee qui est target par event
}

// Ajoute un événement click à chaque <li>
numero.forEach(li => li.addEventListener("click", select));

button.addEventListener("click",()=>{
    firstbloc.style.display="none";
    secondbloc.style.display="flex";
    
})
