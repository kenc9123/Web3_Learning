import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, polygon } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
    chains: [mainnet, sepolia, polygon],  // []里面决定 DApp 支持哪些网络
    connectors: [injected()],           // MetaMask 就是 injected connector
    // API
    transports: {
        [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/jX_neatwrvglkrUPDQaWB'),
        [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/jX_neatwrvglkrUPDQaWB'),
        [polygon.id]: http('https://polygon-mainnet.g.alchemy.com/v2/R1ZZBuZjD-ep8wcFAmjYM')
    }
})