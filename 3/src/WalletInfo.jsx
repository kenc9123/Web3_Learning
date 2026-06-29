import styles from "./TransferCard.module.css";
import { useState } from "react";
import Lem from "./assets/Lemuen.png";

function WalletInfo({ address, ethbalance, polbalance, chainId, switchChain, isConnected, onConnect, onDisconnect }) {

    return (
        <div className={styles.walletinfo}>
            <img src={Lem} alt="Failed"></img>
            <h2 className={styles.font}>My Wallet</h2>
            <p>Address: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not Connected'}</p>
            <p>ETH Balance: {ethbalance}</p>
            <p>POL Balance: {polbalance}</p>
            {/* 连接/断开钱包 */}
            {isConnected ? (
                <div>
                    <button className={styles.button} onClick={onDisconnect}>
                        Disconnect the Wallet
                    </button>
                </div>
            ) : (
                <button className={styles.button} onClick={onConnect}>
                    Connect to MetaMask
                </button>
            )}
            {/* 切换网络 */}
            <div>
                <p>Current Network: {chainId === 1 ? 'Ethereum' : chainId === 137 ? 'Polygon' : chainId}</p>
                <button className={styles.button} onClick={() => switchChain({ chainId: 1 })}
                    disabled={chainId === 1}>Switch to ETH</button>
                <button className={styles.button} onClick={() => switchChain({ chainId: 137 })}
                    disabled={chainId === 137}>Switch to POL</button>
            </div>
        </div>
    );
}

export default WalletInfo;