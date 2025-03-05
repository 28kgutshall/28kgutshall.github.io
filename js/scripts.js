let themeLink = document.getElementById('style');

if (localStorage.getItem('theme') === 'dark') {
    themeLink.setAttribute('href', 'css/dark.css');
    document.getElementById('theme-toggle').textContent = "Switch to Light Mode";
} else {
    themeLink.setAttribute('href', 'css/light.css');
    document.getElementById('theme-toggle').textContent = "Switch to Dark Mode";
}

function switchmode() {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        themeLink.setAttribute('href', 'css/dark.css');
        document.getElementById('theme-toggle').textContent = "Switch to Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        themeLink.setAttribute('href', 'css/light.css');
        document.getElementById('theme-toggle').textContent = "Switch to Dark Mode";
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display === 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}

document.getElementById("start-game").addEventListener("click", function () {
    alert("Game Started!");
});