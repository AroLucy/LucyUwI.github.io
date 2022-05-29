const toggled = localStorage.getItem('ThemeToggled')

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark")
    document.getElementById("button1").classList.toggle("darkicn")
    document.getElementById("button2").classList.toggle("darkicn")
    document.getElementById("theme").classList.toggle("themeL")
    document.getElementById("theme").classList.toggle("themeD")
}

function theme() {
    document.body.classList.toggle("dark")
    document.getElementById("button1").classList.toggle("darkicn")
    document.getElementById("button2").classList.toggle("darkicn")
    document.getElementById("theme").classList.toggle("themeL")
    document.getElementById("theme").classList.toggle("themeD")
    if (toggled != 'true') {
        localStorage.setItem('ThemeToggled', 'true')
    } else if (toggled == 'true') {
        localStorage.removeItem('ThemeToggled')
    }
    location.reload()
}

if (toggled == 'true') {
    document.body.classList.toggle("dark")
    document.getElementById("button1").classList.toggle("darkicn")
    document.getElementById("button2").classList.toggle("darkicn")
    document.getElementById("theme").classList.toggle("themeL")
    document.getElementById("theme").classList.toggle("themeD")
}
