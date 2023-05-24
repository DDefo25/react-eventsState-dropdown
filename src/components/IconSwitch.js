import PropTypes from 'prop-types';

function IconSwitch({icon, onSwitch}) {
    return (
        <div className='d-flex justify-content-end'>
            <span className="material-icons md-48" onClick={(event) => onSwitch(event)}>
                {icon}
            </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}

export default IconSwitch;