// Nav Toggler
let TogglerIcon = document.querySelector(".nav-icon");
let Nav = document.querySelector("nav");

TogglerIcon.onclick = function(){
    Nav.classList.toggle("show");
};

// Icon Up
let IconUp =document.querySelector(".icon-up");
window.onscroll = function(){
    if(this.window.scrollY >= 450){
        IconUp.style.right = "30px";
    }else{
        IconUp.style.right = "-100px";
    }
}
IconUp.onclick = function(){
    window.scrollTo({
        top: 0,
    })
}
// Shofel Images

let MyUl = document.querySelectorAll("#my-ul li");
let Projects = document.querySelectorAll(".our-project");


MyUl.forEach((li)=>{
    li.addEventListener("click", function (){
        MyUl.forEach((li)=>{
            li.classList.remove("work");
            this.classList.add("work");
        });
    });
    li.addEventListener("click",function (){
        Projects.forEach((img)=>{
            img.style.display = "none";
        });
        document.querySelectorAll(this.dataset.cat).forEach((img)=>{
           img.style.display = "block";
       });
    });
});
