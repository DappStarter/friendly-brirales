require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain exact harvest narrow force slender'; 
let testAccounts = [
"0x501e0425c9c03879065babb8287c535f3105a1723a5ffe7e1baf78e85f6a7def",
"0xb8f98546cb5f5c403b7bddf023936aa0c3fb6310bb177dd032fef881381de049",
"0xf1c325f2d1f7f0903252fa1f0a54b2c8d363c22c64af7c8189c6ccc46fd075a7",
"0x6fcd45cc8f9be4a5bbbc33319f6d9dd77a580b2f300507992a64467bd195c5ea",
"0xe17774dd279494e050d79f71db31c2837d1774a33c707828ca196114ccf2abc3",
"0x2044b68bca47bfe37fcfe05002a992feafed9bf0b0a860c471a9512598453d51",
"0x70bc1848d635b4f91d2ce54731c3ddb447c5d7777d8c628258a8f225aadfed22",
"0xc1038552f3ce4a70f5ad48b8601d84dd6904dd738cca9675285babed9fe208ad",
"0x7e8ab4d9f459697f5e441db91520eda0fbdcc04d6dc12fd2d7b8dbb33a649ead",
"0xab2c187cb7031a49160ff401a8ac121702b5d2804fe595a5f6120df4e6ca8dba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
