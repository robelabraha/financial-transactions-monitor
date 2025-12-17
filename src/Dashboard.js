import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Financial Transactions Monitor
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <p>2M+ processed</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Fraud Alerts</h2>
          <p>Real-time detection enabled</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Reports</h2>
          <p>Operational efficiency improved by 24%</p>
        </div>
      </div>
    </div>
  );
}
