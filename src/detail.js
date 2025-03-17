import MagicCardService from "./service/card-service.js";

const service = new MagicCardService();

const urlParams = new URLSearchParams(window.location.search);

const targetCardId = urlParams.get('id');
service.getCardById(targetCardId).then(card => render(card));

function render(card) {
    const root = document.getElementById('root2');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container-detail');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-detail');

    if (!!card.imageUrl) {

        cardImage.src = card.imageUrl;
    }
    else {
        cardImage.src = `https://64.media.tumblr.com/4568954fda8082b5f10894cb963af128/8fc167fc6eb7a14c-b2/s540x810/086dad40aad7df0326e0bb94fc21f10192ff1ad1.jpg`;
    }

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const cardName = document.createElement('h2');
    const nodeName = document.createTextNode(card.name);

    cardName.appendChild(nodeName);

    const cardType = document.createElement('p');
    const nodeType = document.createTextNode(card.type);

    cardType.appendChild(nodeType);

    const cardRarity = document.createElement('p');
    const nodeRarity = document.createTextNode(card.rarity);

    cardRarity.appendChild(nodeRarity);

    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardType);
    cardInfo.appendChild(cardRarity);

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardInfo);

    root.appendChild(cardContainer);
}
