import React, {useState} from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";


function Store({products}) {
    const [icon, setIcon] = useState('view_list')

    const handleEvent = () => {
        const newIcon = icon === 'view_list' ? 'view_module' : 'view_list'
        setIcon(newIcon);
    }

    return (
        <div>
            <IconSwitch icon={icon} onSwitch={handleEvent} />
            {icon === 'view_list' ? <CardsView cards={products}/> : <ListView cards={products}/>}
        </div>
    )
}

export default Store;