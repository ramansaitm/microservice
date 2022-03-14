const gateway = require('fast-gateway');
const port = 4000;

const server = gateway({
    routes:[
        {
            prefix: '/art',
            target: 'http://localhost:3000/'
        },
        {
            prefix: '/game',
            target: 'http://localhost:3001/'
        },
        {
            prefix: '/music',
            target: 'http://localhost:3002/'
        },
        {
            prefix: '/sports',
            target: 'http://localhost:3003/'
        },
        {
            prefix: '/trading-card',
            target: 'http://localhost:3004/'
        },
        {
            prefix: '/utility',
            target: 'http://localhost:3005/'
        }
    ]
})

server.get('/',(req,res) => res.send('yes called Microservice'))

server.start(port).then(server => {
    console.log(`Microservice is running at ${port}`)
})