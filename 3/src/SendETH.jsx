import { useState } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import styles from "./TransferCard.module.css";

function SendEth() {
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');

    const { data: hash, sendTransaction, isPending } = useSendTransaction();
    function handleSend() {
        sendTransaction({
            to: to,
            value: parseEther(amount),
        });
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    return (
        <div className={styles.walletinfo}>
            <h2 className={styles.font}>Real Transaction (Sepolia)</h2>
            <input className={styles.input}
                type="text"
                placeholder="Recipient Address"
                onChange={(e) => setTo(e.target.value)}
            />
            <input className={styles.input}
                type="text"
                placeholder="Amount in ETH"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className={styles.button}
                onClick={handleSend}
                disabled={isPending}>
                {isPending ? 'Sending...' : 'Send ETH'}
            </button>

            {hash && <p>Transaction Hash: {hash}</p>}
            {isConfirming && <p>Transaction is being confirmed...</p>}
            {isConfirmed && <p>Transaction completed!</p>}
        </div>
    );
}

export default SendEth;