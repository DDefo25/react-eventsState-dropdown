import PropTypes from 'prop-types'

function ShopItem({card}) {
    const {name, price, color, img} = card;
    return (
        <div className="card" style={{backgroundColor: '#f5f5f6'}}>
            <div className='row justify-content-between align-items-center text-center'>
                <div className="col-md-2">
                    <img src={img} className="img-fluid rounded-start align-self-center" alt="..."/>
                </div>
                <div className="col-sm-4">
                    <h4 className="card-title text-uppercase">{name}</h4>
                </div>
                <div className="col-sm-2">
                    <h6 className="card-title text-secondary">{color}</h6>
                </div>
                <div className="col-sm-2">
                    <h5 className="card-title text-danger">${price}</h5>
                </div>
                <div className="col-sm-2">
                    <button className="card-title btn btn-outline-danger rounded-pill fw-bold">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

ShopItem.propTypes = {
    card: PropTypes.objectOf(PropTypes.string)
}

export default ShopItem