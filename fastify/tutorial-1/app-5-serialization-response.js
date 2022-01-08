// https://www.fastify.io/docs/latest/Validation-and-Serialization/#serialization

// schema
// response: responseJsonSchema

const fastify = require('fastify')({logger: true})
const port = 3000

const optionRouteEcho = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'number' }
        },
        required: ['message']
      }
    }
  }
}

fastify.get('/echo/1', optionRouteEcho, (request, reply) => {
  reply.send({ query: 5555 })
})

// {
//   "statusCode": 500,
//   "error": "Internal Server Error",
//   "message": "\"message\" is required!"
// }

fastify.get('/echo/2', optionRouteEcho, (request, reply) => {
  reply.send({ message: 5555 })
})


fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});