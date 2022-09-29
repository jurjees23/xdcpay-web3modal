# xdcpay-web3modal

> A custom xdcpay provider for web3modal 

[![NPM](https://img.shields.io/npm/v/xdcpay-web3modal.svg)](https://www.npmjs.com/package/xdcpay-web3modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save xdcpay-web3modal
```

## Usage

```jsx
import React, { Component } from 'react'
import Web3Modal from 'web3modal';
import { getXdcModal } from 'xdcpay-web3modal'
import WalletConnect from "@walletconnect/web3-provider";


const App = () => {
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnect, // required
        options: {
          infuraId: "223f20f418c34a758240a7f416435110", // Required
          network: "mainnet",
          qrcodeModalOptions: {
            mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
          }
        }
      },
      'custom-xdc': getXdcModal, // Add One line in  xdc pay web3modal provider
    }
  });
  //REST of your code
}
```

## License

MIT © [jurjees23](https://github.com/jurjees23)
