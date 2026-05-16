let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "white";
        logo.src="images/byui-logo-white.png";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        logo.src="images/byui-logo_blue.webp";
    }
}   