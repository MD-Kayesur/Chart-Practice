import React, { useEffect, useState } from 'react';
import { getChartData, ChartItem } from './HorizontalBaChartData';
import { LuCopy } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface HorizontalBarChartProps {
  onRemove: () => void;
  handleCopy: (data: ChartItem[]) => void;
  isCopied: boolean;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ onRemove, handleCopy, isCopied }) => {
  const data: ChartItem[] = getChartData();
  const maxValue = 100;

  // Animation state
  const [animatedWidths, setAnimatedWidths] = useState<number[]>(data.map(() => 0));

  useEffect(() => {
    // Animate bars after mount
    const timeout = setTimeout(() => {
      setAnimatedWidths(data.map(item => item.value));
    }, 100); // small delay to trigger transition
    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <div className="mx-auto p-6 bg-white w-full relative">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">Horizontal Bar Chart</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-5">
            <div>
              <LuCopy
                className="w-5 h-5 cursor-pointer hover:text-red-500"
                onClick={() => handleCopy(data)}
              />

              {isCopied && (
                <div className="absolute top-2 right-24 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  Data Copied as CSV!
                </div>
              )}
            </div>

            <RiDeleteBin6Line
              className="w-5 h-5 cursor-pointer hover:text-red-500"
              onClick={onRemove}
            />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-8">
          <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-2"></div>
          <span className="text-sm text-gray-600">Usage Rate</span>
        </div>
        <div className="text-sm text-gray-500">
          Total usage 576k
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-16 text-sm text-gray-600 text-right pr-4">
              {item.name}
            </div>

            <div className="flex-1 relative">
              <div className="h-6 bg-gray-100   relative overflow-hidden">
                {/* Animated Bar */}
                <div
                  className="h-full transition-all rounded-sm  duration-1000 ease-out"
                  style={{ width: `${animatedWidths[index]}%`, backgroundColor: item.color }}
                ></div>
              </div>
              <div
                className="absolute top-0 right-2 h-6 flex items-center text-xs text-gray-600"
                style={{ left: `${animatedWidths[index]}%`, marginLeft: '4px', transition: 'left 1s ease-out' }}
              >
                {item.value}k
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* X-axis scale */}
      <div className="mt-4 ml-20 flex justify-between text-xs text-gray-400">
        {Array.from({ length: 12 }, (_, i) => <span key={i}>{i * 10}</span>)}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
