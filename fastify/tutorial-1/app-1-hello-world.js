// https://www.fastify.io/docs/latest/Getting-Started/

const fastify = require('fastify')({logger: true})
const port = 3000

// response by reply.send
fastify.get('/', (request, reply) => {
  reply.send({message: 'Hello World.'})
})

// response by return 
fastify.get('/echo', (request, reply) => {
  return {message: 'Echo.'}
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});