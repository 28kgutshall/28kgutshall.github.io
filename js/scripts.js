// Initialize stylemode from localStorage or default to light if not set
let stylemode = localStorage.getItem('style') || 'light';
let stylelink = document.getElementById('style');

// Set the initial theme based on stylemode value
if (stylemode === 'dark') {
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
}

// Function to toggle between light and dark mode
function switchmode() {
    if (stylemode === 'light') {
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
        localStorage.setItem('style', 'dark');
    } else {
        stylemode = 'light';
        stylelink.href = 'css/light.css';
        localStorage.setItem('style', 'light');
    }
}

// Function to toggle visibility of toolbar buttons
function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display === 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}