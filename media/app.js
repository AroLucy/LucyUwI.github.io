var toggled = localStorage.getItem('ThemeToggled')

if (document.getElementById("ProjectsHTML") !== null) {
    body = document.getElementById("ProjectsHTML");
} else {
    body = document.body
}

function Toggle() {
    document.getElementsByTagName("img")[0].classList.toggle("DarkIcon")
    document.getElementsByTagName("img")[1].classList.toggle("DarkIcon")
    body.classList.toggle("darkmode")
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    Toggle()
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Toggle()
}

function theme() {
    Toggle()
    var toggled = localStorage.getItem('ThemeToggled')
    if (toggled != 'true') {
        localStorage.setItem('ThemeToggled', 'true')
    } else if (toggled == 'true') {
        localStorage.removeItem('ThemeToggled')
    }
}

if (toggled == 'true') {
    Toggle()
}
