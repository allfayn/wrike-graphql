import { astToSchema, directoryToAst } from 'graphql-compose-modules';
import { schemaComposer } from 'graphql-compose';

const ast = directoryToAst(module);
const sc = astToSchema(ast, { schemaComposer });
sc.Query.setDescription('for Microsoft with ❤️');
sc.Mutation.setDescription('for Google with ❤️');

const ct = sc.getOTC('Contact');

const schema = sc.buildSchema();
export default schema;
