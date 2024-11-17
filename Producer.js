
const amqp = require('amqplib');

async function sendMessages() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'emailQueue';

    await channel.assertQueue(queue, { durable: true });

    // Simulate sending messages
    for (let i = 0; i < 10; i++) {
        const message = { email: `user${i}@example.com`, subject: 'Test Email', body: 'This is a test email.' };
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
        console.log(`Message sent to queue: ${message.email}`);
    }

    setTimeout(() => {
        connection.close();
    }, 500);
}

sendMessages().catch(console.error);
