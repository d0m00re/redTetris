// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const uuid = require('uuid');

fastify.register(require('fastify-cors'), { origin: '*' });

/*
const initFastify = async () => {
    await fastify.register(require('fastify-express'));

    fastify.use(cors())
}

initFastify();
*/
// tetrisminos constant

// tetriminos generator

//userInputManegement


function tetrisMap() {

}

function player() {

}

function allPlayer(){

}

/*
    game : current map
*/
function globalState(){
    let global = [];

    const createGame = ()=> {
        global.push({
            uuid : uuid.v4()
        });
        return (global[global.length - 1]);
    } 

    const getGameWithUuid= ({uuid})=>{
        return (global.filter(game=> game.uuid === uuid))[0];
    }

    const getAllGame = () => {
        return global;
    }

    const deleteGameWithUuid = ({uuid}) =>{
        global = global.filter(game =>game.uuid !== uuid);
    }

    return ({createGame, getAllGame, getGameWithUuid, deleteGameWithUuid});
};

let allGame = new globalState();

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/newGame', async (req, res) => {
    console.log('\n\nCreate game : ');

    let game = allGame.createGame();

    console.log(game);
    return (game);
})

fastify.get('/allGame', async (req, res) =>{
    console.log('\n\nAll game : ');
  //  return { hello: 'world' }

    return (allGame.getAllGame());
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4242)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
