import React from 'react';

const Button = (props) => {
	return (
			<div className={props.class}>
				<div className="symbol">{props.symbol}</div>
			</div>
		)
}

export default Button;