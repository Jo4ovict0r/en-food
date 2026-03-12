const itens = document.getElementById("itens");

const h2 = document.createElement('h2');

const img = document.createElement('img');
img.src = "./assets/burguer.webp";

const p = document.createElement('p');



fetch('./backend/itens.php')
    .then(response => response.json())
    .then(data => {
       // Percorre os dados com for
        for (let i = 0; i < data.length; i++) {
            produto = data[i]
            const item = document.createElement('div');
            item.classList.add('item');

            const h2 = document.createElement('h2');

            const img = document.createElement('img');
            img.src = "./assets/burguer.webp";

            const p = document.createElement('p');

            h2.innerText = produto.nome;
            p.innerText = produto.descricao;
            item.appendChild(h2);
            item.appendChild(img);
            item.appendChild(p);

            itens.appendChild(item);
        }
    })
    .catch(error => {
        console.error("Erro ao buscar dados:", error);
    });

