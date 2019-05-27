import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyparser from 'body-parser';
import cors from 'cors';
import next from 'next';
import cookieparser from 'cookie-parser';

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || false;
const corsOptions = { origin: 'http://10.188.37.107:3000' };

const render = next({ ENV });
const handle = render.getRequestHandler();

render.prepare().then(() => {
    const application = express();
    application.use(cookieparser()); application.use(cors(corsOptions)); application.use(bodyparser.json({ limit: '10mb' }));
    application.use(bodyparser.urlencoded({ extended: true })); application.use('/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', graphqlHTTP((request, response) => ({ schema: accountSchema, graphiql: true }) ));
    application.use(bodyparser.urlencoded({ extended: true, limit: '10mb' })); application.use('/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', graphqlHTTP((request, response) => ({ schema: productSchema, graphiql: true }) ));

    application.get('*', (request, response, next) => { return handle(request, response); });
    application.listen(PORT, '10.188.37.107', () => { console.log('> Listening on server : ' + PORT); });
});