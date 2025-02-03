const numero = document.querySelectorAll("li");

numero.forEach(item => {
    item.addEventListener("click", function() {
        // Enlève la classe "clicked" de tous les <li>
        numero.forEach(li => li.classList.remove("clicked"));
        // Ajoute la classe "clicked" à l'élément cliqué
        this.classList.add("clicked");
    });
});