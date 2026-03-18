import React, { Component } from 'react'
import './filters.css'

export class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: [
				{
					key: 'all',
					name: 'Все дела'
				},
				{
					key: 'active',
					name: 'Активные'
				},
				{
					key: 'done',
					name: 'Выполненные'
				},
			],
			activeFilter: 'all'
		},
		this.handleFilterCLick = this.handleFilterCLick.bind(this)
	}

	

	render() {
			return (
			<div className='filters'>
				{this.state.filters.map(el => (
					<button
						className={`filter-btn ${this.state.activeFilter === el.key? 'active' : ''}`}
						key={el.key}
						onClick={() => {this.handleFilterCLick(el.key)}}
					>{el.name}</button>
				))}
			</div>
		)
	}

	handleFilterCLick (filterKey) {
		this.setState({activeFilter: filterKey})
		this.props.onFilters(filterKey)
	}
}

export default Filters