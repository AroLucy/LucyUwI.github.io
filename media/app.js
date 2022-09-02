var toggled = localStorage.getItem('ThemeToggled')

if (document.getElementById("ProjectsHTML") !== null) {
    body = document.getElementById("ProjectsHTML");
} else {
    body = document.body
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}

function theme() {
    body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
    var toggled = localStorage.getItem('ThemeToggled')
    if (toggled != 'true') {
        localStorage.setItem('ThemeToggled', 'true')
    } else if (toggled == 'true') {
        localStorage.removeItem('ThemeToggled')
    }
}

if (toggled == 'true') {
    document.getElementsByTagName("html").toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}
