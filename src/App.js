import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Callback from './components/Callback';
import Secret from './components/Secret';
import NotFound from './components/NotFound';

class App extends Component {
	render() {
		let mainComponent = '';
		switch (this.props.location) {
			case '':
				mainComponent = <Main />;
				break;
			case 'callback':
				mainComponent = <Callback />;
				break;
			case 'secret':
				mainComponent = <Secret />;
				break;
			default:
				mainComponent = <NotFound />;
		}

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Welcome to React, {this.props.name}!</p>
				</header>
				{mainComponent}
			</div>
		);
	}
}

export default App;
