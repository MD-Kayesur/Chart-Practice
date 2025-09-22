import React from 'react';

interface LegendProps {
  globexColor: string;
  oceanicColor: string;
}

const AreaChartLegend: React.FC<LegendProps> = ({ globexColor, oceanicColor }) => (
  <div className="flex space-x-6 mb-4 text-sm font-medium">
    <div className="flex items-center">
      <span className={`w-4 h-0.5 mr-2`} style={{ backgroundColor: globexColor }}></span>
      <span className="text-gray-800">Globex Inc</span>
    </div>
    <div className="flex items-center">
      <span className={`w-4 h-0.5 mr-2`} style={{ backgroundColor: oceanicColor }}></span>
      <span className="text-gray-800">Oceanic Airlines</span>
    </div>
  </div>
);

export default AreaChartLegend;
