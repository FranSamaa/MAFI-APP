const productsContainerNEW = document.getElementById('productsContainerNEW');

const getNewProducts = 'http://ec2-18-230-76-147.sa-east-1.compute.amazonaws.com/api/v1/items/get/last';

const items1 = fetch(getNewProducts)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {

            const html = `
                <div class="new__content swiper-slide">
                    <div class="new__tag">New</div>
                    <img src="${item.image}" alt="" class="new__img" />
                    <h3 class="new__title"></h3>
                    <span class="new__subtitle">${item.name}</span>

                    <div class="new__prices">
                        <span class="new__price">$${item.price}</span>
                        <span class="new__discount">$${item.price * 1.6}</span>
                    </div>

                    <button class="button new__button">
                        <i class="bx bx-cart-alt new__icon"></i>
                    </button>
                </div>
            `;

            productsContainerNEW.insertAdjacentHTML('beforeend', html);
        })
    })
    .catch(err => console.log(err));

