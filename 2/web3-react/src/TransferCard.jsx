import { useState } from "react";

function TransferCard({ title, initialBalance }) {
  const [balance, setBalance] = useState(initialBalance);
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit() {
    if (amount > balance) {
      setResult("Insufficient balance");
    } else {
      setBalance(balance - amount);
      setResult("Transfer Completed! Remaining balance:" + (balance - amount) + " ETH");
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>Current Balance:{balance} ETH</p>
      <input
        type="text"
        placeholder="Wallet Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Transfer Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default TransferCard;