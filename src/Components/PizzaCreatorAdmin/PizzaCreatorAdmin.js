import React from 'react';
import Sidebar from '../Sidebar';
import './PizzaCreatorAdmin.css'
import ToppingsTable from '../ToppingsTable';
import AddNewTopping from '../AddNewTopping';


const PizzaCreatorAdmin = () => {
    return (
        <div className="app">
            <Sidebar/>
            <div className="content">
                <ToppingsTable/>
                <br/>
                <br/>
                <AddNewTopping />
            </div>
        </div>   

    )


}
export default PizzaCreatorAdmin;