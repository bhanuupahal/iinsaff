import React, { useState } from 'react';
import { FaMoneyBillWave, FaCheck, FaTimes } from 'react-icons/fa';

const WithdrawalRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 'REQ-001',
      date: '2024-02-15',
      amount: 800,
      status: 'Pending',
      user: 'John Doe',
      accountType: 'Bank Account',
      accountDetails: '**** 1234'
    },
    // Add more request records as needed
  ]);

  const handleApprove = (id) => {
    // Add approval logic here
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  const handleReject = (id) => {
    // Add rejection logic here
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Withdrawal Requests</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">{request.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">${request.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{request.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.accountType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.accountDetails}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.status === 'Pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalRequests;