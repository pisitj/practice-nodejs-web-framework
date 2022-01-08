// https://www.fastify.io/docs/latest/Routes/#route-prefixing

// https://www.fastify.io/docs/latest/Plugins/#create-a-plugin
// 3 required parameter - fastify, opts, done
// end plugin with done()

const fastify = require('fastify')({logger: true})
const port = 3000

fastify.register(require('./routes/v1/users'), { prefix: '/v1'})
fastify.register(require('./routes/v2/users'), { prefix: '/v2'})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});