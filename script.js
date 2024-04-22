const navItems = document.querySelectorAll(".navitem");
const btn = document.getElementsByTagName("button");

navItems.forEach(function(navitem){
    navitem.addEventListener("mouseenter", function(){
        navitem.style.borderBottom = "3px solid #000";
    });

    navitem.addEventListener("mouseout", function(){
        navitem.style.borderBottom = "none";
    })
});
    var navHeads= document.getElementById("header");


    function toggleNavbars(){
        if(window.scrollY < 600){
            navHeads.style.backgroundColor = '#f0d6cb';
            navHeads.style.transition = "0.5s";
        } else if(window.scrollY < 800){
            navHeads.style.backgroundColor = "#fff";
            navHeads.style.transition = "0.5s";
        }else if(window.scrollY < 1200){
            navHeads.style.backgroundColor = "#f0d6cb";
            navHeads.style.transition = "0.5s";
        }
        else{
            navHeads.style.backgroundColor = "#fff";
        }
}

    window.addEventListener('scroll', toggleNavbars);