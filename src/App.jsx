import React, { Component } from 'react'
import Header from './components/header/Header'
import TodoContainer from './components/main/TodoContainer'
import Footer from './components/footer/Footer'
import Stats from './components/stats/Stats'
import Input from './components/Input/Input'
import Filters from './components/filters/Filters'

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [],
			currentToDoList: [],
			currentFilter: 'all'
		}
		this.addToDoItem = this.addToDoItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.chooseFilter = this.chooseFilter.bind(this);
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Stats items={this.state.todoList} />
				<Input
					onAdd={this.addToDoItem}
				/>
				<Filters
					onFilters={this.chooseFilter}
				/>
				<TodoContainer
					items={this.state.currentToDoList}
					onCheck={this.checkItem}
					onDelete={this.deleteItem}
					onEdit={this.editItem}
				/>
				<Footer />
			</div>
		)
	}

	applyFilter = (toDoList, filter) => {
		switch (filter) {
			case 'active': return toDoList.filter(el => !el.done);
			case 'done': return toDoList.filter(el => el.done);
			case 'all':
			default: return toDoList;
		}
	}

	addToDoItem(item) {
		const newToDolist = [...this.state.todoList, item]
		this.setState({
			todoList: newToDolist,
			currentToDoList: this.applyFilter(newToDolist, this.state.currentFilter),
		})
	}

	checkItem(id) {
		const newToDolist = this.state.todoList.map(el => {
			if (el.id === id) {
				return { ...el, done: !el.done }
			}
			return el;
		})

		this.setState({
			todoList: newToDolist,
			currentToDoList: this.applyFilter(newToDolist, this.state.currentFilter),
		})
	}

	editItem(id, text) {
		const newTodoList = this.state.todoList.map(el =>
			el.id === id ? { ...el, text } : el
		);

		this.setState({
			todoList: newTodoList,
			currentToDoList: this.applyFilter(newTodoList, this.state.currentFilter)
		});

	}

	deleteItem(id) {
		const newToDoList = this.state.todoList.filter(el => el.id !== id);
		this.setState({
			todoList: newToDoList,
			currentToDoList: this.applyFilter(newToDoList, this.state.currentFilter)
		})
	}

	chooseFilter(filter) {
		this.setState({
			currentFilter: filter,
			currentToDoList: this.applyFilter(this.state.todoList, filter)
		})
	}
}

export default App