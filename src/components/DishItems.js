import React, { Component } from 'react';

class DishItems extends Component {

    printDesc = (name, desc, price) => {
        console.log("Name : ", name);
        console.log("Description : ", desc);
        console.log("Price : ", price);
    }
    render() {
        let { name, desc, price, status } = this.props.dish;
        return (
            <div>
                <section onClick={() => { this.printDesc(name, desc, price) }}>
                    <h2>Name: {name}</h2>
                    <p>Status: {status}</p>
                    click and check console for more info
                </section>
                
            </div>
        )
    }
}

export default DishItems