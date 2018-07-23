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
			operator: '',
			error: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	render() {
		return (
			<div id='demo'>
				<Screen question={this.state.question} answer={this.state.answer} operator={this.state.operator} />
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
						<Button label='×' handleClick={this.handleClick} type='action' /></tr>
					<tr>
						<Button label='0' handleClick={this.handleClick} type='input' />
						<Button label='C' handleClick={this.handleClick} type='action' />
						<Button label='=' handleClick={this.handleClick} type='action' />
						<Button label='/' handleClick={this.handleClick} type='action' /></tr>
				</tbody></table>
				<div id='error-log'>{this.state.error}</div>
			</div>
		);
	}

	handleClick(event){
		const value = event.target.id;
		var result;
		if(event.target.className==='button action-button'){
			switch(value) {
				case '=':{
					result = evalExpression(this.state.question, this.state.answer, this.state.operator);
					this.setState({ question:'', answer:result[0], operator:'', error:result[1] });
					break;
				}
				case 'C':{
					this.setState({ question:'', answer:'', operator:'', error:'' });
					break;
				}
				default:{ //operator was pressed
					if(this.state.question===''){ //if no question, use last answer
						const ans = (this.state.answer===''?'0':this.state.answer);
						this.setState({ question:'', answer:ans, operator:value, error:'' });
					}
					else{
						if(this.state.answer==='' || this.state.operator===''){
							const ans = this.state.question;
							this.setState({ question:'', answer:ans, operator:value, error:'' });
						}
						else{
							result = evalExpression(this.state.question, this.state.answer, this.state.operator);
							this.setState({ question:'', answer:result[0], operator:value, error:result[1] });
						}
					}
					break;
				}
			}
		}
		else{ //number was pressed
			if(this.state.question.length>12){
				this.setState({ error:'Input is limited to 12 digits' });
			}
			else{
				this.setState({ question: this.state.question += value});
			}
		}
	}
  
}
export default demo;


function evalExpression(q, a, o){
	var result = [];
	switch(o){
		case '+':{
			result[0] = (parseInt(a) + parseInt(q)).toString();
			break;
		}
		case '-':{
			result[0] = (parseInt(a) - parseInt(q)).toString();
			break;
		}
		case '×':{
			result[0] = (parseInt(a) * parseInt(q)).toString();
			break;
		}
		case '/':{
			const digits = Math.round(parseInt(a) / parseInt(q)).toString().length;
			result[0] = (Math.round((10^(10-digits))*parseInt(a) / parseInt(q))/(10^(10-digits))).toString();
			break;
		}
		default:{
			result[1] = 'Error: '+o+' used as an operator';
			break;
		}
	}
	if(result[0].toString().length>12){
		result[1] = 'Error: result is '+result[0].toString()+', which is too large to display. Results are limited to 12 digits.';
		result[0] = '999999999999';
	}
	return(result);
}
