import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';

const Person = new GraphQLObjectType({ name: 'PersonType', description: 'A Person GraphQL representation.',
    fields: () => {
    return {
            id: { type: new GraphQLNonNull(GraphQLInt), resolve(person) { return person.id; } },
            firstname: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.firstname; } },       lastname: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.lastname; } },
            username: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.username; } },         password: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.password; } },
            token: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.token; } },               civility: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.civility; } },
            phone: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.phone; } },               email: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.email; } },
            city: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.city; } },                 country: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.country; } },
            main_address: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.main_address; } }, secondary_address: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.secondary_address }},
            is_admin: { type: new GraphQLNonNull(GraphQLBoolean), resolve(person) { return person.is_admin; } },        signup_date: { type: new GraphQLNonNull(GraphQLString), resolve(person) { return person.signup_date; } },
            authenticateToken : { type: GraphQLString, resolve(person) { return person.authenticateToken } }
        }
    }
});

export { Person as PersonType };