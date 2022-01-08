// https://github.com/fastify/fastify-swagger

const fastify = require('fastify')({logger: true})
const port = 3000

// Register the plugin before your routes !
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/apidoc',
  swagger: {
    info: { title: 'echo api' },
    // Add more options to get a nicer page...
  },
})

const optionRouteEcho = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: {type: 'string'}
      },
      required: ['id']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        },
        required: ['message']
      }
    }
  }
}

fastify.get('/echo', optionRouteEcho, (request, reply) => {
  reply.send({ message: request.query })
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});