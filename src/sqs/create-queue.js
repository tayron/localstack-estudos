const { CreateQueueCommand } = require("@aws-sdk/client-sqs");
const { client } = require('./client');

async function createQueue (queueMessage) {
  const createQueuCommand = new CreateQueueCommand({ QueueName: queueMessage });
  const createdQueueResponse = await client.send(createQueuCommand);
  return createdQueueResponse
}

module.exports = { createQueue }
