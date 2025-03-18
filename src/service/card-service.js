class MagicCardService {
    static BASE_URL = "https://api.magicthegathering.io/v1/cards";
    
    constructor(page = 1) {
        this.page = page;
    }

    getData() {
        const pageUrl = MagicCardService.BASE_URL + `?page=${this.page}`

        return fetch(pageUrl)
            .then(res => res.json(res))
            .then(data => {
                return data.cards;
            })
            .catch(err => console.error(err));
    }

    nextPage() {
        if (this.page < 937) {
            this.page++;
        } else {
            this.page = 1;
        }
        //max 937
    }

    prevPage() {
        if (this.page > 1) {
            this.page--;
        } else {
            this.page = 937;
        }
    }

    // getCardById(searchId) {
    //     console.log(this..page);
    //     return this.getCard(searchId)
    //         .then(arrayCards => arrayCards.find(card => card.id === searchId));
            
    // }

    getCardById2(searchId) {
        const url = MagicCardService.BASE_URL + "/" + searchId;

        return fetch(url)
            .then(res => res.json(res))
            .then(data => {
                return data.card;
            })
            .catch(err => console.error(err));
    }

}

//il problema è con il numero della page che non si aggiorna durante il fetch by id, risulta sempre 1 e non riesce a trovare le carte

export default MagicCardService;