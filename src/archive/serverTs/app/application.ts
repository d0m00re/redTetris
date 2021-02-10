import { loadPartialConfig } from '@babel/core';
import fastify, {FastifyInstance} from 'fastify';
import {Server, IncomingMessage, ServerResponse} from 'http';

import {RoomList, IRoomList} from './entity/Room';
import { UserList } from './entity/UserList';

var test ='coucou';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({logger : true});

server.decorate('conf', {'miaou' : 'john'})

server.decorate('roomList', new RoomList);
server.decorate('userList', new UserList)
console.log('server');
console.log(server);

//console.log(server.conf);


function build() {
    
    server.get('/ping', async(request, reply) => {
        return 'pong\n'
    });

    server.route({
        method:'GET',
        url: '/',
        handler: function(req, res) {
            res.send({'hello' : 'coucou'})
        }
    })

    /*
    server.register((instance, opts, next) =>
    {
        require('./routes/test'),
        instance.get('/miaou', (req, res) => {
            res.send({'miaou': 'john'})
        })
        next();
    });
    */
   /*
   server.register((instance, opts, next) => {
    require('./routes/test'),
   })
   */

   server.register(require('./routes/test'));
   server.register(require('./routes/UserList'))

    return server;
}

export default build;