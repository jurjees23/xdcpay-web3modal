import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from 'ethers';
import { getXdcModal } from 'xdcpay-web3modal'

const App = () => {

  const [provider, setProvider] = useState(null)
  const [address, setAddress] = useState(null)

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
      'custom-xdc': getXdcModal, // Add One line in  web3modal provider
    }
  });

  const onConnect = async () => {

    try {
      const instance = await web3Modal.connect();
      const providerConnect = new ethers.providers.Web3Provider(instance);
      setProvider(providerConnect)

    } catch (err) {
      console.log("err", err)
    }
  }

  const sendXdc = async () => {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address)
    console.log("Address", address)
    // Acccounts now exposed
    const params = [{
      from: address,
      to: "0x117c691d76c1d9c68e3709a87f7d496097f2b56f",
      value: ethers.utils.parseUnits('1', 'ether').toHexString()
    }];

    const transactionHash = await provider.send('eth_sendTransaction', params)
    console.log('transactionHash is ' + transactionHash);
  }
  return (
    <div align="center">
      <h3>How to connect XDC Pay wallet (chrome extension) with  Web3Modal</h3>



      {!provider && <button type='button' onClick={onConnect}>Connect</button>}
      {provider && <button type='button' onClick={sendXdc}>Send XDC</button>}

    </div>
  );
}

export default App;
