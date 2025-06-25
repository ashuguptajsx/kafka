const{kafka} = require('./client')


async function init() {
    const consumer = kafka.consumer({ groupId: 'rider-group' });
    console.log("Consumer connecting...");

    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received message: ${message.value.toString()} from topic: ${topic}, partition: ${partition}`);
        },
    });

    console.log("Consumer is running and listening for messages");
}