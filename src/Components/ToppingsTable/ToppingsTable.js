import React from 'react';
import './ToppingsTable.css';

const ToppingsTable = () => {
    return (

        <div className="toppings-table">
            <h2>Toppings</h2>
            <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>Bacon</td>
                    <td>$ 0.99</td>
                    <td className="action">
                        <button type="button">Update</button>
                        &nbsp;&nbsp;
                        <button type="button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default ToppingsTable;