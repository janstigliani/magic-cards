class MagicCardService {
    static page = 1;
    constructor() {
        
    }

    getData() {
        const baseUrl = "https://api.magicthegathering.io/v1/cards";
        const pageUrl = baseUrl + `?page=${MagicCardService.page}`

        return fetch(pageUrl)
            .then(res => res.json(res))
            .then(data => {
                return data.cards;
            })
            .catch(err => console.error(err));
    }

    nextPage() {
        if (MagicCardService.page < 937) {
            MagicCardService.page++;
        } else {
            MagicCardService.page = 1;
        }
        //max 937
    }

    prevPage() {
        if (MagicCardService.page > 1) {
            MagicCardService.page--;
        } else {
            MagicCardService.page = 937;
        }
    }

    getCardById(searchIndex) {
        console.log(MagicCardService.page);
        return this.getData()
            .then(arrayCards => arrayCards.find(card => card.id === searchIndex));
            
    }

}

//il problema è con il numero della page che non si aggiorna durante il fetch by id, risulta sempre 1 e non riesce a trovare le carte

export default MagicCardService;