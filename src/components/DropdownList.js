import PropTypes from 'prop-types'
import DropdownItem from "./DropdownItem";

function DropdownList({list}) {
    return (
        <ul className="dropdown">
            {list.map((item, index) => <DropdownItem key={index} item={item}/>)}
        </ul>
    )
}

DropdownList.propTypes = {
    list: PropTypes.array
}

export default DropdownList