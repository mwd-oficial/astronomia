function fechar() {
    var setavoltar = document.getElementById("setavoltar")
    if (window.matchMedia("(max-width: 768px)").matches) {
        setavoltar.classList.add("setavoltarOnClick")
        setTimeout(() => {
            window.open('', '_self', '').close()
        }, 1000);
        setTimeout(() => {
            setavoltar.classList.remove("setavoltarOnClick")
        }, 500);
    } else {
        window.open('', '_self', '').close()
    }
}

/*let imgperdiv = document.getElementById("imgperdiv")
let imgpernor = document.getElementById("imgpernor")
let imgperp = document.getElementById("imgperp")
function ampliar() {
    let imgpernordiv = document.getElementById("imgpernordiv")
    if (window.matchMedia("(max-width: 768px)").matches) {
        imgpernordiv.classList.add("imgpernordivOnClick")
        setTimeout(() => {
            imgperdiv.style.display = "flex"
            imgpernor.style.display = "none"
            imgperp.style.display = "none"
            
        }, 1000)
        setTimeout(() => {
            imgpernordiv.classList.remove("imgpernordivOnClick")
        }, 500)
    } else {
        imgperdiv.style.display = "flex"
        imgpernor.style.display = "none"
        imgperp.style.display = "none"
    }
}
function minimizar() {
    let imgperampdiv = document.getElementById("imgperampdiv")
    if (window.matchMedia("(max-width: 768px)").matches) {
        imgperampdiv.classList.add("imgperampdivOnClick")
        setTimeout(() => {
            imgperdiv.style.display = "none"
            imgperp.style.display = "inline-block"
            imgpernor.style.display = "inline-block"
        }, 1000)
        setTimeout(() => {
            imgperampdiv.classList.remove("imgperampdivOnClick")
        }, 500)
    } else {
        imgperdiv.style.display = "none"
        imgperp.style.display = "inline-block"
        imgpernor.style.display = "inline-block"
       
    }
}*/

let imgperdiv = document.getElementById("imgperdiv")
let imgpernor = document.getElementById("imgpernor")
let imgperp = document.getElementById("imgperp")
let imgperdiv2 = document.getElementById("imgperdiv2")
let imgpernor2 = document.getElementById("imgpernor2")
let imgperp2 = document.getElementById("imgperp2")
let imgperdiv3 = document.getElementById("imgperdiv3")
let imgpernor3 = document.getElementById("imgpernor3")
let imgperp3 = document.getElementById("imgperp3")
let imgperdiv4 = document.getElementById("imgperdiv4")
let imgpernor4 = document.getElementById("imgpernor4")
let imgperp4 = document.getElementById("imgperp4")

let imgpernordiv = document.getElementById("imgpernordiv")
function ampliar() {
        if (window.matchMedia("(max-width: 768px)").matches) {   
        imgpernordiv.classList.add("imgpernordivOnClick")
        setTimeout(() => {
            imgperdiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            imgpernordiv.style.opacity = 0
            imgperdiv.style.opacity = 1
            
        }, 1000)
        setTimeout(() => {
            imgpernordiv.classList.remove("imgpernordivOnClick")
        }, 500)
    } else {
        imgperdiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        imgpernordiv.style.opacity = 0
        imgperdiv.style.opacity = 1
        
        
    }
   
}
function minimizar() {
    let imgperampdiv = document.getElementById("imgperampdiv")
    if (window.matchMedia("(max-width: 768px)").matches) {   
        imgperampdiv.classList.add("imgperampdivOnClick")
        setTimeout(() => {
            imgperdiv.style.display = "none"
            document.body.style.overflow = "visible"
            imgpernordiv.style.opacity = 1
            imgperdiv.style.opacity = 0
            
        }, 1000)
        setTimeout(() => {
            imgperampdiv.classList.remove("imgperampdivOnClick")
        }, 500)
    } else {
        imgperdiv.style.display = "none"
        document.body.style.overflow = "visible"
        imgpernordiv.style.opacity = 1
        imgperdiv.style.opacity = 0
    }
   
}
let imgpernordiv2 = document.getElementById("imgpernordiv2")
function ampliar2() {
        if (window.matchMedia("(max-width: 768px)").matches) {       
        imgpernordiv2.classList.add("imgpernordivOnClick")
        setTimeout(() => {
            imgperdiv2.style.display = "flex"
            document.body.style.overflow = "hidden"
            imgpernordiv2.style.opacity = 0
            imgperdiv2.style.opacity = 1
           
            
            
        }, 1000)
        setTimeout(() => {
            imgpernordiv2.classList.remove("imgpernordivOnClick")
        }, 500)
    } else {
        imgperdiv2.style.display = "flex"
        document.body.style.overflow = "hidden"
        imgpernordiv2.style.opacity = 0
            imgperdiv2.style.opacity = 1
        

    }
  
}
function minimizar2() {
    let imgperampdiv2 = document.getElementById("imgperampdiv2")
        if (window.matchMedia("(max-width: 768px)").matches) {   
        imgperampdiv2.classList.add("imgperampdivOnClick")
        setTimeout(() => {
            imgperdiv2.style.display = "none"
            document.body.style.overflow = "visible"
             imgpernordiv2.style.opacity = 1
        imgperdiv2.style.opacity = 0
           

        }, 1000)
        setTimeout(() => {
            imgperampdiv2.classList.remove("imgperampdivOnClick")
        }, 500)
    } else {
        imgperdiv2.style.display = "none"
        document.body.style.overflow = "visible"
         imgpernordiv2.style.opacity = 1
        imgperdiv2.style.opacity = 0
       

    }
   
}
let imgpernordiv3 = document.getElementById("imgpernordiv3")
function ampliar3() {
        if (window.matchMedia("(max-width: 768px)").matches) {       
        imgpernordiv3.classList.add("imgpernordivOnClick")
        setTimeout(() => {
            imgperdiv3.style.display = "flex"
             document.body.style.overflow = "hidden"
             imgpernordiv3.style.opacity = 0
            imgperdiv3.style.opacity = 1
           
            

        }, 1000)
        setTimeout(() => {
            imgpernordiv3.classList.remove("imgpernordivOnClick")
        }, 500)
    } else {
        imgperdiv3.style.display = "flex"
         document.body.style.overflow = "hidden"
         imgpernordiv3.style.opacity = 0
            imgperdiv3.style.opacity = 1
        
    }
    
}
function minimizar3() {
    let imgperampdiv3 = document.getElementById("imgperampdiv3")
        if (window.matchMedia("(max-width: 768px)").matches) {   
        imgperampdiv3.classList.add("imgperampdivOnClick")
        setTimeout(() => {
            imgperdiv3.style.display = "none"
            document.body.style.overflow = "visible"
             imgpernordiv3.style.opacity = 1
        imgperdiv3.style.opacity = 0
            
     
            
        }, 1000)
        setTimeout(() => {
            imgperampdiv3.classList.remove("imgperampdivOnClick")
        }, 500)
    } else {
        imgperdiv3.style.display = "none"
        document.body.style.overflow = "visible"
         imgpernordiv3.style.opacity = 1
        imgperdiv3.style.opacity = 0
 

    }
    
}
let imgpernordiv4 = document.getElementById("imgpernordiv4")
function ampliar4() {
        if (window.matchMedia("(max-width: 768px)").matches) {       
        imgpernordiv4.classList.add("imgpernordivOnClick")
        setTimeout(() => {
            imgperdiv4.style.display = "flex"
             document.body.style.overflow = "hidden"
             imgpernordiv4.style.opacity = 0
            imgperdiv4.style.opacity = 1
           
            
            
        }, 1000)
        setTimeout(() => {
            imgpernordiv4.classList.remove("imgpernordivOnClick")
        }, 500)
    } else {
        imgperdiv4.style.display = "flex"
         document.body.style.overflow = "hidden"
         imgpernordiv4.style.opacity = 0
            imgperdiv4.style.opacity = 1
      
    }
   
}
function minimizar4() {
    let imgperampdiv4 = document.getElementById("imgperampdiv4")
    if (window.matchMedia("(max-width: 768px)").matches) {   
        imgperampdiv4.classList.add("imgperampdivOnClick")
        setTimeout(() => {
            imgperdiv4.style.display = "none"
            document.body.style.overflow = "visible"
             imgpernordiv4.style.opacity = 1
        imgperdiv4.style.opacity = 0
           
        }, 1000)
        setTimeout(() => {
            imgperampdiv4.classList.remove("imgperampdivOnClick")
        }, 500)
    } else {
        imgperdiv4.style.display = "none"
        document.body.style.overflow = "visible"
         imgpernordiv4.style.opacity = 1
        imgperdiv4.style.opacity = 0
       
    }
    
}


function logof() {
    var logo = document.getElementById("logo")
    logo.classList.add("logoOnClick")
        if (window.matchMedia("(max-width: 768px)").matches) {       
        setTimeout(() => {
            window.open('https://github.com/mwd-oficial', '_blank')
        }, 1000);
        setTimeout(() => {
            logo.classList.remove("logoOnClick")
        }, 1050);
    } else {
        window.open('https://github.com/mwd-oficial', '_blank')
    }
}