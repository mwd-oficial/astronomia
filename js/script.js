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

function carregando() {
    setTimeout(() => {
        document.getElementById("pcarregar").style.display = "none"
        document.getElementById("carregar").style.display = "none"
        document.getElementById("bcarregar").style.display = "block"
    }, "1000");
}

var audio = document.getElementById("myAudio");
function ace() {
    document.getElementById("conteudo").style.display = "block"
    document.getElementById("carregabox").style.display = "none"
    audio.volume = .3
    audio.play()
}

var corpo = document.getElementById("corpo")
setTimeout(() => { 
    corpo.style.animation = "fundoanimado 30s linear infinite"
}, "1000")

