window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        document.querySelector("nav").style.backgroundColor = "rgba(255,255,255,1)"
        document.querySelector("nav").a.style.color = "black"
    }
    else{
        document.querySelector("nav").style.backgroundColor = "rgba(0,0,0,0)"
        document.querySelector("nav").style.color.a = "rgba()"
    }
})