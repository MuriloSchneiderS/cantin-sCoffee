/*MAIN*/
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready)
}else{
  ready()
}
function ready(){
  updateTotal();
  const menos = document.getElementsByName("menos"), 
  quantidade = document.getElementsByName("quantidade"), 
  mais = document.getElementsByName("mais");
  let quarray=[];
  for(let i=0; i<menos.length; i++){
    let men = menos[i], mai = mais[i], qua = quantidade[i], q = quarray[i];
    q = 1;
    mai.addEventListener("click", ()=>{
      q++;
      qua.innerText = q;
      return updateTotal();
    });
    men.addEventListener("click", ()=>{
      q--;
      (q<1) ? removeProduct(qua) : qua.innerText = q;
      return updateTotal();
    });
  }
}
/*FUNÇÕES*/
/*Sacola*/
function sacolaShow(){
  let sacola = document.querySelector(".pop-carrinho");
  sacola.classList.toggle("open")
  blurBg();
}
function blurBg(){
  let bg = document.getElementById("bg");
  bg.classList.toggle("blur");
}
function removeProduct(quantia){
  /*remover <li>..</li> do HTML*/
  quantia.parentElement.parentElement.parentElement.parentElement.remove();
}
function updateTotal(){
  const cartProducts = document.getElementsByClassName("carrinho-item");
  let totalAmount = 0;
  for (let i=0; i<cartProducts.length; i++){
    const productPrice = cartProducts[i].getElementsByClassName("item-preco")[0].innerText.replace(",","."),
    productQuantity = cartProducts[i].getElementsByClassName("quantidade")[0].innerText;
    
    totalAmount += (productPrice * productQuantity);
  }
  totalAmount = totalAmount.toFixed(2);
  totalAmount = totalAmount.replace(".",",");
  document.getElementsByClassName("carrinho-total")[0].innerText = totalAmount;
}
/*Menu Mobile*/
function menuShow(){
  let mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu.classList.contains("open")){
    mobileMenu.classList.remove("open");
    document.querySelector(".icon").src = "images/menu-icone.png";
  } else {
    mobileMenu.classList.add("open");
    document.querySelector(".icon").src = "images/menu-close-icon.png";
  }
}
/*SWIPERJS*/
var swiperRecomendados = new Swiper('.slider-recomendados', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-recomendados',
      prevEl: '.swiper-button-prev-recomendados',
    },
    on: {
      resize: function () {
        swiperRecomendados.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperBebidas = new Swiper('.slider-bebidas', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-bebidas',
      prevEl: '.swiper-button-prev-bebidas',
    },
    on: {
      resize: function () {
        swiperBebidas.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperLanches = new Swiper('.slider-lanches', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-lanches',
      prevEl: '.swiper-button-prev-lanches',
    },
    on: {
      resize: function () {
        swiperLanches.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});
var swiperDoces = new Swiper('.slider-doces', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next-doces',
      prevEl: '.swiper-button-prev-doces',
    },
    on: {
      resize: function () {
        swiperDoces.changeDirection(getDirection());
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 4,
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}