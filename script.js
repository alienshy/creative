window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        document.querySelector("nav").style.backgroundColor = "rgba(255,255,255,1)"
        document.querySelector("#a").style.color = "black"
        document.querySelector("#sd").style.color = "black"
        document.querySelector("#sf").style.color = "black"
        document.querySelector("#sg").style.color = "black"
        document.querySelector("#sh").style.color = "black"
    
        // document.querySelector("#a").style.color = "black"
    }
    else{
        document.querySelector("nav").style.backgroundColor = "rgba(0,0,0,0)"
        document.querySelector("#a").style.color = "white"
        document.querySelector("#sd").style.color = "white"
        document.querySelector("#sf").style.color = "white"
        document.querySelector("#sg").style.color = "white"
        document.querySelector("#sh").style.color = "white"
       
    }
})