const menuBar = document.querySelector(".menu_bar");
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active");
    document.querySelector(".menu_items").classList.toggle("active");
})

const toP = document.querySelector(".top");
window.addEventListener('scroll', function() {
    const x = this.pageYOffset;
    if(x > 80) {
        toP.classList.add("active");
    } else {
        toP.classList.remove("active");
    }
})

const menuTitle = document.querySelector('.menu_title');
menuTitle.addEventListener('click', function(e) {
    if(e.target.classList.contains("menu_button")) {
        const Target = e.target.getAttribute("data_title");
        menuTitle.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu_item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active");
    }
})