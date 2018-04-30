import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/screen';
import ButtonDisplay from './components/buttonDisplay';
import buttonData from '../public/buttonData';

import style from '../public/css/style.css';

class App extends React.Component {
	consructor(props){
	}

	render() {
		return (
				<div className="calculator">
					<Screen />
					<div className="panel">
				    <div className="solar"></div>
				    <div className="solar" id="middle"></div>
				    <div className="solar"></div>
				  </div>
				  <ButtonDisplay buttonData={buttonData} />
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));