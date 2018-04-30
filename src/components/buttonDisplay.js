import React from 'react';
import Button from './button';

const ButtonDisplay = (props) => {
	const buttons = props.buttonData.map((button) => {
		return (
				<Button key={button.symbol} symbol={button.symbol} class={button.class} handleClick={props.handleClick} id={button.id} />
			)
	})
	return (
			<div className="buttonGrid">
				{buttons}
			</div>
		)
}

export default ButtonDisplay;