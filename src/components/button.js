import React from 'react';

const Button = (props) => {
	return (
			<div className={props.class} 
					 onClick={props.handleClick.bind(props.handleClick, props.symbol, props.id)}>
					<div className="symbol">{props.symbol}</div>
			</div>
		)
}

export default Button;