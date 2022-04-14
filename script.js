var connectButton = document.getElementById("connect");
var productButton = document.getElementById("product");
var companyButton = document.getElementById('company');

var companyMenu = document.getElementById("company-menu");
var companyArrow = document.getElementById("arrow-company");

var productMenu = document.getElementById("product-menu");
var productArrow = document.getElementById("arrow-product");

var connectMenu = document.getElementById("connect-menu");
var connectArrow = document.getElementById("arrow-connect");

productButton.addEventListener('click', function(){

    if(getComputedStyle(productMenu).display != "flex"){
        productMenu.style.display = "flex"
        productArrow.style.transform = "rotate(180deg)"
        companyMenu.style.display = "none"
        connectMenu.style.display = "none"
        companyArrow.style.transform = "rotate(0deg)"
        connectArrow.style.transform = "rotate(0deg)"
    }
    else{
        productMenu.style.display = "none"
        productArrow.style.transform = "rotate(0deg)"
    }
})

companyButton.addEventListener('click', function(){

    if(getComputedStyle(companyMenu).display != "flex"){
        companyMenu.style.display = "flex"
        companyArrow.style.transform = "rotate(180deg)"
        productMenu.style.display = "none"
        productArrow.style.transform = "rotate(0deg)"
        connectMenu.style.display = "none"
        connectArrow.style.transform = "rotate(0deg)"
    }
    else{
        companyMenu.style.display = "none"
        companyArrow.style.transform = "rotate(0deg)"
    }
})

connectButton.addEventListener("click", function(){

    if(getComputedStyle(connectMenu).display != "flex"){
        connectMenu.style.display = "flex"
        connectArrow.style.transform = "rotate(180deg)"
        productMenu.style.display = "none"
        productArrow.style.transform = "rotate(0deg)"
        companyMenu.style.display = "none"
        companyArrow.style.transform = "rotate(0deg)"
    }
    else{
        connectMenu.style.display = "none"
        connectArrow.style.transform = "rotate(0deg)"
    }
})

var buttonOpen = document.getElementById("hamburger")
var buttonClose = document.getElementById("close")
var menuBarMobile = document.getElementsByClassName("menu-mobile")

buttonOpen.addEventListener("click", function(){
    buttonOpen.style.display = "none";
    buttonClose.style.display = "flex";
    menuBarMobile[0].style.display = "flex"
})

buttonClose.addEventListener("click", function(){
    buttonClose.style.display = "none";
    buttonOpen.style.display = "flex";
    menuBarMobile[0].style.display = "none"
})

var connectButtonMobile = document.getElementById("connect-mobile");
var productButtonMobile = document.getElementById("product-mobile");
var companyButtonMobile = document.getElementById('company-mobile');

var companyMenuMobile = document.getElementById("company-menu-mobile");
var companyArrowMobile = document.getElementById("arrow-company-mobile");

var productMenuMobile = document.getElementById("product-menu-mobile");
var productArrowMobile = document.getElementById("arrow-product-mobile");

var connectMenuMobile = document.getElementById("connect-menu-mobile");
var connectArrowMobile = document.getElementById("arrow-connect-mobile");

var designedTitle = document.getElementById("designed-title");
var editorMobile = document.getElementById("editor-mobile");
var firstContainer = document.getElementsByClassName("first-container");

productButtonMobile.addEventListener('click', function(){

    if(getComputedStyle(productMenuMobile).display != "flex"){
        productMenuMobile.style.display = "flex"
        productArrowMobile.style.transform = "rotate(180deg)"
        companyMenuMobile.style.display = "none"
        connectMenuMobile.style.display = "none"
        companyArrowMobile.style.transform = "rotate(0deg)"
        connectArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "17cm"
        designedTitle.style.marginTop = "5cm"
        editorMobile.style.marginTop = "5cm"
        firstContainer.style.height = "35cm"
    }
    else{
        productMenuMobile.style.display = "none"
        productArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "10.5cm"
        designedTitle.style.marginTop = "2cm"
        editorMobile.style.marginTop = "2cm"
        firstContainer.style.height = "33cm"
    }
})

companyButtonMobile.addEventListener('click', function(){

    if(getComputedStyle(companyMenuMobile).display != "flex"){
        companyMenuMobile.style.display = "flex"
        companyArrowMobile.style.transform = "rotate(180deg)"
        productMenuMobile.style.display = "none"
        productArrowMobile.style.transform = "rotate(0deg)"
        connectMenuMobile.style.display = "none"
        connectArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "16cm"
        designedTitle.style.marginTop = "4cm"
        editorMobile.style.marginTop = "4cm"
        firstContainer.style.height = "34cm"
    }
    else{
        companyMenuMobile.style.display = "none"
        companyArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "10.5cm"
        designedTitle.style.marginTop = "2cm"
        editorMobile.style.marginTop = "2cm"
        firstContainer.style.height = "33cm"
    }
})

connectButtonMobile.addEventListener("click", function(){
    if(getComputedStyle(connectMenuMobile).display != "flex"){
        connectMenuMobile.style.display = "flex"
        connectArrowMobile.style.transform = "rotate(180deg)"
        productMenuMobile.style.display = "none"
        productArrowMobile.style.transform = "rotate(0deg)"
        companyMenuMobile.style.display = "none"
        companyArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "15cm"
        designedTitle.style.marginTop = "3cm"
        editorMobile.style.marginTop = "3cm"
        firstContainer.style.height = "33cm"
    }
    else{
        connectMenuMobile.style.display = "none"
        connectArrowMobile.style.transform = "rotate(0deg)"
        menuBarMobile[0].style.height = "10.5cm"
        designedTitle.style.marginTop = "2cm"
        editorMobile.style.marginTop = "2cm"
        firstContainer.style.height = "33cm"
    }
})