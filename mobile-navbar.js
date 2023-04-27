class MobileNavbar{
    constructor(mobilemenu, navList, navLinks){
        this.mobilemenu = document.querySelector(`.${mobilemenu}`);
        this.navList = document.querySelector(`.${navList}`);
        this.navLinks = document.querySelectorAll(`${navLinks}`);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index)=> {link.style.animation
        ?(link.style.animation = "")
        : (link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobilemenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobilemenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobilemenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    "mobile-menu",
    "nav-list",
    "nav-links li"
);
mobileNavbar.init();