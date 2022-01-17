require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pull hunt rebuild foam seed'; 
let testAccounts = [
"0x8f16a6102443520affcd266e1392a1d0c8ab84f5a1a48de5bddfbb9fc52321f2",
"0x4e17d06df92786f70fa4dbf6f8dc428c1c6533d6cc9c85b5ddaf1a293bdbcf87",
"0xb1aa23aca04a63bb13fc8beb82412e29a7634524a0c6aa73c13d395ed92206e6",
"0x14823c4d5cee82f935bcedd454cc45006f60fe9ea31cf3638875a7d4f3b76d00",
"0x3ed046ae3b47172f50734b9a85cef55664efca058871877b94fbb92b4d1c45dc",
"0xab74c8b02f688f758a155ff2f973e92130e03f985df66edc9b5483526dda9449",
"0x93ede92358a0c705c05f898435d71ebf3c49a38a8ace98fad4e3185182c5da15",
"0xbe5c0a2a2c7e324b7494226b64490e3d42fdba01c0d933a2922cc0b012ed24ef",
"0x303059fa7ec72171837c2917704df194250f13e3c20917b32b28c230bf7ed9bd",
"0xd5f8cb47858aaa2cfeaf71a42adb7d9c0fa29cbd4f881e7d07a027e1f80fac68"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


