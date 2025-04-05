//HAUT DE PAGE
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});

//LE MENU BURGER S'ENLEVE A PARTIR DE 550PX
tailwind.config = {
    theme: {
        extend: {
            screens: {
                'custom': '550px', 
            },
        },
    },
};