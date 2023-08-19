(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const categoryCards = document.querySelectorAll(".category-card");
        const eventCards = document.querySelector(".event-cards");
        
        categoryCards.forEach(categoryCard => {
            categoryCard.addEventListener("click", function () {
                eventCards.style.display = "block"; 
                const categoryName = this.classList[1];
                const categoryEvents = document.querySelectorAll(`.${categoryName}-event`);
                
                document.querySelectorAll(".event-card").forEach(card => {
                    card.style.display = "none";
                });
                
                categoryEvents.forEach(event => {
                    event.style.display = "block";
                });
            });
        });
    
        const academicsCategoryCard = document.querySelector(".academics");
        academicsCategoryCard.click();
    });
})();
