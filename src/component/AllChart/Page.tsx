import React, { useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const DashboardBuilder = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, type: 'stackedBar', x: 50, y: 50, title: 'Stacked Bar Chart' },
    { id: 2, type: 'radar', x: 400, y: 300, title: 'Radar Chart' },
    { id: 3, type: 'doughnut', x: 600, y: 50, title: 'Doughnut Pie' },
    { id: 4, type: 'heatmap', x: 50, y: 400, title: 'Heatmap Chart' }
  ]);
  
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  // Sample data
  const stackedData = [
    { name: 'Monday', blue: 20, green: 15, purple: 10 },
    { name: 'Tuesday', blue: 25, green: 20, purple: 15 },
    { name: 'Wednesday', blue: 30, green: 25, purple: 20 },
    { name: 'Thursday', blue: 28, green: 22, purple: 18 },
    { name: 'Friday', blue: 35, green: 30, purple: 25 },
    { name: 'Saturday', blue: 32, green: 28, purple: 22 },
    { name: 'Sunday', blue: 38, green: 32, purple: 28 }
  ];

  const radarData = [
    { subject: 'Communication', A: 120, B: 110, fullMark: 150 },
    { subject: 'Problem Solving', A: 98, B: 130, fullMark: 150 },
    { subject: 'Leadership', A: 86, B: 130, fullMark: 150 },
    { subject: 'Teamwork', A: 99, B: 100, fullMark: 150 },
    { subject: 'Creativity', A: 85, B: 90, fullMark: 150 }
  ];

  const pieData = [
    { name: 'Desktop', value: 65, color: '#00bcd4' },
    { name: 'Mobile', value: 23, color: '#4caf50' },
    { name: 'Tablet', value: 12, color: '#ff9800' }
  ];

  const heatmapData = Array(7).fill().map((_, week) => 
    Array(7).fill().map((_, day) => ({
      week,
      day,
      value: Math.floor(Math.random() * 5)
    }))
  ).flat();

  const handleDragStart = (e, widget) => {
    setIsDragging(true);
    setSelectedWidget(widget.id);
    dragRef.current = {
      startX: e.clientX - widget.x,
      startY: e.clientY - widget.y,
      widget
    };
  };

  const handleDrag = (e) => {
    if (!isDragging || !dragRef.current) return;
    
    const newX = e.clientX - dragRef.current.startX;
    const newY = e.clientY - dragRef.current.startY;
    
    setWidgets(prev => prev.map(w => 
      w.id === dragRef.current.widget.id 
        ? { ...w, x: Math.max(0, newX), y: Math.max(0, newY) }
        : w
    ));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  const addWidget = (type) => {
    const newWidget = {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
      title: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Chart`
    };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter(w => w.id !== id));
    setSelectedWidget(null);
  };

  const StackedBarWidget = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Stacked Bar Chart</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">⚙️</button>
          <button className="p-1 hover:bg-gray-100 rounded">📋</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={stackedData}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Bar dataKey="blue" stackId="a" fill="#60a5fa" />
          <Bar dataKey="green" stackId="a" fill="#34d399" />
          <Bar dataKey="purple" stackId="a" fill="#a78bfa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const RadarWidget = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Radar Chart</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">⚙️</button>
          <button className="p-1 hover:bg-gray-100 rounded">📋</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fontSize: 10 }} />
          <Radar name="Current" dataKey="A" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

  const DoughnutWidget = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Doughnut Pie</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">⚙️</button>
          <button className="p-1 hover:bg-gray-100 rounded">📋</button>
        </div>
      </div>
      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">520K</div>
            <div className="text-sm text-gray-500">Total Users</div>
          </div>
        </div>
      </div>
    </div>
  );

  const HeatmapWidget = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">Heatmap Chart</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">⚙️</button>
          <button className="p-1 hover:bg-gray-100 rounded">📋</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {heatmapData.map((cell, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-sm ${
              cell.value === 0 ? 'bg-gray-100' :
              cell.value === 1 ? 'bg-green-100' :
              cell.value === 2 ? 'bg-green-200' :
              cell.value === 3 ? 'bg-green-400' :
              'bg-green-600'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const renderWidget = (widget) => {
    switch (widget.type) {
      case 'stackedBar': return <StackedBarWidget />;
      case 'radar': return <RadarWidget />;
      case 'doughnut': return <DoughnutWidget />;
      case 'heatmap': return <HeatmapWidget />;
      default: return <div>Unknown widget</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">Program Client *</h1>
          
          {/* Project Stats */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Total Project</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">+5.2%</span>
              </div>
              <div className="text-2xl font-bold">56</div>
            </div>
            <div className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Live Project</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">+3.4%</span>
              </div>
              <div className="text-2xl font-bold">36</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Pending Review</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">+8.1%</span>
            </div>
            <div className="text-2xl font-bold">75</div>
          </div>
        </div>

        {/* Widget Library */}
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Widget Library</h2>
          <p className="text-sm text-gray-500 mb-4">Drag widgets to the canvas</p>
          
          <div className="space-y-3">
            {[
              { type: 'stackedBar', icon: '📊', name: 'Stacked Bar Chart', desc: 'Compare data across categories' },
              { type: 'radar', icon: '🕸️', name: 'Radar Chart', desc: 'Multi-dimensional data visualization' },
              { type: 'doughnut', icon: '🍩', name: 'Doughnut Chart', desc: 'Proportional data with center space' },
              { type: 'heatmap', icon: '🌡️', name: 'Heatmap Chart', desc: 'Display data intensity using colors' },
              { type: 'line', icon: '📈', name: 'Line Chart', desc: 'Track changes over time' },
              { type: 'pie', icon: '📊', name: 'Pie Chart', desc: 'Show percentage breakdowns' }
            ].map((item) => (
              <div
                key={item.type}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border border-gray-200"
                onClick={() => addWidget(item.type)}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Canvas */}
      <div 
        className="flex-1 relative overflow-hidden"
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
      >
        {/* Canvas */}
        <div className="w-full h-full relative bg-gray-50">
          {widgets.map((widget) => (
            <div
              key={widget.id}
              className={`absolute cursor-move ${selectedWidget === widget.id ? 'ring-2 ring-blue-500' : ''}`}
              style={{ left: widget.x, top: widget.y }}
              onMouseDown={(e) => handleDragStart(e, widget)}
              onClick={() => setSelectedWidget(widget.id)}
            >
              <div className="w-80 relative">
                {selectedWidget === widget.id && (
                  <button
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeWidget(widget.id);
                    }}
                  >
                    ×
                  </button>
                )}
                {renderWidget(widget)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget Configuration Panel */}
      {selectedWidget && (
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Widget Configuration</h2>
            <button 
              onClick={() => setSelectedWidget(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Widget Type</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Stacked Bar Chart</option>
                <option>Line Chart</option>
                <option>Pie Chart</option>
                <option>Radar Chart</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data Source</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Sample Dataset</option>
                <option>External API</option>
                <option>Database Query</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color Scheme</label>
              <div className="flex gap-2">
                {['blue', 'green', 'purple', 'red', 'yellow'].map(color => (
                  <div key={color} className={`w-8 h-8 bg-${color}-500 rounded cursor-pointer border-2 border-gray-200`}></div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Refresh Rate</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Real-time</option>
                <option>Every 5 minutes</option>
                <option>Every 30 minutes</option>
                <option>Manual</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardBuilder;