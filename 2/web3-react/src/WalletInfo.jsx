import styles from "./TransferCard.module.css"
import { useState } from "react";

function WalletInfo({ address, ethbalance, polbalance, }) {

    return (
        <div className={styles.walletinfo}>
            <h2 className={styles.font}>My Wallet</h2>
            <br></br>
            <p>Address: {address}</p>
            <p>ETH Balance: {ethbalance}</p>
            <p>POL Balance: {polbalance}</p>
        </div>
    );
}

export default WalletInfo;