import React, { useState } from 'react';
import { FaTicketAlt, FaCalendarAlt, FaPercent, FaEdit, FaTrash, FaCopy } from 'react-icons/fa';

const CouponManagement = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: 'WELCOME2024',
      discount: 20,
      type: 'Percentage',
      validFrom: '2024-02-01',
      validUntil: '2024-03-31',
      usageLimit: 100,
      usedCount: 45,
      status: 'Active',
      minPurchase: 1000,
      description: 'New user welcome discount'
    },
    // Add more coupons...
  ]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // Add toast notification here
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Coupon Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create New Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaTicketAlt className="text-xl" />
                  <h3 className="ml-2 text-lg font-semibold">{coupon.code}</h3>
                </div>
                <button 
                  onClick={() => copyToClipboard(coupon.code)}
                  className="p-2 hover:bg-blue-600 rounded"
                  title="Copy code"
                >
                  <FaCopy />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-semibold flex items-center">
                    {coupon.discount}
                    <FaPercent className="ml-1 text-sm" />
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Minimum Purchase</span>
                  <span className="font-semibold">${coupon.minPurchase}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Usage</span>
                  <span className="font-semibold">{coupon.usedCount}/{coupon.usageLimit}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>Valid: {coupon.validFrom} to {coupon.validUntil}</span>
                </div>
                <p className="text-sm text-gray-600">{coupon.description}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  coupon.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {coupon.status}
                </span>
                <div className="space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <FaEdit />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponManagement;