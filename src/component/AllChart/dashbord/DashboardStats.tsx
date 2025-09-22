import React from "react";

const DashboardStats = ({ stats }) => (
  <div className="p-6 bg-white">
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${stat.color} text-white p-4 rounded-lg`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-90">{stat.title}</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">
              {stat.change}
            </span>
          </div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs opacity-75 mt-1">{stat.subtitle}</div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardStats;
