const fs = require('fs');
const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-cors'), {});

fastify.get('/', async (request, reply) => {
  try {
    const data = await fs.promises.readFile('./users.json', 'utf8');
    let users = JSON.parse(data);

    if (request.query.term) {
      const term = request.query.term.toLowerCase();
      users = users.filter(user => user.name.toLowerCase().includes(term));
    }

    if (users) {
      reply.send(users);
    } else {
      reply.status(404).send({ error: 'Users not found' });
    }
  } catch (err) {
    fastify.log.error('File read failed:', err);
    reply.status(500).send({ error: 'Something went wrong' });
  }
});

const start = async () => {
  try {
    await fastify.listen(3001, '0.0.0.0');
    fastify.log.info('Server listening at http://127.0.0.1:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
