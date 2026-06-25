// import其他组件
import { useState } from "react";
import TransactionList from "./TransactionList.jsx";
import WalletInfo from "./WalletInfo.jsx";
import TransferCard from "./TransferCard.jsx";
import styles from "./TransferCard.module.css";
import Mut from "./assets/Mutumi.png";

// 组件写法function name() {contents}大括号中写JavaScript
function Header() {
  //return ()括号中直接写HTML  
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.font}>My Web3 Dashboard</h1>
        <img src={Mut} alt="Failed"></img>
      </header>
      <div>
        <p>Welcome to my Web3 dashboard page</p>
      </div>  
    </div>
  );
}

function App() {
  // useState标准写法const [当前值, 修改函数] = useState(初始值)，无需手动操作DOM
  const [transactions, setTransactions] = useState([])
  const [ethBalance, se] = useState(500)
  const [polBalance, sp] = useState(100)

  function addTransaction(tx) {
    setTransactions([...transactions, tx]);
  }

  return (
    <div>
      <Header />
      <WalletInfo
        address={"0xbcac40d5c2b4be44d7105cb6eaffec93f772dd052ac57088acd6d317ee22e9a0"}
        ethbalance={ethBalance}
        polbalance={polBalance}
      />
      <section style={{ display: "flex", gap: "10px" }}>
        <TransferCard
          title="ETH Transfer"
          Logo="https://cdn.crypto-logo.com/logos/ethereum-eth/128x128/transparent.png"
          sim="ETH Image"
          balance={ethBalance}
          setBalance={se}
          unit="ETH"
          onTransfer={addTransaction}
        />
        <TransferCard
          title="POL Transfer"
          Logo="https://cryptologos.cc/logos/polygon-matic-logo.png"
          sim="POL Image"
          balance={polBalance}
          setBalance={sp}
          unit="POL"
          onTransfer={addTransaction}
        />
      </section>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;