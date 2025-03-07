// Change Variable
let stylemode = document.cookie;

// Get the link to the stylesheet
let stylelink = document.getElementById('style');

// Conditional Branch for Dark or Light Mode
if (stylemode === 'dark') {
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'light';
    document.cookie = 'style=light';
}

// Switch Mode Function
function switchmode() {
    if (stylemode === 'light') {
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
        document.cookie = 'style=dark';
    } else {
        stylemode = 'light';
        stylelink.href = 'css/light.css';
        document.cookie = 'style=light';
    }
}

// Show/Hide Toolbar Function
function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display === 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}