export default function () {

    function navbarMobile() {
        const navbar = document.querySelector("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            const toggle = document.querySelector(".mobile-nav-toggle");
            if (toggle.classList.contains("bi-x")) {
                toggle.classList.remove("bi-x");
                toggle.classList.add("bi-list");
            }
        }
    }
    
    const navigation = () => {
        let header = document.querySelector("#header");
        header.classList.add("header_top");
        navbarMobile();
    };

    const navigationHome = () => {
        let header = document.querySelector("#header");
        header.classList.remove("header_top");
        navbarMobile();
    };

    const nav_toggler = () => {
        document.querySelector("#navbar").classList.toggle("navbar-mobile");
        const toggle = document.querySelector(".mobile-nav-toggle");
        toggle.classList.toggle("bi-list");
        toggle.classList.toggle("bi-x");
    };

    return {
        nav_toggler,
        navigationHome,
        navigation
    }
}