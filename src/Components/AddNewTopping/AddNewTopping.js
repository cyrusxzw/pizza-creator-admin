import React from 'react';
import './AddNewTopping.css';
import axios from 'axios';

export default class AddNewTopping extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topping: {},
        };

        this.onToppingChange = this.onToppingChange.bind(this);
    }

    onToppingChange(key, value){
        const { topping } = this.state;

        this.setState({
            topping: {
                ...topping,
                [key]: value,
            },
        });
    }

    render() {
        const { topping } = this.state;
        return (
            <div>
            <h2>Add New Topping</h2>
            <br/>
            <form className="add-new-topping" onSubmit = {
                (event) => {
                    event.preventDefault();

                    console.log(topping);
                    axios.post('http://localhost:3000/toppings', topping)
                    .then (({data: {createdTopping}}) => console.log(createdTopping))
                }
            }>
            <div className="form-items">
            <input onChange = { ({ target: {value} }) => this.onToppingChange('imageUrl', value)} placeholder="imageUrl"/>
                <input onChange = { ({ target: {value} }) => this.onToppingChange('name', value)} placeholder="Name"/>
                <input onChange = { ({ target: {value} }) => this.onToppingChange('price', value)} placeholder="Price"/>
            </div>
            <br/>
            <button>Add</button>
        </form>
        </div>
        )
    }
}
