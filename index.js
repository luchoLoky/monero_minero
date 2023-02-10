const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '43xJkCuxK25c1uBjiBUMUSBafKyWiK18Ffjubdow6gSgf7WaVYzG4NNT1rUhyXt7QYUcGSD1r3gDf8RzoJUt7C7VT76VXSx',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner