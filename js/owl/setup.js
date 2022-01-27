$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        /*Quantos items será mostrado dependendo do tamanho da tela*/
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})