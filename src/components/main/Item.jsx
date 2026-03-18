import React, { Component } from 'react'
import { IoPencilSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosSave } from "react-icons/io";

export class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: props.item.text || '',
			isEdit: false
		};
		this.editItem = this.editItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		return (
			<div className='todo-item'>
				<input 
					className={`todo-item-checkbox ${this.state.isEdit && 'none'}`} 
					type="checkbox" 
					checked={this.props.item.done}
					onChange={() => this.props.onCheck(this.props.item.id)}
				/>
				<span 
					className={`item-text ${this.props.item.done && 'done'} ${this.state.isEdit && 'none'}`}
				>{this.props.item.text}</span>
				<input 
					className={`todo-item-input ${!this.state.isEdit && 'none'}`}
					value={this.state.editValue}
					onChange={this.handleInputChange}
				/>
				<div className="todo-actions">
					{this.state.isEdit ? 
						<IoIosSave 
							className='item-button'
							onClick={() => this.saveItem(this.props.item)}
						/> : 
						<IoPencilSharp 
							className='item-button'
							onClick={() => this.editItem()}
						/>}
					<IoIosCloseCircle 
						className='item-button'
						onClick={() => this.props.onDelete(this.props.item.id)}
					/>
				</div>
			</div>
		)
	}

	handleInputChange(event) {
		this.setState({ editValue: event.target.value });
	}

	editItem(item) {
		this.setState({
			isEdit: true,
			editValue: this.props.item.text || ''
		})
		console.log('edit', item)
	}

	saveItem(item) {
		if(this.props.onEdit) {
			this.props.onEdit(this.props.item.id, this.state.editValue);
		}
		this.setState({isEdit: false})
	}
}

export default Item