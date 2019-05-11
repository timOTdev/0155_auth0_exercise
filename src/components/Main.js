import React, { Component } from 'react';

export default class Main extends Component {
	handleLogin = e => {
		e.preventDefault();
		this.props.auth.login();
	};
	render() {
		return (
			<div>
				<p>
					Hello {this.props.name}, Do you want to see the secret area?{' '}
					<a href="/secret">Click here</a>
				</p>

				{!this.props.auth.isAuthenticated() && (
					<div>
						<hr />
						Please login first
						<hr />
						<button onClick={this.handleLogin}>Login</button>
					</div>
				)}
			</div>
		);
	}
}
