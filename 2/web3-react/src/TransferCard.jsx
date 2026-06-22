import { useState, useEffect } from "react";
import styles from "./TransferCard.module.css";

function TransferCard({ title, initialBalance }) {
  const [balance, setBalance] = useState(initialBalance);
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    if (amount > balance) {
      setResult("Insufficient Balance");
    } else {
      setBalance(balance - amount);
    }
  }

  useEffect(() => {
    console.log("Balance changed, current balance: " + balance);
  }, []);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p>Current Balance:{balance} ETH</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Wallet Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        className={styles.input}
        type="number"
        placeholder="Transfer Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        className={styles.button}
        onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default TransferCard;