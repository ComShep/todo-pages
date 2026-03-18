import React, { Component } from 'react'
import './todo.css'

export class Empty extends Component {
	render() {
		return (
			<div className='empty-state'>
				<h3>Список дел пуст</h3>
				<p>Добавьте первое дело, используя поле выше</p>
			</div>
		)
	}
}

export default Empty