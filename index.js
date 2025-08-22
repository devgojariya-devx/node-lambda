/*const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

exports.handler = serverlessExpress({ app });
*/

const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

// create the handler once
const handler = serverlessExpress({ app });

exports.handler = async (event, context) => {
  // ✅ Fix: ensure rawPath exists for API Gateway v2.0
  if (!event.rawPath) {
    event.rawPath = event.path || '/';
  }

  return handler(event, context);
};
