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
			operator: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	render() {
		return (
			<div id='demo'>
				<Screen question={this.state.question} answer={this.state.answer} operator={this.state.operator}/>
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

	handleClick(event){
		const value = event.target.id;
		if(event.target.className==='button action-button'){
			switch(value) {
				case '=':{
					switch(this.state.operator){
						case '+':{
							const ans = parseInt(this.state.answer) + parseInt(this.state.question);
							this.setState({ question:'', answer:ans.toString(), operator:'' });
							break;
						}
						case '-':{
							const ans = parseInt(this.state.answer) - parseInt(this.state.question);
							this.setState({ question:'', answer:ans.toString(), operator:'' });
							break;
						}
						case 'x':{
							const ans = parseInt(this.state.answer) * parseInt(this.state.question);
							this.setState({ question:'', answer:ans.toString(), operator:'' });
							break;
						}
						case '/':{
							const ans = Math.round(10000000000*parseInt(this.state.answer) / parseInt(this.state.question))/10000000000;
							this.setState({ question:'', answer:ans.toString(), operator:'' });
							break;
						}
						default:{
							break;
						}
					}
					break;
				}
				case 'C':{
					this.setState({ question:'', answer:'', operator:'' });
					break;
				}
				default:{ //operator was pressed
					if(this.state.question===''){
						const ans = this.state.answer;
						this.setState({ question:'', answer:ans, operator:value });
					}
					else{
						const ans = this.state.question;
						this.setState({ question:'', answer:ans, operator:value });
					}
					break;
				}
			}
		}
		else{ //number was pressed
			this.setState({ question: this.state.question += value})
		}
	}
  
}

export default demo;
