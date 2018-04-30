import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/screen';
import ButtonDisplay from './components/buttonDisplay';
import buttonData from '../public/buttonData';

import style from '../public/css/style.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			display: "0",
			math: "",
			number: true
		}

		this.handleClick = this.handleClick.bind(this);
		this.changeCalc = this.changeCalc.bind(this);
		this.solve = this.solve.bind(this);
	}

	handleClick(symbol, id){
		const math = this.state.math;
		console.log(math);
		id == "function" ? this.setState((state) => ({
			number: false,
			math: state.math + symbol,
			display: ""
		})) : null;
		id == "number" ? this.setState((state) => ({
			number: true
		}), () => {
			this.changeCalc(symbol);
		}): null;
		id == "decimal" && this.state.display.indexOf(".") === -1 ? this.changeCalc(symbol) : null;
		id == "clear" ? this.setState({
			display: "0",
			math: ""
		}): null;
		id == "delete" ? this.setState((state) => ({
			display: state.display.length > 1 ? state.display.substring(0, state.display.length - 1) : "0",
			math: state.math.substring(0, state.math.length - 1)
		})): null;
		id == "equals" ? this.solve(math) : null;
	}

	solve(string){
		const answer = eval(string).toString();
		this.setState((state) => ({
			display: answer,
			math: "",
			number: false
		}))
	}

	changeCalc(symbol){
		this.state.display.length < 7 ?
		this.setState((state) => ({
			display: state.display == "0" || !state.number ? symbol : state.display + symbol,
			math: state.math + symbol
		})): null

	}

	render() {
		return (
				<div className="calculator">
					<Screen display={this.state.display} />
					<div className="panel">
				    <div className="solar"></div>
				    <div className="solar" id="middle"></div>
				    <div className="solar"></div>
				  </div>
				  <ButtonDisplay buttonData={buttonData} handleClick={this.handleClick} />
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));