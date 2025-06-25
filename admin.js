const {kafka} = require('./client')


async function init(){
    const admin = kafka.admin();
    console.log("admin connecting")

    admin.connect();
    console.log("admin connected")


    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions: 2,
        }]
    })
    console.log("Topic created successfully");
    console.log("Disconnecting admin...");
    await admin.disconnect();
}

init()