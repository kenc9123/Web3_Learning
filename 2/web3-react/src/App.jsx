import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>My Web3 Dashboard</h1>
      <p>Welcome to my Web3 dashboard page</p>
    </header>
  );
}

function TransferCard() {
  const [balance, setBalance] = useState(500);
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
      <h2>Transfer Funds</h2>
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

function App() {
  return (
    <div>
      <Header />
      <TransferCard />
    </div>
  );
}

export default App;