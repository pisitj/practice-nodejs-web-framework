// https://www.fastify.io/docs/latest/Routes/

const fastify = require('fastify')({logger: true})
const port = 3000

fastify.get('/example/:userId', (request, reply) => {
  reply.send({message: request.params})
})

fastify.get('/example/:userId/:userName', (request, reply) => {
  reply.send({message: request.params})
})

fastify.get('/nearby/:lat-:long/:radius', (request, reply) => {
  reply.send({message: request.params})
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});