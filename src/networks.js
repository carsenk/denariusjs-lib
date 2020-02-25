'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x19Denarius Signed Message:\n',
  bech32: 'd',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x5a,
  wif: 0x9e,
};
exports.regtest = {
  messagePrefix: '\x19Denarius Signed Message:\n',
  bech32: 'dt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x12,
  scriptHash: 0x74,
  wif: 0x8c,
};
exports.testnet = {
  messagePrefix: '\x19Denarius Signed Message:\n',
  bech32: 'td',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x12,
  scriptHash: 0x74,
  wif: 0x8c,
};
