// worker.js
const amqp = require('amqplib');

async function startWorker(workerId) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'emailQueue';

    await channel.assertQueue(queue, { durable: true });
    console.log(`Worker ${workerId} is waiting for messages...`);

    channel.consume(queue, (message) => {
        if (message !== null) {
            const emailData = JSON.parse(message.content.toString());
            console.log(`Worker ${workerId}: Email sent to ${emailData.email}`);
            channel.ack(message);
        }
    });
}

const workerId = process.argv[2];
if (workerId) {
    startWorker(workerId).catch(console.error);
} else {
    console.error('Please provide a worker ID as a command-line argument.');
    process.exit(1);
}