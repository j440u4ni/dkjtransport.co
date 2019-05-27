import { GraphQLSchema } from 'graphql';

import { PersonQuery } from './graphql-queries/person-query';
import { PersonMutation } from './graphql-mutations/person-mutation';

const schemaOne = new GraphQLSchema({ query: PersonQuery, mutation: PersonMutation });
export { schemaOne as accountSchema };