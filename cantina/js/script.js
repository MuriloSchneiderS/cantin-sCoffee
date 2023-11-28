/*MAIN*/
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready)
}else{
  ready()
}
function ready(){
  const searchbar = document.getElementsByClassName("barra-pesquisa")[0],
  items = document.getElementsByClassName("add-button");
  searchbar.addEventListener("keyup", ()=>{
    let input = searchbar.value.toLowerCase(),
    nomes=[];
    if(input=="")
      return;/*cancela a busca quando o usuário apaga a pesquisa*/
    for(let i=0; i<items.length; i++){
      nomes[i]=items[i].id.replace("-"," ")/*transforma o id em um nome simples para localizar a pesquisa*/
      if(nomes[i].includes(input)){
        document.location.hash = `#${items[i].id}`;/*redireciona para o primeiro item encontrado semelhante à pesquisa*/
        return document.location.hash = `#${searchbar.id}`;/*redireciona o foco de volta para a barra de pesquisa*/
      }
    }
  });

  var totalAmount = "0,00";
  updateTotal();

  const mais = document.getElementsByName("mais"), 
  menos = document.getElementsByName("menos");
  for(let i=0; i<menos.length; i++){
    mais[i].addEventListener("click", maisClick);
    menos[i].addEventListener("click", menosClick);
  }

  const addToCartButtons = document.getElementsByClassName("add-button");
  for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", (Event)=>{
      const addBtn = Event.target;/*botão clicado*/
      const allInfos = addBtn.parentElement.parentElement.parentElement.parentElement,/*todas as informações do card*/
      thisInfos = addBtn.parentElement;/*apenas informações locaisdo card baseado no botão clicado*/
      
      const images = allInfos.getElementsByClassName("card-img")[0].src,
      imagesAlt = allInfos.getElementsByClassName("card-img")[0].alt,
      titles = allInfos.getElementsByClassName("nome")[0].innerText,
      descriptions = allInfos.getElementsByClassName("descricao")[0].innerText,
      btnId = thisInfos.getElementsByClassName("add-button")[0].id;
      
      const prices = thisInfos.getElementsByClassName("menu-card-preco")[0].innerText;
      let types = thisInfos.getElementsByClassName("menu-card-tipo")[0];
      types==undefined ? types="" : types=types.innerText;/*testa se há multiplas opções - tipos é undefined -*/
      
      let cartItems = document.getElementsByClassName("carrinho-item");
      for(let c=0; c<cartItems.length; c++){
        if(cartItems[c].id == btnId){
          cartItems[c].getElementsByClassName("quantidade")[0].innerText++;
          return updateTotal();
        }
      }
      let newCartProduct = document.createElement("li");
      newCartProduct.classList.add("carrinho-item");
      newCartProduct.setAttribute("id", btnId);
      newCartProduct.innerHTML = 
      `
      <div class="imagem"> 
          <img src="${images}" alt="${imagesAlt}"> 
      </div>
      <div class="info"> 
          <h4 class="cart-title">${titles}</h4>
          <div class="detalhes">
              <h5 class="tipo">${types}</h5>
              <p>${descriptions}</p>
          </div>
          <div class="preco"> 
              <p>R$<span class="item-preco">${prices}</span></p>
              <div class="contador"> 
                <span name="menos" class="bx bx-minus menos" title="remover itens"></span>
                <span name="quantidade" class="quantidade">1</span>
                <span name="mais" class="bx bx-plus mais" title="adicionar itens"></span>
              </div>
          </div>
      </div>
      `;
      const cartUl = document.querySelector(".carrinho ul");
      cartUl.append(newCartProduct);
      updateTotal();
      newCartProduct.getElementsByClassName("mais")[0].addEventListener("click", maisClick);
      newCartProduct.getElementsByClassName("menos")[0].addEventListener("click", menosClick);
    });
  }

  document.getElementsByClassName("finalizar")[0].addEventListener("click", makePurchase)
}
/*FUNÇÕES*/
/*Sacola*/
function maisClick(Event){
  Event.target.parentElement.getElementsByClassName("quantidade")[0].innerText++;
  return updateTotal();
}
function menosClick(Event){
  let qua = Event.target.parentElement.getElementsByClassName("quantidade")[0];
  let q = qua.innerText;
  q--;
  (q<1) ? removeProduct(qua) : qua.innerText = q;
  return updateTotal();
}
function removeProduct(quantia){
  /*remover <li>..</li> do HTML*/
  quantia.parentElement.parentElement.parentElement.parentElement.remove();
}
function updateTotal(){
  totalAmount = 0;
  const cartProducts = document.getElementsByClassName("carrinho-item");
  for (let i=0; i<cartProducts.length; i++){
    const productPrice = cartProducts[i].getElementsByClassName("item-preco")[0].innerText.replace(",","."),
    productQuantity = cartProducts[i].getElementsByClassName("quantidade")[0].innerText;
    
    totalAmount += (productPrice * productQuantity);
  }
  totalAmount = totalAmount.toFixed(2);
  totalAmount = totalAmount.replace(".",",");
  document.getElementsByClassName("carrinho-total")[0].innerText = totalAmount;
}

function makePurchase(){
  let nomeCliente = document.getElementsByClassName("input-cliente")[0].value.replace(/\s+/g,"");
  if(totalAmount=="0,00")
    return alert("Seu carrinho está vazio!");
  if(nomeCliente=="")
    return alert("É necessário preencher o campo de texto com seu nome!");
  return alert(
    `
      Obrigado, ${nomeCliente}. Seu pedido foi realizado!
      Compareça à Cantin's Coffee para receber e pagar pelo seu pedido.
      Valor Total: R$${totalAmount}.
    `
  );
}

const sacola = document.querySelector(".pop-carrinho"),
ajuda = document.querySelector(".pop-ajuda");
function sacolaShow(){
  if(ajuda.classList.contains("open"))
    ajudaShow();
  sacola.classList.toggle("open")
  return blurBg();
}
function ajudaShow(){
  ajuda.classList.toggle("open")
  return blurBg();
}
function blurBg(){
  let bg = document.getElementById("bg");
  bg.classList.toggle("blur");
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