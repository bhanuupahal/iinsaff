import React from 'react';

const ReporterWallet = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="text-3xl font-bold text-blue-600">₹0.00</div>
        <p className="text-gray-600 mt-2">Current Balance</p>
        
        <div className="mt-6 space-y-4">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Add Money
          </button>
          <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            View Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReporterWallet;