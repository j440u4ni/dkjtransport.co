import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLInt } from 'graphql';

import { PersonType } from '../graphql-types/person-type';
import { bcrypt, saltSync } from '../../dkj-configuration';

const PersonMutation = new GraphQLObjectType({ name: 'PersonMutation',
 fields: {
     makeGuestAccount: { type: PersonType, args: { email: { type: new GraphQLNonNull(GraphQLString) }, password: { type: new GraphQLNonNull(GraphQLString) }, firstname: { type: new GraphQLNonNull(GraphQLString) }, lastname: { type: new GraphQLNonNull(GraphQLString) }, phone: { type: new GraphQLNonNull(GraphQLString) }, civility: { type: new GraphQLNonNull(GraphQLString) } }, resolve: (source, args, context, info) => {} },
     retrieveGuestAccount: { type: PersonType, args: { email: { type: new GraphQLNonNull(GraphQLString) }, password: { type: new GraphQLNonNull(GraphQLString) } }, resolve(source, args, context, info) {} },
     retrieveAdminAccount: { type: PersonType, args: { email: { type: new GraphQLNonNull(GraphQLString) }, password: { type: new GraphQLNonNull(GraphQLString) } }, resolve(source, args, context, info) {} },
     
     deleteGuestAccountByEmail: { type: PersonType, args: { email: { type: new GraphQLNonNull(GraphQLString) } }, resolve: (source, args, context, info) => {} },
     deleteGuestAccountByID: { type: PersonType, args: { id: { type: new GraphQLNonNull(GraphQLInt) } }, resolve: (source, args, context, info) => {} },
 }
});

export { PersonMutation };