// Borderless Yield Frontend - React + Tailwind with Features and Footer
import { useState } from 'react';
import { ethers } from 'ethers';
import { 
  FaGlobe, FaExchangeAlt, FaDollarSign, FaPiggyBank, FaHandsHelping,
  FaTwitter, FaFacebook, FaTelegramPlane, FaDiscord
} from 'react-icons/fa';

export default function App() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    } else {
      alert('MetaMask not found. Please install it.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Borderless Yield</h1>
        <button 
          onClick={connectWallet} 
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          {walletAddress ? 'Connected' : 'Connect Wallet'}
        </button>
      </nav>

      <header className="text-center py-16 px-4 bg-gradient-to-br from-green-100 to-blue-100">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Invest in Local Impact</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-700">
          Borderless Yield lets diaspora communities invest in small businesses across Africa and LATAM using stablecoins.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-800">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
            <FaGlobe className="text-3xl text-green-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Global Access</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Multi-region support</li>
              <li>Cross-border participation</li>
              <li>Decentralized network</li>
              <li>24/7 availability</li>
              <li>Worldwide liquidity</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
            <FaDollarSign className="text-3xl text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Stablecoin Security</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Price stability</li>
              <li>Fast transactions</li>
              <li>Low fees</li>
              <li>Asset-backed coins</li>
              <li>Secure wallets</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
            <FaPiggyBank className="text-3xl text-pink-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">High Yield</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Attractive interest rates</li>
              <li>Compounded returns</li>
              <li>Diverse assets</li>
              <li>Smart contract automation</li>
              <li>Real-time rewards</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
            <FaHandsHelping className="text-3xl text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Community Impact</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Support local SMEs</li>
              <li>Foster economic growth</li>
              <li>Empower local developers</li>
              <li>Transparent reporting</li>
              <li>Real-world results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white mt-12 py-8">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-blue-600"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-800"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-500"><FaTelegramPlane size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-500"><FaDiscord size={24} /></a>
        </div>
        <p className="text-center text-gray-500">Your Name © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
