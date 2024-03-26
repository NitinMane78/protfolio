document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('button');
    const menuItems = document.querySelector('ul');

    mobileMenuButton.addEventListener('click', function () {
        menuItems.classList.toggle('hidden');
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.getElementById("menuButton");
        const menuIcon = document.getElementById("menuIcon");
        const crossIcon = document.getElementById("crossIcon");

        menuButton.addEventListener("click", function () {
            if (menuIcon.classList.contains("hidden")) {
                menuIcon.classList.remove("hidden");
                crossIcon.classList.add("hidden");
            } else {
                menuIcon.classList.add("hidden");
                crossIcon.classList.remove("hidden");
            }
        });
    });

