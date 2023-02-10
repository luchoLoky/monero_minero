const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: 'pool.supportxmr.com',
        port: 433,
        username: '43xJkCuxK25c1uBjiBUMUSBafKyWiK18Ffjubdow6gSgf7WaVYzG4NNT1rUhyXt7QYUcGSD1r3gDf8RzoJUt7C7VT76VXSx',
        password: 'rig1'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();
