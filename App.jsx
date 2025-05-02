import React from 'react';
import { 
  FaGlobe, FaExchangeAlt, FaPaperPlane, FaNetworkWired, FaChartLine,
  FaDollarSign, FaBalanceScale, FaBolt, FaShieldAlt, FaMoneyBillWave,
  FaPiggyBank, FaPercentage, FaCoins, FaRocket,
  FaHandsHelping, FaTree, FaLandmark, FaUsers, FaBookOpen,
  FaTwitter, FaFacebook, FaTelegramPlane, FaDiscord
} from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Borderless Yield?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Global Access */}
          <div className="group flex flex-col items-center bg-gradient-to-br from-blue-400 to-indigo-600 text-white rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <FaGlobe className="text-4xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Global Market Access</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li><FaChartLine className="inline-block mr-2" />Market diversification</li>
              <li><FaExchangeAlt className="inline-block mr-2" />Multi-currency portfolios</li>
              <li><FaPaperPlane className="inline-block mr-2" />Fast cross-border transfers</li>
              <li><FaNetworkWired className="inline-block mr-2" />Decentralized connectivity</li>
              <li><FaChartLine className="inline-block mr-2" />High liquidity pools</li>
            </ul>
          </div>
          {/* Feature 2: Stablecoins */}
          <div className="group flex flex-col items-center bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <FaDollarSign className="text-4xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Stablecoin Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li><FaBalanceScale className="inline-block mr-2" />Price stability</li>
              <li><FaBolt className="inline-block mr-2" />Instant transactions</li>
              <li><FaShieldAlt className="inline-block mr-2" />Secure smart contracts</li>
              <li><FaMoneyBillWave className="inline-block mr-2" />Low fees</li>
              <li><FaCoins className="inline-block mr-2" />Efficient liquidity</li>
            </ul>
          </div>
          {/* Feature 3: High Yields */}
          <div className="group flex flex-col items-center bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <FaPiggyBank className="text-4xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">High-Yield Opportunities</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li><FaChartLine className="inline-block mr-2" />Passive income growth</li>
              <li><FaPercentage className="inline-block mr-2" />Competitive APYs</li>
              <li><FaCoins className="inline-block mr-2" />Compounded returns</li>
              <li><FaRocket className="inline-block mr-2" />Accelerated earnings</li>
              <li><FaPiggyBank className="inline-block mr-2" />Diversified yield streams</li>
            </ul>
          </div>
          {/* Feature 4: Impact & Trust */}
          <div className="group flex flex-col items-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <FaHandsHelping className="text-4xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Community Impact & Trust</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li><FaTree className="inline-block mr-2" />Local sustainability projects</li>
              <li><FaUsers className="inline-block mr-2" />Inclusive access</li>
              <li><FaLandmark className="inline-block mr-2" />Economic development</li>
              <li><FaBookOpen className="inline-block mr-2" />On-chain transparency</li>
              <li><FaHandsHelping className="inline-block mr-2" />Direct community support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer with Social Icons */}
      <footer className="mt-12 bg-gray-100 py-8">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-blue-500"><FaTwitter className="h-6 w-6" /></a>
          <a href="#" className="text-gray-600 hover:text-blue-700"><FaFacebook className="h-6 w-6" /></a>
          <a href="#" className="text-gray-600 hover:text-blue-400"><FaTelegramPlane className="h-6 w-6" /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-500"><FaDiscord className="h-6 w-6" /></a>
        </div>
        <p className="text-center text-gray-500">Your Name © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

