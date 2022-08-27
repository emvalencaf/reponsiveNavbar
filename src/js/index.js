const mobileMenuBtn = document.querySelector("#mobile_menu")

const ulNavbar = document.querySelector("#ul_navbar")
console.log(ulNavbar)
mobileMenuBtn.addEventListener("click", (evt) => {

    toggleMobileMenuBtn(evt.currentTarget)


})


function toggleMobileMenuBtn(btn){
    if(btn.innerHTML === '<i class="uil uil-bars"></i>') {

        ulNavbar.classList.add("mobile-active")
        return btn.innerHTML = '<i class="uil uil-times"></i>'
    }

    ulNavbar.classList.remove("mobile-active")
    return btn.innerHTML = '<i class="uil uil-bars"></i>'
}