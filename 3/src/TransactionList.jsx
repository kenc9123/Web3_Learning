import styles from "./TransferCard.module.css"

// .map把数组里每一项换成新东西，key={index}是React要求
function TransactionList({ transactions }){
    return (
        <div className={styles.walletinfo}>
            <h2 className={styles.font}>Transaction History</h2> 
            <ul>
                {transactions.map((tx, index) => (
                    <li key={index}>{tx}</li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;