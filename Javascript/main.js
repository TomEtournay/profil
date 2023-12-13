const burger = document.querySelector('#burger');
const rect = document.querySelectorAll('#burger rect');
const menu = document.querySelector('#nav-responsive');

var boolean = 0;


burger.addEventListener("click", () => {

    boolean = 1;

    menu.classList.toggle("nav-translate");

    rect.forEach((rects) => {
        rects.classList.toggle("black");
    });
    
});


document.addEventListener("scroll", () =>{
    if(boolean === 1){
        menu.classList.remove("nav-translate")

        rect.forEach((rects) => {
            rects.classList.remove("black");
        });
    }
})

