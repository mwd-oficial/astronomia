var swiper = new Swiper(".slide-content", {
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

var corpo = document.getElementById("corpo")
setTimeout(() => {
    corpo.style.animation = "fundoanimado 30s linear infinite"
}, 1000)

function carregando() {
    setTimeout(() => {
        document.getElementById("pcarregar").style.display = "none"
        document.getElementById("carregar").style.display = "none"
        document.getElementById("bcarregar").style.display = "block"
    }, 1000);
}

function ace() {
    var bcarregar = document.getElementById("bcarregar")
    var conteudo = document.getElementById("conteudo")
    var carregabox = document.getElementById("carregabox")
    podcastAudio.volume = .3
    bcarregar.classList.add("bcarregarOnClick")
    if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(() => {
            conteudo.style.display = "block"
            carregabox.style.display = "none"
            podcastAudio.play()
        }, 1000)
        setTimeout(() => {
            bcarregar.classList.remove("bcarregarOnClick")
        }, 500)
    } else {
        conteudo.style.display = "block"
        carregabox.style.display = "none"
        podcastAudio.play()

    }

}

var podcastAudio = document.getElementById('podcast-audio')
var playBtn = document.getElementById('podcast-play')
var pauseBtn = document.getElementById('podcast-pause')
var playShow = function () {
    playBtn.classList.add("podOnClick")
    if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(() => {
            podcastAudio.play()
            playBtn.style.display = "none"
            pauseBtn.style.display = "inline-block"
        }, 1000);
        setTimeout(() => {
            playBtn.classList.remove("podOnClick")
        }, 500)
    } else {
        podcastAudio.play()
        playBtn.style.display = "none"
        pauseBtn.style.display = "inline-block"

    }
}

var pauseShow = function () {
    pauseBtn.classList.add("podOnClick")
    if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(() => {
            podcastAudio.pause()
            playBtn.style.display = "inline-block"
            pauseBtn.style.display = "none"
        }, 1000);
        setTimeout(() => {
            pauseBtn.classList.remove("podOnClick")
        }, 500);
    } else {
        podcastAudio.pause()
        playBtn.style.display = "inline-block"
        pauseBtn.style.display = "none"

    }
}



function big() {
    var big1 = document.getElementById("big")
    var des = document.getElementsByClassName("description")[1]
    if (window.matchMedia("(max-width: 768px)").matches) {
        big1.classList.add("bigrel")
        des.classList.add("bigreldes")
        setTimeout(() => {
            window.open('html/big.html', '_blank')
        }, 1000)
        setTimeout(() => {
            big1.classList.remove("bigrel")
            des.classList.remove("bigreldes")
        }, 500)
    } else {
        window.open('html/big.html', '_blank')

    }

}


function relf() {
    var rel1 = document.getElementById("rel")
    var des = document.getElementsByClassName("description")[6]
    if (window.matchMedia("(max-width: 768px)").matches) {
        rel1.classList.add("bigrel")
        des.classList.add("bigreldes")
        setTimeout(() => {
            window.open('html/rel.html', '_blank')
        }, 1000)
        setTimeout(() => {
            rel1.classList.remove("bigrel")
            des.classList.remove("bigreldes")
        }, 500)
    } else {
        window.open('html/rel.html', '_blank')

    }

}
function com() {
    var com1 = document.getElementById("com")
    var des = document.getElementsByClassName("description")[2]
    if (window.matchMedia("(max-width: 768px)").matches) {
        com1.classList.add("comhem")
        des.classList.add("comhemdes")
        setTimeout(() => {
            window.open('html/com.html', '_blank')
        }, 1000)
        setTimeout(() => {
            com1.classList.remove("comhem")
            des.classList.remove("comhemdes")
        }, 500)
    } else {
        window.open('html/com.html', '_blank')

    }

}
function hem() {
    var hem1 = document.getElementById("hem")
    var des = document.getElementsByClassName("description")[7]
    if (window.matchMedia("(max-width: 768px)").matches) {
        hem1.classList.add("comhem")
        des.classList.add("comhemdes")
        setTimeout(() => {
            window.open('html/hem.html', '_blank')
        }, 1000)
        setTimeout(() => {
            hem1.classList.remove("comhem")
            des.classList.remove("comhemdes")
        }, 500)
    } else {
        window.open('html/hem.html', '_blank')

    }

}
function pla() {
    var pla1 = document.getElementById("pla")
    var des = document.getElementsByClassName("description")[3]
    if (window.matchMedia("(max-width: 768px)").matches) {
        pla1.classList.add("plalua")
        des.classList.add("plaluades")
        setTimeout(() => {
            window.open('html/pla.html', '_blank')
        }, 1000)
        setTimeout(() => {
            pla1.classList.remove("plalua")
            des.classList.remove("plaluades")
        }, 500)
    } else {
        window.open('html/pla.html', '_blank')

    }

}
function lua() {
    var lua1 = document.getElementById("lua")
    var des = document.getElementsByClassName("description")[8]
    if (window.matchMedia("(max-width: 768px)").matches) {
        lua1.classList.add("plalua")
        des.classList.add("plaluades")
        setTimeout(() => {
            window.open('html/lua.html', '_blank')
        }, 1000)
        setTimeout(() => {
            lua1.classList.remove("plalua")
            des.classList.remove("plaluades")
        }, 500)
    } else {
        window.open('html/lua.html', '_blank')

    }

}
function ast() {
    var ast1 = document.getElementById("ast")
    var des = document.getElementsByClassName("description")[4]
    if (window.matchMedia("(max-width: 768px)").matches) {
        ast1.classList.add("astecl")
        des.classList.add("astecldes")
        setTimeout(() => {
            window.open('html/ast.html', '_blank')
        }, 1000)
        setTimeout(() => {
            ast1.classList.remove("astecl")
            des.classList.remove("astecldes")
        }, 500)
    } else {
        window.open('html/ast.html', '_blank')

    }

}
function eclf() {
    var ecl1 = document.getElementById("ecl")
    var des = document.getElementsByClassName("description")[9]
    if (window.matchMedia("(max-width: 768px)").matches) {
        ecl1.classList.add("astecl")
        des.classList.add("astecldes")
        setTimeout(() => {
            window.open('html/ecl.html', '_blank')
        }, 1000)
        setTimeout(() => {
            ecl1.classList.remove("astecl")
            des.classList.remove("astecldes")
        }, 500)
    } else {
        window.open('html/ecl.html', '_blank')

    }

}
function mov() {
    var mov1 = document.getElementById("mov")
    var des = document.getElementsByClassName("description")[5]
    if (window.matchMedia("(max-width: 768px)").matches) {
        mov1.classList.add("movinf")
        des.classList.add("movinfdes")
        setTimeout(() => {
            window.open('html/mov.html', '_blank')
        }, 1000)
        setTimeout(() => {
            mov1.classList.remove("movinf")
            des.classList.remove("movinfdes")
        }, 500)
    } else {
        window.open('html/mov.html', '_blank')

    }

}
function inf() {
    var inf1 = document.getElementById("inf")
    var des = document.getElementsByClassName("description")[10]
    if (window.matchMedia("(max-width: 768px)").matches) {
        inf1.classList.add("movinf")
        des.classList.add("movinfdes")
        setTimeout(() => {
            window.open('html/inf.html', '_blank')
        }, 1000)
        setTimeout(() => {
            inf1.classList.remove("movinf")
            des.classList.remove("movinfdes")
        }, 500)
    } else {
        window.open('html/inf.html', '_blank')
    }

}

function logof() {
    var logo = document.getElementById("logo")
    logo.classList.add("logoOnClick")
    if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(() => {
            window.open('https://github.com/mwd-oficial', '_blank')
        }, 1000)
        setTimeout(() => {
            logo.classList.remove("logoOnClick")
        }, 1050)
    } else {
        window.open('https://github.com/mwd-oficial', '_blank')
    }


}

