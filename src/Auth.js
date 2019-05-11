/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';

export default class Auth {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: process.env.REACT_APP_AUTH0_DOMAIN,
			clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
			redirectURI: 'http://localhost:3000/callback',
			audience: '', // endpoint to get user information
			responseType: 'token id_token', // desired response (jwt)
			scope: 'openid'
		});
	}

	login = () => {
		this.auth0.authorize();
	};

	handleAuthentication() {
		this.auth0.parseHash((err, authResults) => {
			if (err) {
				return console.Error(err);
			}
			if (!authResults || !authResults.idToken) {
				location.pathname = '/';
				return console.Error(err);
			}

			let expiresAt =
				JSON.stringify(authResults.expiresIn) * 1000 + new Date().getTime();
			localStorage.setItem('access_token', authResults.accessToken);
			localStorage.setItem('id_token', authResults.idToken);
			localStorage.setItem('expires_at', expiresAt);
			location.hash = ''; // clears out url string;
			location.pathname = '/secret';
		});
	}

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}
