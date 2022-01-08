// https://www.fastify.io/docs/latest/Routes/

const fastify = require('fastify')({logger: true})
const port = 3000

// fastify.route(options)
fastify.route({
  method: 'GET',
  url: '/example/1',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {type: 'string'}
        }
      }
    }
  },
  handler: (request, reply) => {
    reply.send({message: 'Route options - Example 1'})
  }
})

// fastify.get(path, handler)
// fastify.post(path, handler)
// fastify.put(path, handler)
// fastify.delete(path, handler)
fastify.get('/example/2', (request, reply) => {
  reply.send({message: 'Route options - Example 2'})
})

// fastify.get(path, [options], handler)
// fastify.post(path, [options], handler)
// fastify.put(path, [options], handler)
// fastify.delete(path, [options], handler)
const optionsRouteExample3 = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  }
}
fastify.get('/example/3', optionsRouteExample3, (request, reply) => {
  reply.send({message: 'Route options - Example 3'})
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});