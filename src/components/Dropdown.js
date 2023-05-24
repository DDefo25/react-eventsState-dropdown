import React, {useState} from "react";
import DropdownList from "./DropdownList";


function Dropdown({list}) {
    const [toggle, setToggle] = useState('')

    const handleEvent = () => {
        const newState = toggle === 'open' ? '' : 'open'
        setToggle(newState);
    }

    return (
        <div className="container">
          <div className={"dropdown-wrapper " + toggle}>
            <button className="btn" onClick={handleEvent}>
              <span>Account Settings</span>
              <i className="material-icons">public</i>
            </button>
            <DropdownList list={list}/>
          </div>
        </div>
    )
}

export default Dropdown;