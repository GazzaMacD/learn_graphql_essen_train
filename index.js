import express from 'express';
import schema from './schema.js';

import { graphqlHTTP } from 'express-graphql';



const app = express();

app.get('/', (req, res) => {
    res.send('Graphql learning is fun!');
});

/* 
* this is a resolver which typically would resolve something 
* from the database but for now it is hard coded
*/
const root = { friend: () => {
    return {
        'id': 183647783838,
        'firstName' : 'Gareth', 
        'lastName' : 'Macdonald',
        'gender' : 'Male', 
         'email' : 'macdonald.gareth@gmail.com' 
    }
}};

app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true
    }
))

app.listen(8080, () => {
    console.log('Running on server port localhost:8080/graphql')
});