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
		if(event.target.className==='button action-button'){
			switch(value) {
				case '=':{
					this.setState({ question:'', answer:evalExpression(this.state.question, this.state.answer, this.state.operator), operator:'', error:'' });
					break;
				}
				case 'C':{
					this.setState({ question:'', answer:'', operator:'', error:'' });
					break;
				}
				default:{ //operator was pressed
					if(this.state.question===''){
						const ans = (this.state.answer===''?'0':this.state.answer);
						this.setState({ question:'', answer:ans, operator:value, error:'' });
					}
					else{
						if(this.state.answer===''){
							const ans = this.state.question;
							this.setState({ question:'', answer:ans, operator:value, error:'' });
						}
						else if(this.state.operator!==''){
							this.setState({ question:'', answer:evalExpression(this.state.question, this.state.answer, this.state.operator), operator:value, error:'' });
						}
					}
					break;
				}
			}
		}
		else{ //number was pressed
			if(this.state.question.length<10){
				this.setState({ question: this.state.question += value});
			}
			else{
				this.setState({ error:'Error: input limited to 10 digits' });
			}
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
		case '×':{
			result = parseInt(a) * parseInt(q);
			break;
		}
		case '/':{
			const digits = Math.round(parseInt(a) / parseInt(q)).toString().length;
			result = Math.round((10^(10-digits))*parseInt(a) / parseInt(q))/(10^(10-digits));
			break;
		}
		default:{
			result = 'ERR';
			this.state.error = 'Error: '+o+' used as an operator';
			break;
		}
	}
	return(result.toString());
}
