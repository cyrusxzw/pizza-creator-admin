import React from 'react';
import ReactDOM from 'react-dom';
import PizzaCreatorAdmin from './Components/PizzaCreatorAdmin/PizzaCreatorAdmin';
import './main.css';

class Index extends React.Component {
    render() {
        return (
            <div>
                <PizzaCreatorAdmin />
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));