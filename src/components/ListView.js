import PropTypes from 'prop-types'
import ShopItem from "./ShopItem";

function ListView({cards}) {
    return (
        <div className="container">
            {cards.map((card, index) => <ShopItem key={index} card={card}/>)}
        </div>
    )
}

ListView.propTypes = {
    cards: PropTypes.array
}

export default ListView