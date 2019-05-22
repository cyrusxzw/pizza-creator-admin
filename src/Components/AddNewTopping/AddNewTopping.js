import React from 'react';
import './AddNewTopping.css';

const AddNewTopping = () => (
    <form className="add-new-topping">
        <div className="form-items">
            <input placeholder="Image URL"/>
            <input placeholder="Name"/>
            <input placeholder="Price"/>
        </div>
        <br/>
        <h2>Add New Topping</h2>
        <br/>
        <button type="button">Add</button>
    </form>
)


export default AddNewTopping;