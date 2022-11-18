const { SQSClient } = require("@aws-sdk/client-sqs");

const client = new SQSClient({ endpoint: 'http://127.0.0.1:4566' });

module.exports = { client }
