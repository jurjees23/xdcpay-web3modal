import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

detectEthereumProvider().then(res => {
  if (!res) {
    throw new Error('Unable to detect window.ethereum.')
  }
})

export const getXdcModal = {
  display: {
    name: 'XDC Pay',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2634.png',
    description: 'Connect with XDC Pay'
  },
  package: detectEthereumProvider,
  connector: async (_detectEthereumProvider) => {
    const provider = await _detectEthereumProvider();
    await provider.enable();
    return provider;
  }
}
