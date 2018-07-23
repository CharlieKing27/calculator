import React from 'react';

const Button = (props) => {
	return(
		<td
			id={props.label}
			className={props.type==='action'?'button action-button':'button input-button'}
			onClick={props.handleClick}
		>{props.label}</td>
	)
}

export default Button;
