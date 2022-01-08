// https://www.fastify.io/docs/latest/Validation-and-Serialization/#error-handling

// schema
// body: bodyJsonSchema
// querystring: queryStringJsonSchema
// params: paramsJsonSchema
// headers: headersJsonSchema

const fastify = require('fastify')({logger: true})
const port = 3000

const optionRouteEcho = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: {type: 'string'}
      },
      required: ['id']
    }
  }
}

fastify.get('/v1/echo', optionRouteEcho, (request, reply) => {
  reply.send({ message: request.query })
})

fastify.get('/v2/echo', {...optionRouteEcho, attachValidation: true}, (request, reply) => {
  if (request.validationError) {
    reply.code(400).send({message: "custom error message."})
  }
  reply.send({ message: request.query })
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});