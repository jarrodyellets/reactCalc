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
			number: true,
			answer: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.changeCalc = this.changeCalc.bind(this);
		this.solve = this.solve.bind(this);
	}

//Click handlers for each button
	handleClick(symbol, id){
		id == "function" ? this.setState((state) => ({
			number: false,
			math: !isNaN(state.math.slice(-1)) ? state.math + symbol : state.math.slice(0, -1) + symbol,
			display: state.display
			})) : null;
		id == "clear" ? this.setState({
			display: "0",
			math: ""
			}): null;
		id == "delete" ? this.setState((state) => ({
			display: state.display.length > 1 ? state.display.substring(0, state.display.length - 1) : "0",
			math: state.math.substring(0, state.math.length - 1)
			})): null;
		id == "number" ? this.changeCalc(symbol) : null;
		id == "decimal" && this.state.display.indexOf(".") === -1 ? this.changeCalc(symbol) : null;
		id == "equals" ? this.solve(this.state.math) : null;
	}

//Click handler for equals
	solve(string){
		const answer = eval(string).toString();
		this.setState((state) => ({
			display: answer.substring(0, 9),
			math: answer.substring(0, 9),
			answer: true
		}))
	}

//Click handler for numbers
	changeCalc(symbol){
		this.state.display.length < 9 || this.state.answer || !this.state.number?
		this.setState((state) => ({
			display: state.display == "0" || !state.number || state.answer ? symbol : state.display + symbol,
			math: state.answer && state.number || state.display == "0" ? symbol : state.math + symbol,
			number: true,
			answer: false
		})): null
	}

	render() {
		return (
			<div className="wrapper">
				<div className="calculator">
					<Screen display={this.state.display} hover={this.state.hover} />
					<div className="panel">
				    <div className="solar"></div>
				    <div className="solar middle"></div>
				    <div className="solar"></div>
				  </div>
				  <ButtonDisplay buttonData={buttonData} handleClick={this.handleClick} />
				</div>
				<footer>
  				<div className="author">&copy; Jarrod Yellets | 2018</div>
				</footer>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));