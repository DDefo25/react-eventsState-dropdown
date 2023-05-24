import PropTypes from 'prop-types'

function DropdownItem({item}) {
    const {name, active, href} = item;
    return (
        <li className={active ? 'active' : null}><a href={href}>{name}</a></li>
    )
}

DropdownItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.string)
}

export default DropdownItem