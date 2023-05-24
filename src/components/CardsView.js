import PropTypes from 'prop-types'
import ShopCard from "./ShopCard";

function CardsView({cards}) {
    return (
        <div className="row row-cols-3 g-5">
            {cards.map((card, index) => <ShopCard key={index} card={card}/>)}
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array
}

export default CardsView