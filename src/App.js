import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state= {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filterredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='f1'>ROBOFAMILIA</h1>
			<SearchBox searchChange={this.onSearchChange}/>
		  <CardList robots={filterredRobots}/>
		</div>

	);
	}
}

export default App;