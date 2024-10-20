var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}

