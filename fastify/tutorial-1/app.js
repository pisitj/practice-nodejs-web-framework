// https://www.fastify.io/docs/latest/Routes/#route-prefixing

const fastify = require('fastify')({logger: true})
const port = 3000

fastify.register(require('./routes/v1/users'), { prefix: '/v1'})
fastify.register(require('./routes/v2/users'), { prefix: '/v2'})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});