const container = document.getElementById('productsContainer');

const url = 'http://localhost:9000/api/v1/items/';

const items = fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {

            const html = `
            <div class="trick__content">
                <img src="${item.image}" alt="${item.name} image" class="trick__img" />
                <h3 class="trick__title">${item.name}</h3>
                <span class="trick__subtitle">${item.description}</span>
                <span class="trick__price">$${item.price}</span>
                <!--BOTON DE SHOP QUE REDIRECCIONA AL WPP-->
                <a target="_blank" href="https://api.whatsapp.com/send?phone=+549112651-7376&text=Hola MAFI, me interesa el producto ${item.name}">
                    <button class="button trick__button">
                        <i class="bx bx-cart-alt trick__icon"></i>
                    </button>
                </a>
            </div>
            `;

            container.insertAdjacentHTML('beforeend', html);
        })
    })
    .catch(err => console.log(err));

