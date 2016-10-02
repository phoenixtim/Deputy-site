const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const router = require('express').Router();

var schema;
var answer = {};

const graphs = [
  require('./News'),
];

function constructGraph() {
  var schemaText = ``;
  var queries = ``;
  var mutations = ``;

  graphs.forEach(graph => {
    schemaText += graph.schema.types;

    queries += graph.schema.queries;
    mutations += graph.schema.mutations;

    Object.keys(graph.answer).forEach(key => {
      answer[key] = graph.answer[key];
    });
  });

  schemaText += `
    type Query {
      ${queries}
    }

    type Mutation {
      ${mutations}
    }
  `;

  console.log(schemaText);

  schema = buildSchema(schemaText);
}

constructGraph();

console.log('env', __env, __env === 'development');

router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: answer,
  graphiql: __env === 'development',
}));

module.exports = router;
