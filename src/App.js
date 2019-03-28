import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DishList from '../src/components/DishList'
import dishes from '../src/components/dishes'
import DishAdd from './components/DishAdd';

class App extends Component {
	constructor(){
		super();
		this.state={
			dishes : dishes
		}
	}

	addFormData = (event,dish) => {
		event.preventDefault();

		let newDish = this.state.dishes;
		newDish.push(dish);

		this.setState({
			dishes:newDish
		})
	}

	render() {
		return (
			<div className="App">
				<h1>DISHES</h1>
				<DishList dishes = {this.state.dishes}/>

				<DishAdd handleAddDish={this.addFormData}/>
			</div>
		);
	}
}

export default App;
