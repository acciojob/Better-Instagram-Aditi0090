document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    let draggedItem = null;

    images.forEach(image => {
        image.setAttribute("id", `drag${image.textContent.split(" ")[1]}`); // Set unique IDs (drag1, drag2, etc.)

        image.addEventListener("dragstart", function (event) {
            draggedItem = this;
            setTimeout(() => this.style.visibility = "hidden", 0);
            event.dataTransfer.setData("text/plain", this.id);
        });

        image.addEventListener("dragover", function (event) {
            event.preventDefault(); // Allows dropping
        });

        image.addEventListener("drop", function (event) {
            event.preventDefault();
            let draggedId = event.dataTransfer.getData("text/plain");
            let droppedItem = document.getElementById(draggedId);

            if (draggedItem !== this) {
                // Swap background images
                let tempBg = this.style.backgroundImage;
                this.style.backgroundImage = draggedItem.style.backgroundImage;
                draggedItem.style.backgroundImage = tempBg;
            }

            draggedItem.style.visibility = "visible";
            draggedItem = null;
        });

        image.addEventListener("dragend", function () {
            this.style.visibility = "visible";
        });
    });
});
