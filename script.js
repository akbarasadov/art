const products = [
    {
        id: 1,
        name: "Karton Skulptura 1",
        price: 100000,
        image: "./img/home.jpg    "
    },
    {
        id: 2,
        name: "Karton Skulptura 2",
        price: 150000,
        image: "./img/img1.jpg"
    },
    {
        id: 3,
        name: "Karton Skulptura 3",
        price: 200000,
        image: "./img/month.jpg"
    }
];


let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("#hours")
let days = document.querySelector("#days")


let deadline = "2025-05-09 17:53"


let time = setInterval(() => {

    let t = Date.parse(deadline) - Date.parse(new Date())

    if (t > -1) {
        seconds.textContent = String(Math.floor(t / 1000 % 60)).padStart(2, "0")
        minutes.textContent = String(Math.floor(t / 1000 / 60 % 60)).padStart(2, "0")
        hours.textContent = String(Math.floor(t / 1000 / 60 / 60 % 24)).padStart(2, "0")
        days.textContent = String(Math.floor(t / 1000 / 60 / 60 / 24)).padStart(2, "0")
    } else {
        clearInterval(time)

        const jsConfetti = new JSConfetti();

        jsConfetti.addConfetti({

        }).then(() => jsConfetti.addConfetti())

    }
}, 1000)


const productsContainer = document.querySelector('.products');

products.forEach(product => {



    let t = Date.parse(deadline) - Date.parse(new Date())
    if (t > -1) {
        let saleprice = (product.price / 100) * 80
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>Narxi: ${saleprice} so'm</p>
      <center>
      <button>Sotib olish</button>
      </center>
    `;
    productsContainer.appendChild(productCard);
    } else {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>Narxi: ${product.price} so'm</p>
      <center>
      <button>Sotib olish</button>
      </center>
    `;
    productsContainer.appendChild(productCard);
    }



})

let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.onclick = () => {
        alert("hello")
    }
})