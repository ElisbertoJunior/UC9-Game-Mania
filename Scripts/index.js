
//$("#icon").click(() => {
//    $("#nav").slideToggle("slow");
//})


let icon = document.querySelector('#icon');

icon.addEventListener('click', ()=>{ 

    let nav = document.querySelector('#nav'); 

    if(nav.style.display != "flex"){
        return nav.style.display = "flex";
    } else {
        return nav.style.display = "none";
    }
    
});
