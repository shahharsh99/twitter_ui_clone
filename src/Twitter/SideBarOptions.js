import React from 'react'
import './SideBarOptions.css'

function SideBarOptions(props) {
    const {active,text,Icon} = props;
    return (
        <div className={`sidebaroptions ${active && 'sidebaroptions--active'}`}>
            <Icon/>
            <h2>{text}</h2>

        </div>
    )
}
export default SideBarOptions
