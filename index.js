(function() {
    function initializeCategorySelection() {
        const categoryCards = document.querySelectorAll(".category-card");
        const eventCards = document.querySelector(".event-cards");

        function updateCategoryDisplay(categoryName) {
            categoryCards.forEach(card => {
                card.classList.remove("selected");
            });

            const selectedCard = document.querySelector(`.${categoryName}`);
            selectedCard.classList.add("selected");

            eventCards.style.display = "block";
            document.querySelectorAll(".event-card").forEach(card => {
                card.style.display = "none";
            });

            const categoryEvents = document.querySelectorAll(`.${categoryName}-event`);
            categoryEvents.forEach(event => {
                event.style.display = "block";
            });
        }

        categoryCards.forEach(categoryCard => {
            categoryCard.addEventListener("click", function () {
                const categoryName = this.classList[1];
                updateCategoryDisplay(categoryName);
            });
        });

        const academicsCategoryCard = document.querySelector(".academics");
        updateCategoryDisplay("academics");
    }

    initializeCategorySelection();
})();
