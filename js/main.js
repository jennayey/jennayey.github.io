let darkMode = false;
document.getElementById("dark-reader").disabled = true;
let toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {

    if (darkMode===false) {
        document.getElementById("dark-reader").disabled = false;
        document.getElementById("light-reader").disabled = true;
        darkMode=true;
        console.log('dark mode on');

    }

    else {
        document.getElementById("dark-reader").disabled = true;
        document.getElementById("light-reader").disabled = false;
        console.log('dark mode off');
        darkMode=false;
    }

}

