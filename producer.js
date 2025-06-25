const {kafka} =  require('./client')
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


async function init(){
    const producer = kafka.producer();
    console.log("Producer connecting...");
    await producer.connect();
    console.log("Producer connected");

    rl.setPrompt('Enter message (or type "exit" to quit): ');
    rl.prompt();

    rl.on('line', async (line) => {
        const[rider, ] = line.split('');
    })

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { partition:0, key: 'rider1', value: 'Rider 1 update' },
            { key: 'rider2', value: 'Rider 2 update' },
        ],
    });

    console.log("Messages sent successfully");
    console.log("Disconnecting producer...");
    await producer.disconnect();
}

init()