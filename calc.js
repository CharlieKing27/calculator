import React, { Component } from 'react';
import './demo.css';
import Screen from './screen';
import Button from './buttons';


class demo extends Component {
	constructor() {
		super();
		this.state = {
			question: '',
			answer: '',
		}
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<div id='demo'>
				<Screen question={this.state.question} answer={this.state.answer} />
				<table id='button-table'><tbody>
					<tr>
						<Button label='7' handleClick={this.handleClick} type='input' />
						<Button label='8' handleClick={this.handleClick} type='input' />
						<Button label='9' handleClick={this.handleClick} type='input' />
						<Button label='+' handleClick={this.handleClick} type='action' />
					</tr>
					<tr>
						<Button label='4' handleClick={this.handleClick} type='input' />
						<Button label='5' handleClick={this.handleClick} type='input' />
						<Button label='6' handleClick={this.handleClick} type='input' />
						<Button label='-' handleClick={this.handleClick} type='action' /></tr>
					<tr>
						<Button label='1' handleClick={this.handleClick} type='input' />
						<Button label='2' handleClick={this.handleClick} type='input' />
						<Button label='3' handleClick={this.handleClick} type='input' />
						<Button label='x' handleClick={this.handleClick} type='action' /></tr>
					<tr>
						<Button label='0' handleClick={this.handleClick} type='input' />
						<Button label='C' handleClick={this.handleClick} type='action' />
						<Button label='=' handleClick={this.handleClick} type='action' />
						<Button label='/' handleClick={this.handleClick} type='action' /></tr>
				</tbody></table>
			</div>
		);
	}
}

export default demo;
