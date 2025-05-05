document.addEventListener('DOMContentLoaded', () => {
  const connectBtn = document.getElementById('connectWalletBtn');
  const addressDisplay = document.getElementById('walletAddress');

  connectBtn?.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        addressDisplay.textContent = `Connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`;
      } catch (err) {
        console.error('Wallet connection error:', err);
        alert('Connection rejected.');
      }
    } else {
      alert('MetaMask not found. Please install the extension.');
    }
  });
});
