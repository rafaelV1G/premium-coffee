"use strict";


/* =====================================================
   DADOS DO SLIDER
===================================================== */

const slides = [
    {
        title: "What if your<br>website made<br><span>coffee?</span>",

        description:
            "Taste something different. Discover carefully selected coffee made for people who appreciate quality and great moments.",

        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=90",

        leftTitle:
            "Whole Coffee",

        rightTitle:
            "Fresh Coffee"
    },

    {
        title: "Good coffee<br>starts with<br><span>great beans.</span>",

        description:
            "From carefully selected beans to the perfect cup, every detail matters when creating a memorable coffee experience.",

        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=90",

        leftTitle:
            "Premium Beans",

        rightTitle:
            "Fresh Roasted"
    },

    {
        title: "Made for<br>coffee<br><span>lovers.</span>",

        description:
            "A special place for people who love coffee, good conversations and moments that deserve to be remembered.",

        image:
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=90",

        leftTitle:
            "Coffee House",

        rightTitle:
            "Special Moments"
    },

    {
        title: "Your perfect<br>cup is<br><span>waiting.</span>",

        description:
            "Explore our selection and discover your new favorite coffee, prepared with quality from beginning to end.",

        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=90",

        leftTitle:
            "Perfect Cup",

        rightTitle:
            "Premium Selection"
    }
];


/* =====================================================
   ELEMENTOS
===================================================== */

const coffeeImage = document.getElementById("coffeeImage");

const coffeeImageWrapper =
    document.getElementById("coffeeImageWrapper");

const heroTitle =
    document.getElementById("heroTitle");

const heroDescription =
    document.getElementById("heroDescription");

const leftCardTitle =
    document.getElementById("leftCardTitle");

const rightCardTitle =
    document.getElementById("rightCardTitle");

const sliderDots =
    document.getElementById("sliderDots");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");


/* =====================================================
   ESTADO
===================================================== */

let currentSlide = 0;

let autoSlide;


/* =====================================================
   CRIAR DOTS
===================================================== */

function createDots() {

    sliderDots.innerHTML = "";

    slides.forEach((slide, index) => {

        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.className = "slider-dot";

        dot.setAttribute(
            "aria-label",
            `Ir para slide ${index + 1}`
        );

        dot.addEventListener("click", () => {

            goToSlide(index);

        });

        sliderDots.appendChild(dot);

    });

}


/* =====================================================
   ATUALIZAR DOTS
===================================================== */

function updateDots() {

    const dots =
        document.querySelectorAll(".slider-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}


/* =====================================================
   TROCAR SLIDE
===================================================== */

function goToSlide(index) {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    currentSlide = index;

    const slide = slides[currentSlide];


    /*
       Começa a animação de saída
    */

    coffeeImageWrapper.classList.add("changing");


    /*
       Depois troca o conteúdo
    */

    setTimeout(() => {

        heroTitle.innerHTML =
            slide.title;

        heroDescription.textContent =
            slide.description;

        leftCardTitle.textContent =
            slide.leftTitle;

        rightCardTitle.textContent =
            slide.rightTitle;

        coffeeImage.src =
            slide.image;


        /*
           Remove a classe para fazer
           a imagem aparecer novamente
        */

        coffeeImageWrapper.classList.remove(
            "changing"
        );

    }, 350);


    updateDots();

}


/* =====================================================
   PRÓXIMO
===================================================== */

function nextSlide() {

    goToSlide(currentSlide + 1);

    restartAutoSlide();

}


/* =====================================================
   ANTERIOR
===================================================== */

function previousSlide() {

    goToSlide(currentSlide - 1);

    restartAutoSlide();

}


/* =====================================================
   SLIDER AUTOMÁTICO
===================================================== */

function startAutoSlide() {

    autoSlide =
        setInterval(() => {

            goToSlide(currentSlide + 1);

        }, 5000);

}


function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


/* =====================================================
   BOTÕES DO SLIDER
===================================================== */

nextButton.addEventListener(
    "click",
    nextSlide
);

previousButton.addEventListener(
    "click",
    previousSlide
);


/* =====================================================
   MENU MOBILE
===================================================== */

const mobileButton =
    document.getElementById("mobileButton");

const nav =
    document.getElementById("nav");


mobileButton.addEventListener(
    "click",
    () => {

        nav.classList.toggle("active");

    }
);


/*
   Fecha o menu quando clicar em algum link
*/

document.querySelectorAll(".nav a").forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("active");

            }
        );

    }
);


/* =====================================================
   PESQUISA
===================================================== */

const searchButton =
    document.getElementById("searchButton");

const searchBox =
    document.getElementById("searchBox");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");


if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            searchBox.classList.add("active");

            setTimeout(() => {

                searchInput.focus();

            }, 100);

        }
    );

}


closeSearch.addEventListener(
    "click",
    () => {

        searchBox.classList.remove("active");

    }
);


/*
   ESC fecha a pesquisa
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            searchBox.classList.contains("active")
        ) {

            searchBox.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   BOTÃO LOGIN
===================================================== */

const loginButton =
    document.getElementById("loginButton");


loginButton.addEventListener(
    "click",
    () => {

        alert(
            "Área de cadastro/login. Você pode conectar esta parte a um sistema depois."
        );

    }
);


/* =====================================================
   BOTÃO EXPLORE
===================================================== */

const exploreButton =
    document.getElementById("exploreButton");


exploreButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   CARRINHO
===================================================== */

let cart = [];


const cartButton =
    document.getElementById("cartButton");

const cartModal =
    document.getElementById("cartModal");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const toast =
    document.getElementById("toast");


/* =====================================================
   ADICIONAR PRODUTO
===================================================== */

document.querySelectorAll(".add-button").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const name =
                    button.dataset.name;

                const price =
                    Number(button.dataset.price);


                cart.push({
                    name: name,
                    price: price
                });


                updateCart();

                showToast(
                    `${name} added to cart ✓`
                );

            }
        );

    }
);


/* =====================================================
   ATUALIZAR CARRINHO
===================================================== */

function updateCart() {

    cartCount.textContent =
        cart.length;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

        cartTotal.textContent =
            "R$ 0,00";

        return;

    }


    let total = 0;


    cart.forEach(
        (item, index) => {

            total += item.price;


            const itemElement =
                document.createElement("div");

            itemElement.className =
                "cart-item";


            itemElement.innerHTML = `
                <span>
                    ${escapeHTML(item.name)}
                </span>

                <strong>
                    R$ ${formatMoney(item.price)}
                </strong>
            `;


            cartItems.appendChild(
                itemElement
            );

        }
    );


    cartTotal.textContent =
        `R$ ${formatMoney(total)}`;

}


/* =====================================================
   ABRIR CARRINHO
===================================================== */

cartButton.addEventListener(
    "click",
    () => {

        cartModal.classList.add(
            "active"
        );

    }
);


/* =====================================================
   FECHAR CARRINHO
===================================================== */

closeCart.addEventListener(
    "click",
    () => {

        cartModal.classList.remove(
            "active"
        );

    }
);


/*
   Fechar clicando fora
*/

cartModal.addEventListener(
    "click",
    event => {

        if (
            event.target === cartModal
        ) {

            cartModal.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty."
            );

            return;

        }


        let message =
            "Olá! Gostaria de fazer um pedido:%0A%0A";


        let total = 0;


        cart.forEach(item => {

            total += item.price;

            message +=
                `☕ ${item.name} - R$ ${formatMoney(item.price)}%0A`;

        });


        message +=
            `%0ATotal: R$ ${formatMoney(total)}`;


        /*
           TROQUE PELO SEU NÚMERO
           Exemplo:
           5534999999999
        */

        const phone =
            "553491483936";


        const whatsapp =
            `https://wa.me/${phone}?text=${message}`;


        window.open(
            whatsapp,
            "_blank",
            "noopener,noreferrer"
        );

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimeout;


function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =====================================================
   FORMATAR DINHEIRO
===================================================== */

function formatMoney(value) {

    return value
        .toFixed(2)
        .replace(".", ",");

}


/* =====================================================
   PROTEÇÃO DO TEXTO
===================================================== */

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        text;

    return element.innerHTML;

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

createDots();

goToSlide(0);

startAutoSlide();

updateCart();
