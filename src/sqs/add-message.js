const { SendMessageCommand } = require("@aws-sdk/client-sqs");
const { client } = require('./client');

async function addMessage (queueUrl, message) {
  const createdMessageResponse = await client.send(new SendMessageCommand({ QueueUrl: queueUrl, MessageBody: message }));
  return createdMessageResponse;
}

module.exports = { addMessage }
