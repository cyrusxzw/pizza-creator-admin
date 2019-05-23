import React from 'react';
import './ToppingsTable.css';

export default class ToppingsTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toppings: [],
        }
    }

    componentDidMount (){        
    fetch('http://localhost:3000/toppings')
    .then((response) => response.json())
    .then((toppings) => {
           this.setState({
                toppings,
           });
        });
    }

    render(){
        const { toppings } = this.state;
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
                   {toppings.map(({id, name, price, imageUrl}) =>
                       (
                        <tr key={id}>
                        <td><img src={imageUrl}/></td>
                        <td>{name}</td>
                        <td>{`$ ${price}`}</td>
                        <td className="action">
                            <button type="button">Update</button>
                            &nbsp;&nbsp;
                            <button type="button">Delete</button>
                        </td>
                        </tr>
                       )
                   )}
                </tbody>
            </table>
            </div>
        )
    }
}

    