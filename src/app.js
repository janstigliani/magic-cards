import MagicCardService from "./service/card-service.js";

const service = new MagicCardService

service.getData().then(data => render(data));

function next() {
    service.nextPage()
    service.getData().then(data => render(data));
}

window.next = next;

function prev() {
    service.prevPage()
    service.getData().then(data => render(data));
}

window.prev = prev;

function render(data) {

    const root = document.getElementById("root");
    root.innerHTML = "";    

    for (const card of data) {
        const cardContainer = document.createElement("a");
        cardContainer.href = '/detail.html?id=' + card.id;
        cardContainer.target="_blank"
        cardContainer.classList.add("card-container");

        const cardName = document.createElement("h2");
        cardName.textContent = card.name;
        cardName.classList.add("card-name");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-container");
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-image");

        if(!!card.imageUrl){
            cardImage.src = card.imageUrl;
        }
        else{
            cardImage.src = `https://64.media.tumblr.com/4568954fda8082b5f10894cb963af128/8fc167fc6eb7a14c-b2/s540x810/086dad40aad7df0326e0bb94fc21f10192ff1ad1.jpg`;
        }
        
        imageContainer.appendChild(cardImage);
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardName);

        root.appendChild(cardContainer);
    }
}

///API MAGIC COMPITO

//https://api.magicthegathering.io/v1/cards?page=1