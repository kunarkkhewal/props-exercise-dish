import React, { Component } from 'react';

class DishAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: {}
        }
    }

    addDish = (e) => {
        let newDish = {};
        newDish[e.target.name] = e.target.value

        this.setState({
            dish: {
                ...this.state.dish,
                ...newDish
            }
        })
    }

    render() {
        // console.log("dish..",this.state.dish);
        return (
            <section className="addData">
                <h2>Add Dish</h2>
                <form onSubmit={(event) => this.props.handleAddDish(event, this.state.dish)}>
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" value={this.state.dish.name} onChange={this.addDish} />
                    <br/>
                    <label htmlFor="desc">Description: </label>
                    <input name="desc" type="text" value={this.state.dish.desc} onChange={this.addDish} />
                    <br/>
                    <label htmlFor="price">Price: </label>
                    <input name="price" type="number" value={this.state.dish.price} onChange={this.addDish} />
                    <br/>
                    <label htmlFor="status">Status:</label>
                    <input name="status" type="text" value={this.state.dish.status} onChange={this.addDish} />
                    <br/>
                    <input type="submit" value="Add Dish" />
                </form>
            </section>
        )
    }
}
export default DishAdd;