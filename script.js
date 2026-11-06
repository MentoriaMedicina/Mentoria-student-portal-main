document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".year-card");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            const destination = this.getAttribute("href");

            if (!destination) {
                return;
            }

            this.style.opacity = "0.7";

        });

    });

});
