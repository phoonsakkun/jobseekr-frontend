import React from "react";

function AdminPage() {
  return (
    <div>
      <div>Dashboard</div>
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
