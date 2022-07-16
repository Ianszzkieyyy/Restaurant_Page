const content = document.querySelector('#content');

const createNav = (() => {
    const navBar = document.createElement('nav');

    const nav_Logo = document.createElement('div');
    nav_Logo.classList.add("nav-logo");
    nav_Logo.textContent = "High Co.";
    
    const navL_1 = document.createElement('a');
    navL_1.setAttribute("href", "index.html");
    navL_1.textContent = "Home";

    const navL_2 = document.createElement('a');
    navL_2.setAttribute("href", "index.html");
    navL_2.textContent = "Menu";

    const navL_3 = document.createElement('a');
    navL_3.setAttribute("href", "index.html");
    navL_3.textContent = "Order";

    const navL_4 = document.createElement('a');
    navL_4.setAttribute("href", "index.html");
    navL_4.textContent = "About Us";

    navBar.append(nav_Logo, navL_1, navL_2, navL_3, navL_4);

    content.append(navBar);
})();

const createHome = () => {

}

