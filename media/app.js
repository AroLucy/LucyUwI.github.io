var toggled = localStorage.getItem('ThemeToggled')

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}

function theme() {
    var toggled = localStorage.getItem('ThemeToggled')
    document.body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
    if (toggled != 'true') {
        localStorage.setItem('ThemeToggled', 'true')
    } else if (toggled == 'true') {
        localStorage.removeItem('ThemeToggled')
    }
}

if (toggled == 'true') {
    document.body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}
