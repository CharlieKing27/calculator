import React, { Component } from 'react';


class demo extends Component {
	render() {
		return (
			<div id='demo'>
				<Screen />
				<table id='button-table'><tbody>
					<tr>
						<Button label='7' />
						<Button label='8' />
						<Button label='9' />
						<Button label='+' />
					</tr>
					<tr>
						<Button label='4' />
						<Button label='5' />
						<Button label='6' />
						<Button label='-' /></tr>
					<tr>
						<Button label='1' />
						<Button label='2' />
						<Button label='3' />
						<Button label='x' /></tr>
					<tr>
						<Button label='0' />
						<Button label='C' />
						<Button label='=' />
						<Button label='/' /></tr>
				</tbody></table>
			</div>
		);
	}
}

export default demo;
