// https://www.fastify.io/docs/latest/Routes/#route-prefixing

// https://www.fastify.io/docs/latest/Plugins/#create-a-plugin
// 3 required parameter - fastify, opts, done
// end plugin with done()

module.exports = (fastify, opts, done) => {
  fastify.get('/user', (request, reply) => {
    reply.send({message: "GET user v2."})
  })

  fastify.post('/user', (request, reply) => {
    reply.send({message: "POST user v2."})
  })

  done()
}