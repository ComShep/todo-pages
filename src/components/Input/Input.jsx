import React, { Component } from 'react'
import uuid from 'react-uuid';
import './input.css'

export class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		},
		this.handleChange = this.handleChange.bind(this);
		this.clickHandler = this.clickHandler.bind(this)
	}

	render() {
		return (
			<div className='input'>
				<input 
					value={this.state.inputValue} 
					onChange={this.handleChange} 
					placeholder='Добавьте новое дело...'

				/>
				<button 
					disabled={this.state.inputValue.length===0}
					onClick={this.clickHandler}>Добавить</button>
			</div>
		)
	}

	handleChange (event) {
		this.setState({inputValue: event.target.value});
	}

	clickHandler () {
		this.props.onAdd(
			{
				id: uuid(),
				text: `${this.state.inputValue}`,
				done: false
			}
		)
		this.setState({inputValue: ''});
	}
}

export default Input