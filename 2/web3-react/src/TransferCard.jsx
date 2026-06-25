import { useState, useEffect } from "react";
import styles from "./TransferCard.module.css";

// ({})中是子组件，通过这样写像父组件传数据
function TransferCard({ title, balance, unit, setBalance, onTransfer, Logo, sim }) {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    if (amount > balance) {
      setResult("Insufficient Balance");
    } else {
      setBalance(balance - amount);
      onTransfer("Transfer" + amount + " " + unit + " to " + address);
    }
  }

  useEffect(() => {
    console.log("Balance changed, current balance: " + balance);
  }, []);

  return (
    <div className={styles.card}>
      <img className={styles.logo} src={Logo} alt={sim}></img>
      <h2 className={styles.title}>{title}</h2>
      <p>Current Balance:{balance} {unit}</p>
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