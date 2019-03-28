import React, { Component } from 'react';
import DishItems from './DishItems'

class DishList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.dishes.map((item) => {
                        return <li> <DishItems dish={item} /> </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default DishList;