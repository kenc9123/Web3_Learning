let ETH_balance = 100;
let POL_balance = 50;
let ARB_balance = 200;

function HandleTransfer() {
    let address = document.getElementById("walletaddress").value;
    let amount = document.getElementById("transferamount").value;
    let network = document.querySelector("select").value;
    let li = document.createElement("li");
    amount = Number(amount);

    if (network === "ethereum") {
        if (amount > ETH_balance) {
            document.getElementById("result").textContent = "Insufficient balance!";
            document.getElementById("result").style.color = "red";
        } else {
            ETH_balance = ETH_balance - amount;
            document.getElementById("result").textContent = "Transfer successful. Remaining balance:" + ETH_balance + "ETH";
            document.getElementById("result").style.color = "green";
            li.textContent = "Transfer" + amount + "ETH to" + address;
            document.getElementById("transactionlist").appendChild(li);
        }
    } else if (network === "polygon") {
        if (amount > POL_balance) {
            document.getElementById("result").textContent = "Insufficient balance!";
            document.getElementById("result").style.color = "red";
        } else {
            POL_balance = POL_balance - amount;
            document.getElementById("result").textContent = "Transfer successful. Remaining balance:" + POL_balance + "POL";
            document.getElementById("result").style.color = "green";
            li.textContent = "Transfer" + amount + "POL to" + address;
            document.getElementById("transactionlist").appendChild(li);
        }
    } else if (network === "bsc") {
        if (amount > ARB_balance) {
            document.getElementById("result").textContent = "Insufficient balance!";
            document.getElementById("result").style.color = "red";
        } else {
            ARB_balance = ARB_balance - amount;
            document.getElementById("result").textContent = "Transfer successful. Remaining balance:" + ARB_balance + "ARB";
            document.getElementById("result").style.color = "green";
            li.textContent = "Transfer" + amount + "ARB to" + address;
            document.getElementById("transactionlist").appendChild(li);
        }
    }
}