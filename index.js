const fastify = require('fastify');

const nodeENV = process.env.NODE_ENV || "development";

const PORT = process.env.PORT || 8001;

const app = fastify({ logger: true });

app.get('/', async() => {
	return {
		status: "OK"
	}
});

app.listen(PORT, "0.0.0.0");