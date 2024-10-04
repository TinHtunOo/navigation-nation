let menuBar = document.querySelector(".menu-bars");
let overlay = document.querySelector(".overlay")
let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");
let nav4 = document.querySelector(".nav4");
let nav5 = document.querySelector(".nav5");
let navList = [nav1, nav2, nav3, nav4, nav5]

function changeMenuBar(){
    menuBar.classList.toggle('change');
}

function animateNavBar(d1, d2) {
    navList.forEach((nav) => {
        nav.classList.replace(d1, d2);
    })
}

// Toggle Switch
function toggleSwitch() {
    if( overlay.classList.contains('disable')){
        overlay.classList.replace('disable', 'active');
        animateNavBar("disable", "active");
        changeMenuBar()
    } else {
        overlay.classList.replace('active', 'disable');
        animateNavBar('active', 'disable');
        changeMenuBar();
    }
    
}

// add Event Listener
menuBar.addEventListener('click', toggleSwitch);
navList.forEach(nav => nav.addEventListener('click', toggleSwitch))
