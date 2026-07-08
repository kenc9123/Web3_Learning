// import其他组件
import { useAccount, useConnect, useDisconnect, useBalance, useChainId, useSwitchChain, } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useState } from "react";
import SendEth from './SendETH.jsx';
import TransactionList from "./TransactionList.jsx";
import WalletInfo from "./WalletInfo.jsx";
import TransferCard from "./TransferCard.jsx";
import styles from "./TransferCard.module.css";
import Mut from "./assets/Mutumi.png";

// 组件写法function name() {contents}大括号中写JavaScript
function Header() {
  //return () 括号中直接写HTML
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
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const { address, isConnected } = useAccount()
  const { data: ethBalanceData } = useBalance({ address: address, chainId: chainId, })
  const { data: polBalanceData } = useBalance({ address: address, chainId: 137, })
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [transactions, setTransactions] = useState([])

  console.log('ethBalanceData:', ethBalanceData)
  console.log('polBalanceData:', polBalanceData)
  console.log('address:', address)
  console.log('chainId:', chainId)

  function formatBalance(data) {
    if (!data) return '...'
    const eth = Number(data.value) / 1e18
    return eth.toFixed(4)
  }

  function addTransaction(tx) {
    setTransactions([...transactions, tx]);
  }

  return (
    <div>
      <Header />
      {/* 顶部卡片 */}
      < WalletInfo
        address={address}
        ethbalance={formatBalance(ethBalanceData)}
        polbalance={formatBalance(polBalanceData)}
        chainId={chainId}
        switchChain={switchChain}
        isConnected={isConnected}
        onConnect={() => connect({ connector: injected() })}
        onDisconnect={() => disconnect()}
      />
      {/* 中间两卡片 */}
      <section style={{ display: "flex", gap: "15px" }}>
        <TransferCard
          title="ETH Transfer"
          Logo="https://cdn.crypto-logo.com/logos/ethereum-eth/128x128/transparent.png"
          sim="ETH Image"
          balance={formatBalance(ethBalanceData)}
          unit="ETH"
          onTransfer={addTransaction}
        />
        <TransferCard
          title="POL Transfer"
          Logo="https://cryptologos.cc/logos/polygon-matic-logo.png"
          sim="POL Image"
          balance={formatBalance(polBalanceData)}
          unit="POL"
          onTransfer={addTransaction}
        />
      </section>
      {/* 记录 */}
      <SendEth />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;