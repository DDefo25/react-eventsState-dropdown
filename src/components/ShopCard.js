import PropTypes from 'prop-types'

function ShopCard({card}) {
    const {name, price, color, img} = card;
    return (
        <div className='col-sm-4 align-items-baseline'>
            <div className="card text-center shadow" style={{width: '20rem', backgroundColor: '#f5f5f6'}}>
                <h5 className="card-title text-uppercase">{name}</h5>
                <h6 className="card-title text-secondary">{color}</h6>
                <img src={img} className="card-img-top rounded-start align-self-center w-75" alt="..."/>
                <div className="card-body row g-0 justify-content-between">
                    <div className='col-sm-2 align-self-center text-center'>
                        <h5 className="card-title text-danger">${price}</h5> 
                    </div>
                    <div className='col-8 align-self-center text-end'>
                        <button className="card-title btn btn-outline-danger fw-bold rounded-pill">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    card: PropTypes.objectOf(PropTypes.string)
}

export default ShopCard;