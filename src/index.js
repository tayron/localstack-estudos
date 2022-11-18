const { createQueue } = require('./sqs/create-queue');
const { addMessage } = require('./sqs/add-message');


async function main () {
  try {
    const createdQueue = await createQueue('queue-name')
    console.log({ createdQueue })
    const createdMessage = await addMessage('http://127.0.0.1/000000000000/queue-name', 'test-message')
    console.log({ createdMessage });
  } catch (error) {
    throw new Error(error);
  }
}

main();
