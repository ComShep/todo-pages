import React, { Component } from 'react';
import './stats.css'

export class Stats extends Component {
	render() {
		const { items } = this.props;

		const total = items.length;
		const completed = (items.filter(el => el.done === true)).length;
		const active = total - completed;

		return (<div className='stats'>
			<div className="stat-item">
				<div className="stat-value">{total}</div>
				<div className="stat-label">Всего дел</div>
			</div>
			<div className="stat-item">
				<div className="stat-value">{active}</div>
				<div className="stat-label">Осталось</div>
			</div>
			<div className="stat-item">
				<div className="stat-value">{completed}</div>
				<div className="stat-label">Выполнено</div>
			</div>
		</div>
		)
	}
}

export default Stats