document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('button');
    const menuItems = document.querySelector('ul');

    mobileMenuButton.addEventListener('click', function () {
        menuItems.classList.toggle('hidden');
    });
});