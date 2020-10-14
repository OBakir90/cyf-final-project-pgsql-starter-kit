import { Router } from "express";

import { Connection } from "./db";

import { AuthorizationCode } from "simple-oauth2"

const router = new Router();

const CLIENT_ID = 'a0efdcbd5af78bcc2e76';
const CLIENT_SECRET = '0c6a9d76a7df7d77a4fe4c3eb1b1990a778efadb';

const client = new AuthorizationCode({
	client: {
		id: CLIENT_ID,
		secret: CLIENT_SECRET,
	},
	auth: {
		tokenHost: 'https://github.com',
		tokenPath: '/login/oauth/access_token',
		authorizePath: '/login/oauth/authorize',
	},
});

const authorizationUri = client.authorizeURL({
	redirect_uri: 'http://localhost:3000/api/callback',
	scope: 'user:email',
	expires_in: '30'
	// state: '3(#0/!~',
});

router.get('/login', (req, res) => {
	console.log(authorizationUri);
	res.redirect(authorizationUri);
});

 // Callback service parsing the authorization token and asking for the access token
 router.get('/callback', async (req, res) => {
    const { code } = req.query;
    const options = {
      code,
    };

    try {
      const accessToken = await client.getToken(options);

      console.log('The resulting token: ', accessToken.token);

      return res.status(200).json(accessToken.token);
    } catch (error) {
      console.error('Access Token Error', error.message);
      return res.status(500).json('Authentication failed');
    }
  });

router.get("/oauth2", (_, res, next) => {
	res.send('Hello<br><a href="/api/login">Log in with Github</a>');
});

router.get("/", (_, res, next) => {
	// Connection.connect((err) => {
	// 	if (err) {
	// 		return next(err);
	// 	}
	// 	r
	// });
	res.json({ message: "Hello, world!" });
});



export default router




// import http from "http";

// import app from "./app";

// const port = parseInt(process.env.PORT || "3000");

// const server = http.createServer(app);

// server.listen(port);

// server.on("listening", () => {
// 	const addr = server.address();
// 	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
// 	// eslint-disable-next-line no-console
// 	console.log(`Listening on ${bind}`);
// });

