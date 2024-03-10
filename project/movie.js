const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorALL(".container,.movie-list-title,navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener.addEventListener("click",()=>{
    items.forEach(item=> {
        item.classList.toggle("active")
        
    });
})
console.log("helo");

