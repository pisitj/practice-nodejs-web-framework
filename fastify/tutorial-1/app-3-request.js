// https://www.fastify.io/docs/latest/Request/

const fastify = require('fastify')({logger: true})
const port = 3000

fastify.post('/:name', function (request, reply) {
  console.log('query parameter >>', request.query)
  console.log('request body >>', request.body)
  console.log('path parameter >>', request.params)
  console.log('request headers >>', request.headers)
  console.log('request id >>', request.id)
  console.log('the IP address of the incoming request >>', request.ip)
  console.log('hostname >>', request.hostname)
  console.log('protocol >>', request.protocol)
  reply.send({message: 'request successfully - log request detail in terminal.'})
})

fastify.listen(port, (err, address) => {
  if(err) {
    process.exit(1)
  }
});