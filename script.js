const icon = document.querySelector("i")
const nav = document.querySelector("nav")

icon.addEventListener("click", () => {
    if (icon.className == "fa-solid fa-bars") {
        nav.style.display = "block"
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        nav.style.display = "none"
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})