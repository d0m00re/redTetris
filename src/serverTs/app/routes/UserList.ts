import {UserList} from'./../entity/UserList';
import {User} from './../entity/User';

async function routes(fastify, options) {
    fastify.get('/user/:uuid', async(req, rep) => {
        console.log('user --->');
        console.log(req.params);
        

        let userList : UserList = fastify.userList;
        let user : User | any = userList.findOne(req.params.uuid);

        console.log('user --->');
        console.log(user);
        
        
        if (user?.name === undefined)
            rep.send({error : true,
                errorMsg : 'user not found'})
        else
            rep.send(user.userInfo());
    }),
    fastify.get('/users', async(req, rep) => {
        let userList : UserList = fastify.userList;

        rep.send(userList.findAll());
    }),
    fastify.post('/user', async(req, rep) => {
        let userList : UserList = fastify.userList;

        rep.send(userList.pushOne(req.body));
    })
}

export default routes;