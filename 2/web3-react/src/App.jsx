import TransferCard from "./TransferCard";

function Header() {
  return (
    <header>
      <h1>My Web3 Dashboard</h1>
      <p>Welcome to my Web3 dashboard page</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <TransferCard title="ETH Transfer" initialBalance={500} />
      <br></br>
      <TransferCard title="POL Transfer" initialBalance={100} />
    </div>
  );
}

export default App;