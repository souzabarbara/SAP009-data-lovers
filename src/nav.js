document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

function toggleMenu(event) {
    const menuDisplay = document.querySelector(".menu").style.display
    if (menuDisplay === "none" || !menuDisplay) {
        document.querySelector(".menu").style.display = 'flex'
        document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>"
    } else {
        document.querySelector(".menu").style.display = 'none'
        document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>"
    }
}