import { loadPartialConfig } from "@babel/core";
//import { Room } from "app/entity/Room";
import { log } from "console";

async function routes(fastify, options) {
    [
        fastify.get('/roups', async (req, rep) => {
            //console.log(fastify.conf);
            console.log(fastify.conf);
            fastify.conf.miaou = 'rachid';

            return rep.send({ hello: 'world' })
        }),
        fastify.get('/ripou', async (req, rep) => {
            console.log('test: ');
            return rep.send({ hello: 'world o john' })
        }),
        fastify.get('/room/:uuid', async(req, res) => {
            //let room = 
            console.log(req.params);
            let room = fastify.roomList.getRoom(req.params.uuid);
            if (room === null)
            {
                res.send({success: false})
            }
            res.send({success:true, data:{room}})

        }),
        fastify.get('/rooms', async (req, rep) => {
            //fastify.roomList.add({name :'coucou', owner:'jack'});
            return rep.send(fastify.roomList.getAllRoom());
        }),
        fastify.post('/room', async(req, res) => {
            console.log('req.body:');
            
            console.log(req.body);

            let uuidRoom= fastify.roomList.add(req.body);
            
            res.send({succes:true, uuid : uuidRoom})
        })
    ]
}

export default routes;