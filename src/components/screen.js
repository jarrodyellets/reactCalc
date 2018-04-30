import React from 'react';

const Screen = (props) => {
	return (
			<div className="screen">{props.display == "Infinit" ? "ERROR" : props.display}</div>
		)
}

export default Screen;