document.addEventListener("DOMContentLoaded", async () => {
  const connectBtn = document.getElementById("connectWalletBtn");
  const addressSpan = document.getElementById("walletAddress");

  async function connectWallet() {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed. Please install it first.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = accounts[0];
      localStorage.setItem("walletAddress", walletAddress);
      addressSpan.textContent = shorten(walletAddress);

      // Ask user role
      const role = prompt("Are you an 'investor' or 'borrower'?").toLowerCase();
      if (!["investor", "borrower"].includes(role)) {
        alert("Invalid role entered.");
        return;
      }

      // Send to backend
      await fetch("/save-wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: walletAddress, role }),
      });

      // Redirect
      window.location.href = `/${role}`;
    } catch (err) {
      console.error(err);
      alert("Error connecting wallet");
    }
  }

  function shorten(addr) {
    return addr.slice(0, 6) + "..." + addr.slice(-4);
  }

  connectBtn.addEventListener("click", connectWallet);

  // Disconnect
  const disconnectBtn = document.getElementById("disconnectBtn");
  if (disconnectBtn) {
    disconnectBtn.addEventListener("click", () => {
      localStorage.removeItem("walletAddress");
      location.reload();
    });
  }

  // Optional: auto-display wallet if already connected
  const storedAddress = localStorage.getItem("walletAddress");
  if (storedAddress) {
    addressSpan.textContent = shorten(storedAddress);
  }

  // Optional: check and switch network
  async function checkNetwork() {
    const desiredChainId = "0xaef3"; // Example: CELO Mainnet
    if (window.ethereum.chainId !== desiredChainId) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: desiredChainId }],
        });
      } catch (err) {
        console.warn("Failed to switch network:", err);
      }
    }
  }

  if (typeof window.ethereum !== "undefined") {
    checkNetwork();
  }
});
