import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<p>Чек-лист дел © 2026 | Для отметки выполненного дела нажмите на чекбокс</p>
			</div>
		)
	}
}

export default Footer