import React, { Component } from 'react'
import './todo.css'
import Empty from './Empty'
import Item from './Item'

export class TodoContainer extends Component {

	render() {
		// console.log(this.props.items)
		if (this.props.items.length === 0) {
			return (
			<div className='todo-wrapper'>
				<Empty/>
			</div>
			)
		}
		return (
			<div className='todo-wrapper'>
				{this.props.items.map(el => (
					<Item
						key={el.id}
						item={el}
						onCheck={this.props.onCheck}
						onDelete={this.props.onDelete}
						onEdit={this.props.onEdit}
					/>
				))}
			</div>
		)
	}
}

export default TodoContainer