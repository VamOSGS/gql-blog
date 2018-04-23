const Koa = require('koa');
const mount = require('koa-mount');
const gql = require('koa-graphql');
const { schema, resolvers } = require('./gql');

const app = new Koa();
const routes = require('./routes');

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { PORT, HOST } = process.env;

app.use(routes);
app.use(mount(
  '/graphql',
  gql({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
));
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});
