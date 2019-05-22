import React from 'react';
import Img from '../../images/admin.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='brand'>
                <img src={Img} alt="Pizza Creator Admin"/>
            </div>
            <div className="menu">
                <a className="menu-item active">Topping</a>
                <a className="menu-item">Size</a>
            </div>
        </div>
    )
}

export default Sidebar;