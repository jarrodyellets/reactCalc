import React from 'react';

const Screen = (props) => {
	return (
			<div className="screen">{props.display == "Infinity" ? "ERROR" : props.display}</div>
		)
}

export default Screen;