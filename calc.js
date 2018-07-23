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
					this.setState({ question:'', answer:evalExpression(this.state.question, this.state.answer, this.state.operator), operator:'' });
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
						if(this.state.answer===''){
							const ans = this.state.question;
							this.setState({ question:'', answer:ans, operator:value });
						}
						else if(this.state.operator!==''){
							this.setState({ question:'', answer:evalExpression(this.state.question, this.state.answer, this.state.operator), operator:value });
						}
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


function evalExpression(q, a, o){
	var result;
	switch(o){
		case '+':{
			result = parseInt(a) + parseInt(q);
			break;
		}
		case '-':{
			result = parseInt(a) - parseInt(q);
			break;
		}
		case 'x':{
			result = parseInt(a) * parseInt(q);
			break;
		}
		case '/':{
			result = Math.round(10000000000*parseInt(a) / parseInt(q))/10000000000;
			break;
		}
		default:{
			result = 'ERR';
			break;
		}
	}
	return(result.toString());
}
