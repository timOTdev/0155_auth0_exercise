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
}
