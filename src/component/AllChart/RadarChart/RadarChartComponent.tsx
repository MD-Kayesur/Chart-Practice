import React, { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { RadarChartProps } from './types';
import { imageRadarData } from './RadarChartData';
import { RadarChartTooltip } from './RadarChartTooltip';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuCopy } from 'react-icons/lu';

export const RadarChartComponent: React.FC<RadarChartProps> = ({
  initialData = imageRadarData,
  width = "100%",
  height = 300,
  title = "Radar Chart",
  subtitle = "Average Session Duration",
  colors = ['#359CD4', '#057762'],
  dataKeys = ['This Month', 'Previous Month'],
  dataLabels = ['This Month', 'Previous Month'],
onRemove,
handleCopy , isCopied  
}) => {
  const [data, setData] = useState(initialData);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleCopyData = async () => {
    if (!data || data.length === 0) {
      setMessage('No data to copy.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    const headers = ['subject', ...dataKeys].join(',');
    const rows = data.map(row => [row.subject, ...dataKeys.map(key => row[key])].join(',')).join('\n');
    const csvData = headers + '\n' + rows;
    try {
      await navigator.clipboard.writeText(csvData);
      setMessage('Chart data copied to clipboard (CSV)!');
    } catch (err) {
      console.error(err);
      setMessage('Error copying data.');
    }
    setTimeout(() => setMessage(''), 3000);
  };

 

  return (
 <div className="mx-auto p-6 bg-white     w-full relative  ">      {message && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow-lg z-20">
          {message}
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="flex gap-2 text-gray-400">
           <LuCopy
                       className="w-5 h-5 cursor-pointer hover:text-red-500"
                       onClick={() => handleCopy(imageRadarData)}
                     />
         
                     {isCopied && (
                       <div className="absolute top-2 right-24 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                         Data Copied as CSV!
                       </div>
                     )}
          <RiDeleteBin6Line
                        className="w-5 h-5 cursor-pointer hover:text-red-500"  
                        onClick={onRemove}
                      />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-4">
        <div className="flex w-full justify-start gap-7 text-sm font-medium mb-1">
          {colors.map((color, i) => (
            <span key={i} className="flex items-center text-gray-700">
              <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }}></span>
              {dataLabels[i]}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {data && data.length > 0 ? (
        <ResponsiveContainer width={width} height={height}>
          <RadarChart data={data} outerRadius="80%">
            <PolarGrid gridType="polygon" radialLines={true} stroke="#e0e7ff" strokeWidth={1} />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#4B5563', fontWeight: 500 }} />
            <PolarRadiusAxis angle={90} domain={[0, 1.0]} tickCount={4} stroke="#e0e7ff" strokeOpacity={0.7} />
            <Tooltip content={<RadarChartTooltip />} />
            {dataKeys.map((key, index) => (
              <Radar key={key} name={dataLabels[index]} dataKey={key} stroke={colors[index]} fill={colors[index]} fillOpacity={0.15} strokeWidth={2.5} dot={{ fill: colors[index], strokeWidth: 2, stroke: '#fff', r: 4 }} />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-center py-10 text-gray-500">
          Chart data is unavailable or has been deleted.
        </div>
      )}
    </div>
  );
};

export default RadarChartComponent;
