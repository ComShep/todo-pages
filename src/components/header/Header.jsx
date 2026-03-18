import React, { Component } from 'react';
import './header.css'

export class Header extends Component {
	render() {
		return ( <div className='header'>
			<h1>Чек-лист дел тест изменений</h1>
			<p>Добавляйте, редактируйте, удаляйте и отмечайте выполненные дела</p>
		</div>
		)
	}
}

export default Header