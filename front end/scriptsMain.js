document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "orange";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "black";
        });
    });

    const imageCubes = document.querySelectorAll(".image-cube");
    imageCubes.forEach(cube => {
        cube.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        cube.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
