import React from 'react';
import './AddNewTopping.css';

export default class AddNewTopping extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topping: {},
        };
    }

    onToppingChnage(key, value){
        const { topping } = this.state;

        this.setState({
            topping: {
                ...topping,
                [key]:value,
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
                }
            }>
            <div className="form-items">
                <input onChange = { ({ target: {value} }) => this.onToppingChnage.bind(this, 'name', value)} placeholder="Name"/>
                <input onChange = { ({ target: {value} }) => this.onToppingChnage.bind(this, 'price', value)} placeholder="Price"/>
            </div>
            <br/>
            <button>Add</button>
        </form>
        </div>
        )
    }
}
