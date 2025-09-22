// import React, { useState } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// // Default Pie Chart Data
// const defaultPieData = [
//   { name: 'Desktop', value: 65, color: '#00bcd4', icon: '🖥️' },
//   { name: 'Mobile', value: 23, color: '#4caf50', icon: '📱' },
//   { name: 'Tablet', value: 12, color: '#ff9800', icon: '📱' }
// ];

// // Alternative datasets for different use cases
// export const alternativePieData = {
//   // User Demographics
//   demographics: [
//     { name: 'Age 18-24', value: 28, color: '#8b5cf6', icon: '👶' },
//     { name: 'Age 25-34', value: 35, color: '#3b82f6', icon: '👨' },
//     { name: 'Age 35-44', value: 22, color: '#10b981', icon: '👩' },
//     { name: 'Age 45-54', value: 10, color: '#f59e0b', icon: '👴' },
//     { name: 'Age 55+', value: 5, color: '#ef4444', icon: '👵' }
//   ],

//   // Revenue Sources
//   revenue: [
//     { name: 'Product Sales', value: 45, color: '#059669', icon: '🛍️' },
//     { name: 'Services', value: 30, color: '#0891b2', icon: '🔧' },
//     { name: 'Subscriptions', value: 20, color: '#7c3aed', icon: '📋' },
//     { name: 'Advertising', value: 5, color: '#dc2626', icon: '📢' }
//   ],

//   // Market Share
//   marketShare: [
//     { name: 'Our Company', value: 35, color: '#2563eb', icon: '🏆' },
//     { name: 'Competitor A', value: 25, color: '#dc2626', icon: '🥈' },
//     { name: 'Competitor B', value: 20, color: '#f59e0b', icon: '🥉' },
//     { name: 'Others', value: 20, color: '#6b7280', icon: '🏢' }
//   ],

//   // Project Status
//   projectStatus: [
//     { name: 'Completed', value: 42, color: '#059669', icon: '✅' },
//     { name: 'In Progress', value: 35, color: '#0891b2', icon: '🔄' },
//     { name: 'Pending', value: 18, color: '#f59e0b', icon: '⏳' },
//     { name: 'Cancelled', value: 5, color: '#dc2626', icon: '❌' }
//   ],

//   // Traffic Sources
//   trafficSources: [
//     { name: 'Organic Search', value: 40, color: '#059669', icon: '🔍' },
//     { name: 'Direct', value: 25, color: '#3b82f6', icon: '🌐' },
//     { name: 'Social Media', value: 20, color: '#8b5cf6', icon: '📱' },
//     { name: 'Email', value: 10, color: '#f59e0b', icon: '📧' },
//     { name: 'Referral', value: 5, color: '#ef4444', icon: '🔗' }
//   ]
// };

// const PieChartComponent = ({ 
//   data = defaultPieData,
//   width = "100%",
//   height = 300,
//   isDoughnut = true,
//   innerRadius = 60,
//   outerRadius = 90,
//   showLegend = true,
//   showTooltip = true,
//   title = "Doughnut Pie",
//   subtitle = "Total Active Users",
//   centerValue = "520K",
//   centerLabel = "Total Users",
//   showPercentages = true,
//   animationDuration = 800
// }) => {
//   const [activeIndex, setActiveIndex] = useState(-1);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   const onPieLeave = () => {
//     setActiveIndex(-1);
//   };

//   // Calculate total for percentage
//   const total = data.reduce((sum, entry) => sum + entry.value, 0);

//   // Custom tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       const data = payload[0];
//       return (
//         <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
//           <div className="flex items-center gap-2 mb-1">
//             <div 
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: data.payload.color }}
//             ></div>
//             <span className="font-medium text-gray-800">{data.payload.name}</span>
//           </div>
//           <p className="text-sm text-gray-600">
//             Value: {data.value} ({((data.value / total) * 100).toFixed(1)}%)
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // Custom legend
//   const CustomLegend = ({ payload }) => {
//     return (
//       <div className="flex flex-wrap justify-center gap-4 mt-4">
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 text-sm">
//             <div 
//               className="w-3 h-3 rounded-full"
//               style={{ backgroundColor: entry.color }}
//             ></div>
//             <span className="text-gray-700 font-medium">{entry.value}</span>
//             {showPercentages && (
//               <span className="text-gray-500">
//                 ({((entry.payload.value / total) * 100).toFixed(1)}%)
//               </span>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
//       {/* Chart Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//           <p className="text-sm text-gray-500">{subtitle}</p>
//         </div>
//         <div className="flex gap-2">
//           <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//             <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Pie Chart Container */}
//       <div className="relative">
//         <ResponsiveContainer width={width} height={height}>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={isDoughnut ? innerRadius : 0}
//               outerRadius={outerRadius}
//               paddingAngle={2}
//               dataKey="value"
//               onMouseEnter={onPieEnter}
//               onMouseLeave={onPieLeave}
//               animationDuration={animationDuration}
//             >
//               {data.map((entry, index) => (
//                 <Cell 
//                   key={`cell-${index}`} 
//                   fill={entry.color}
//                   stroke={activeIndex === index ? '#fff' : 'none'}
//                   strokeWidth={activeIndex === index ? 3 : 0}
//                   style={{
//                     filter: activeIndex === index ? 'brightness(1.1)' : 'none',
//                     transform: activeIndex === index ? 'scale(1.02)' : 'scale(1)',
//                     transformOrigin: 'center',
//                     transition: 'all 0.2s ease-in-out'
//                   }}
//                 />
//               ))}
//             </Pie>
//             {showTooltip && <Tooltip content={<CustomTooltip />} />}
//             {showLegend && <Legend content={<CustomLegend />} />}
//           </PieChart>
//         </ResponsiveContainer>

//         {/* Center Content for Doughnut */}
//         {isDoughnut && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-gray-800">{centerValue}</div>
//               <div className="text-sm text-gray-500">{centerLabel}</div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Data Summary Cards */}
//       <div className="mt-6 pt-4 border-t border-gray-100">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {data.slice(0, 6).map((item, index) => (
//             <div key={item.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <div 
//                   className="w-4 h-4 rounded-full flex-shrink-0"
//                   style={{ backgroundColor: item.color }}
//                 ></div>
//                 {item.icon && <span className="text-lg">{item.icon}</span>}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <div className="text-xs font-medium text-gray-700 truncate">{item.name}</div>
//                 <div className="text-sm font-semibold text-gray-900">
//                   {item.value}% 
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Usage Examples Component
// export const PieChartExamples = () => {
//   return (
//     <div className="space-y-8 p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Pie Chart Examples</h2>
      
//       {/* Default Doughnut Chart */}
//       <PieChartComponent />
      
//       {/* Demographics Pie Chart */}
//       <PieChartComponent 
//         data={alternativePieData.demographics}
//         title="User Demographics"
//         subtitle="Age Distribution"
//         centerValue="45K"
//         centerLabel="Total Users"
//         isDoughnut={true}
//       />
      
//       {/* Revenue Sources */}
//       <PieChartComponent 
//         data={alternativePieData.revenue}
//         title="Revenue Sources"
//         subtitle="Monthly Revenue Breakdown"
//         centerValue="$2.4M"
//         centerLabel="Total Revenue"
//         isDoughnut={true}
//         innerRadius={70}
//         outerRadius={100}
//       />
      
//       {/* Market Share - Regular Pie */}
//       <PieChartComponent 
//         data={alternativePieData.marketShare}
//         title="Market Share Analysis"
//         subtitle="Industry Competition"
//         isDoughnut={false}
//         height={350}
//       />
      
//       {/* Project Status */}
//       <PieChartComponent 
//         data={alternativePieData.projectStatus}
//         title="Project Status Overview"
//         subtitle="Current Projects"
//         centerValue="156"
//         centerLabel="Total Projects"
//         isDoughnut={true}
//       />
      
//       {/* Traffic Sources */}
//       <PieChartComponent 
//         data={alternativePieData.trafficSources}
//         title="Traffic Sources"
//         subtitle="Website Analytics"
//         centerValue="2.8M"
//         centerLabel="Total Visits"
//         isDoughnut={true}
//         innerRadius={50}
//         outerRadius={85}
//       />
//     </div>
//   );
// };

// export default PieChartComponent;