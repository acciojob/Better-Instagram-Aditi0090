//your code here
const images = document.querySelectorAll(".image");

let draggedItem = null;

images.forEach(image => {
    image.addEventListener("dragstart", function (event) {
        draggedItem = this;
        setTimeout(() => this.style.visibility = "hidden", 0);
    });

    image.addEventListener("dragover", function (event) {
        event.preventDefault(); // Allow dropping
    });

    image.addEventListener("drop", function (event) {
        event.preventDefault();

        if (draggedItem !== this) {
            let tempBg = this.style.backgroundImage;
            this.style.backgroundImage = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = tempBg;
        }
    });

    image.addEventListener("dragend", function () {
        draggedItem.style.visibility = "visible";
        draggedItem = null;
    });
});
