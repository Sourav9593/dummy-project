const search = document.getElementById("search")
const input = document.getElementById("input")
const menu = document.getElementById("menu")
const sideMenu = document.getElementById("side-menu")

search.addEventListener("click" ,()=>{
    if(search.classList.contains("fa-magnifying-glass")){
        search.classList.remove("fa-magnifying-glass");
        search.classList.add("fa-xmark");
        input.style.display="block";
    }
    else if(search.classList.contains("fa-xmark")){
        search.classList.remove("fa-xmark");
        search.classList.add("fa-magnifying-glass");
        input.style.display="none";
    }
})

menu.addEventListener("click",()=>{
    if(menu.classList.contains("fa-bars")){
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
        sideMenu.style.display="block";
    }
    else if(menu.classList.contains("fa-xmark")){
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
        sideMenu.style.display="none";
    }
})