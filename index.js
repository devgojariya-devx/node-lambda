/*const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

exports.handler = serverlessExpress({ app });
*/

/*const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

// create the handler once
const handler = serverlessExpress({ app });

exports.handler = async (event, context) => {
  // ✅ Fix: ensure rawPath exists for API Gateway v2.0
  if (!event.rawPath) {
    event.rawPath = event.path || '/';
  }

  return handler(event, context);
};*/


/*const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

// create the handler once
const handler = serverlessExpress({ app });

exports.handler = async (event, context) => {
  // Handle API Gateway HTTP API v2.0 event normalization
  if (event.version === '2.0') {
    if (!event.rawPath) {
      event.rawPath = event.path || '/';
    }
    if (!event.requestContext.http) {
      event.requestContext.http = {
        method: event.requestContext?.httpMethod || 'GET'
      };
    }
  }

  return handler(event, context);
};*/


const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

// create the handler once
const handler = serverlessExpress({ app });

exports.handler = async (event, context) => {
  // Handle API Gateway HTTP API v2.0 event normalization for root path
  if (event.version === '2.0') {
    event.rawPath = event.rawPath || event.path || '/';
    
    if (!event.requestContext.http) {
      event.requestContext.http = {
        method: event.requestContext?.httpMethod || 'GET',
      };
    }
  }

  return handler(event, context);
};

