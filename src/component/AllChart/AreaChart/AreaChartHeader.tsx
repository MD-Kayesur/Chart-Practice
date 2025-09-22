import React from 'react';
import { LuCopy } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {areaChartData} from './AreaChartData'

interface HeaderProps {
  showLineOnly: boolean;
  setShowLineOnly: (val: boolean) => void;
  onCopy: () => void;
  copied: boolean;
  onRemove: () => void;
}

const AreaChartHeader: React.FC<HeaderProps> = ({ showLineOnly, setShowLineOnly, handleCopy,isCopied, onRemove }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-800">Area Chart</h2>

      <div className="flex items-center space-x-2">
        {/* Toggle */}
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <span className="text-blue-600 font-medium">Show Line Only</span>
          <div 
            onClick={() => setShowLineOnly(!showLineOnly)}
            className={`w-10 h-5 flex items-center p-0.5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out 
                        ${showLineOnly ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            <div 
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out
                          ${showLineOnly ? 'translate-x-full' : 'translate-x-0'}`}
            />
          </div>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Copy & Delete */}
        <div className="text-gray-400 flex items-center space-x-2">
          {/* <div onClick={onCopy} className="p-1 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-150 relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            {copied && <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">Copied! ✅</span>}
          </div> */}

<div>
    <LuCopy
                className="w-5 h-5 cursor-pointer hover:text-red-500"
                onClick={() => handleCopy(areaChartData)}
              />

              {isCopied && (
                <div className="absolute top-2 right-24 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  Data Copied as CSV!
                </div>)}
</div>

          <RiDeleteBin6Line className="w-5 h-5 cursor-pointer hover:text-red-500" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default AreaChartHeader;
