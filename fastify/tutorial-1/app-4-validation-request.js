// https://www.fastify.io/docs/latest/Validation-and-Serialization/#validation

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

fastify.get('/echo', optionRouteEcho, (request, reply) => {
  reply.send({ message: request.query })
})

// localhost:3000/echo
// {
//   "statusCode": 400,
//   "error": "Bad Request",
//   "message": "querystring should have required property 'id'"
// }

// localhost:3000/echo?id=555
// {
//   "message": {
//       "id": "555"
//   }
// }

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});