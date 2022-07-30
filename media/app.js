var toggled = localStorage.getItem('ThemeToggled')

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    color();
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}

function color() {
    document.body.classList.toggle("darkmode")
    document.getElementById("button1").classList.toggle("DarkIcon")
    document.getElementById("button2").classList.toggle("DarkIcon")
}

function theme() {
    color()
    var toggled = localStorage.getItem('ThemeToggled')
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
