class MagicCardService {

    constructor(page = 1) {
        this.page = page;
    }

    getData() {
        const baseUrl = "https://api.magicthegathering.io/v1/cards";
        const pageUrl = baseUrl + `?page=${this.page}`

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

    getCardById(searchIndex) {
        return this.getData()
            .then(arrayCards => arrayCards.find(card => card.id === searchIndex));
            
    }

}

//il problema è con il numero della page che non si aggiorna durante il fetch by id, risulta sempre 1 e non riesce a trovare le carte

export default MagicCardService;