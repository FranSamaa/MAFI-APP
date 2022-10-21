const container = document.getElementById('container');

const url = '18.231.107.235:9000/api/v1/items/';

const items = fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {

            const html = `
                <div class="container-card">
                    <div class="card">
                        <img src="${item.image}">
                        <div class="contenido-card">
                            <h3>${item.name}</h3>
                            <h3>${item.description}</h3>
                            <h3>$${item.price}</h3>
                            <a href="https://api.whatsapp.com/send?phone=+549112651-7376&text=Hola, muy buenas, me interesa el producto ${item.name}" target="_blank" class="button button__small button__gray"><img class="wpp-icon" src="img/WhatsApp-icon.png" alt="whatsapp-icon"/></a> 
                        </div>
                    </div>
                </div>
            `;

            container.insertAdjacentHTML('beforeend', html);
        })
    })
    .catch(err => console.log(err));

