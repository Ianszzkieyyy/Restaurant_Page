const content = document.querySelector('#content');

const createNav = (() => {
    const navbar = createElement("div", "navbar", 0, 0, " ");

    const navLogo = createElement("div", "nav-logo", 0, 0, "HIGH-CO.")
    
    const navLink1 = createElement("a", "home-nav", "href", "index.html", "Home");
    const navLink2 = createElement("a", "menu-nav", "href", "index.html", "Menu");
    const navLink3 = createElement("a", "order-nav", "href", "index.html", "Order");
    const navLink4 = createElement("a", "about-nav", "href", "index.html", "About");

    navbar.append(navLogo, navLink1, navLink2, navLink3, navLink4);
    content.append(navbar);
})();

const createHome = () => {
    const createHero = () => {
        const heroSection = createElement("div", "hero-section", 0, 0, "");
        const heroBg = createElement("img", 0, "src", "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "");

        heroSection.append(heroBg)
        content.append(createHero);
    };

    createHero();
}

createHome();

function createElement (elName, elClass, elAttrSet, elAttrValue, elText) {
    const el = document.createElement(elName);
    if (elClass) el.classList.add(elClass)
    if (elAttrSet && elAttrValue) el.setAttribute(elAttrSet, elAttrValue);
    if (elText) el.textContent = elText;
    return el;
}


