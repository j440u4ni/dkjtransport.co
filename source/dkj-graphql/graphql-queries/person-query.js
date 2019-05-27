import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

import { PersonType } from '../graphql-types/person-type';

const PersonQuery = new GraphQLObjectType({ name: 'PersonQuery',
    fields: {
        findByID: { type: PersonType, args: { id: { type: GraphQLInt } }, resolve(source, args, context, info) { } },
        findByEmail: { type: PersonType, args: { email: { type: GraphQLString } }, resolve(source, args, context, info) { } },
        findByUsername: { type: PersonType, args: { username: { type: GraphQLString } }, resolve(source, args, context, info) { } },

        findAdminByEmail: { type: PersonType, args: { email: { type: GraphQLString, } }, resolve(source, args, context, info) { } },
        findAdminByUsername: { type: PersonType, args: { username: { type: GraphQLString } }, resolve(source, args, context, info) { } },
    }
});
export { PersonQuery };