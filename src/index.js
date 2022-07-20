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

    const createHero = (() => {
        const heroSection = createElement("div", "hero-section", 0, 0, "");
        const heroBg = createElement("div", "hero-bg", 0, 0, "");
        const heroBgImg = createElement("img", 0, "src", "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "");

        const heroContent = createElement("div", "hero-content", 0, 0, "");
        const heroHeader = createElement("h1", "hero-header", 0, 0, "The Best Coffee In Town!");
        const heroSub = createElement("h2", "hero-sub", 0, 0, "Heat up the cold rainy season with our freshly brewed selection, brought to you by High-Co. Coffees");
        const heroBtn = createElement("button", "hero-btn", 0, 0, "Order Now");

        heroSection.append(heroBg);
        heroBg.append(heroBgImg);
    
        heroContent.append(heroHeader, heroSub, heroBtn);
        heroSection.append(heroContent);

        content.append(heroSection);
    })();

    const createFeature = (() => {
        const featureSection = createElement("div", "feature-section", 0, 0, "");

        const featureLeft = createElement("div", "feature-left", 0, 0, "");
        const fLeft1 = createElement("div", "f-left1", 0, 0, "");
        const fLeftHeader = createElement("h3", "fleft-header", 0, 0, "Order Whenever, Wherever, with the App!")
        const fLeftPara = createElement("p", "fleft-para", 0, 0, "Download the High-Co. Delivery App on IOS and Android, and enjoy our coffee 24/7.");
        const fLeft2 = createElement("div", "f-left2", 0, 0,"");
        const fLeftImg = createElement("img", 0, "src", "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg", "");

        const featureRight = createElement("div", "feature-right", 0, 0, "");
        const fRight1 = createElement("div", "f-right1", 0, 0, "");
        const fRightImg = createElement("img", 0, "src", "https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_960_720.jpg", "");
        const fRight2 = createElement("div", "f-right2", 0, 0, "");
        const fRightHeader = createElement("h3", "fright-header", 0, 0, "Best Brew. Best Beans.")
        const fRightPara = createElement("p", "fright-para", 0, 0, "We ensure that you'll get the best coffee bean quality on every brew and every order.");

        fLeft1.append(fLeftHeader, fLeftPara);
        fLeft2.append(fLeftImg);
        featureLeft.append(fLeft1, fLeft2);

        fRight1.append(fRightImg);
        fRight2.append(fRightHeader, fRightPara);
        featureRight.append(fRight1, fRight2);
        
        featureSection.append(featureLeft, featureRight);
        content.append(featureSection);
    })();
}

createHome();

function createElement (elName, elClass, elAttrSet, elAttrValue, elText) {
    const el = document.createElement(elName);
    if (elClass) el.classList.add(elClass)
    if (elAttrSet && elAttrValue) el.setAttribute(elAttrSet, elAttrValue);
    if (elText) el.textContent = elText;
    return el;
}


