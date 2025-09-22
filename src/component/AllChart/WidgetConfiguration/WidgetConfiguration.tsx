 










 import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
// Assuming FieldDataInput is a component similar to the DataMappingComponent we developed
import FieldDataInput from "./FieldDataInput"; 

// A simple dummy component to stand in for FieldDataInput/DataMappingComponent
// In a real app, you would use the complex DataMappingComponent here.
const DataMappingStub = ({ 
    title, 
    datasets, 
    setDatasets, 
    fieldData, 
    setFieldData, 
    fieldOptions,
    defaultDatasets
}) => {
    // This stub implements the core logic seen in DataMappingComponent
    const handleDatasetCountChange = (e) => {
        const count = parseInt(e.target.value);
        if (count >= 1 && count <= fieldOptions.length) {
            setDatasets(count);
            // Re-initialize field data array size
            setFieldData(prev => {
                const newArr = Array(count).fill("");
                for (let i = 0; i < count; i++) {
                    newArr[i] = prev[i] || fieldOptions[i] || fieldOptions[0];
                }
                return newArr;
            });
        }
    };
    
    const handleFieldChange = (index, value) => {
        const newArr = [...fieldData];
        newArr[index] = value;
        setFieldData(newArr);
    };

    return (
        <div className="space-y-4 border border-blue-200 rounded-md p-4 bg-blue-50">
            <h4 className="text-blue-600 font-medium">{title}</h4>
            
            {/* Number of Data sets */}
            <div className="flex items-center gap-4 text-sm">
                <label className="text-gray-700 whitespace-nowrap">
                    Number of Data set:
                </label>
                <input
                    type="number"
                    min="1"
                    max={fieldOptions.length}
                    value={datasets.toString().padStart(2, '0')}
                    onChange={handleDatasetCountChange}
                    className="w-16 px-3 py-1 border border-gray-300 rounded-md bg-white text-center focus:ring-blue-500"
                />
            </div>

            {/* Field Mapping Inputs */}
            <label className="text-gray-700 block mt-2 text-sm">Input all field Data:</label>
            <div className="space-y-2">
                {Array.from({ length: datasets }, (_, index) => (
                    // In a real app, this would be a sophisticated dropdown/FieldDataInput component
                    <select
                        key={index}
                        value={fieldData[index] || fieldOptions[index] || fieldOptions[0]}
                        onChange={(e) => handleFieldChange(index, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                    >
                        {fieldOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                ))}
            </div>
        </div>
    );
};


export default function WidgetConfiguration({
  onConfigChange,
}: {
  onConfigChange?: (config: any) => void;
}) {
  const chartOptions = [
    { value: "Stacked Bar Chart", label: "Stacked Bar Chart" },
    { value: "Radar Chart", label: "Radar Chart" },
    { value: "Line Chart", label: "Line Chart" },
    { value: "Pie Chart", label: "Pie Chart" },
    { value: "Area Chart", label: "Area Chart" },
    { value: "HateMap Chart", label: "HeatMap Chart" }, // Fixed typo to 'HeatMap'
    { value: "Mailtiline Chart", label: "Multiline Chart" }, // Fixed typo to 'Multiline'
  ];

  const [chartType, setChartType] = useState("Stacked Bar Chart");
  const [widgetTitle, setWidgetTitle] = useState("Campaign Performance");

  // Y-Axis State
  const [yAxisDataSets, setYAxisDataSets] = useState(3);
  const [yAxisFieldData, setYAxisFieldData] = useState(Array(3).fill(""));

  // X-Axis State
  const [numberOfDataSets, setNumberOfDataSets] = useState(7); // Default to 7 for days/weeks
  // Note: xAxisSelectedField is not used in the final configuration logic, using xAxisFieldData instead
  // const [xAxisSelectedField, setXAxisSelectedField] = useState("First field"); 
  const [xAxisFieldData, setXAxisFieldData] = useState(Array(7).fill(""));

  const fieldOptions = [
    "First field",
    "Second field",
    "Third field",
    "Fourth field",
    "Fifth field",
    "Sixth field",
    "Seventh field",
     
  ];

  // Config change effect
  useEffect(() => {
    // Initialize fieldData arrays to match the default number of datasets
    setXAxisFieldData(prev => prev.length === numberOfDataSets ? prev : Array(numberOfDataSets).fill(fieldOptions[0]));
    setYAxisFieldData(prev => prev.length === yAxisDataSets ? prev : Array(yAxisDataSets).fill(fieldOptions[0]));
  }, []);
  
  useEffect(() => {
    if (onConfigChange) {
      onConfigChange({
        chartType,
        widgetTitle,
        // Removed xAxisSelectedField as it's typically handled by the fieldData array
        xAxisFieldData,
        yAxisFieldData,
      });
    }
  }, [chartType, widgetTitle, xAxisFieldData, yAxisFieldData]);

  // Use the stub component for a cleaner and functional configuration view
  const configProps = { fieldOptions, defaultDatasets: 3 };

  return (
    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-xl max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Widget Configuration</h2>
        <X className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <div className="space-y-6">
        {/* Chart Type */}
        <div className="border border-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            {chartType ? `${chartType} Widget Details` : "Select a Chart Widget"}
          </h3>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select Chart Type</option>
            {chartOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        

        {/* X-Axis Config (Data Mapping for X-Axis) */}
        {/* Using the DataMappingStub/FieldDataInput component here */}
        <DataMappingStub
            title="Data Mapping for X-Axis"
            datasets={numberOfDataSets}
            setDatasets={setNumberOfDataSets}
            fieldData={xAxisFieldData}
            setFieldData={setXAxisFieldData}
            fieldOptions={fieldOptions}
            defaultDatasets={7}
        />

        {/* Y-Axis Config (Data Mapping for Y-Axis) */}
        {/* Using the DataMappingStub/FieldDataInput component here */}
        <DataMappingStub
            title="Data Mapping for Y-Axis"
            datasets={yAxisDataSets}
            setDatasets={setYAxisDataSets}
            fieldData={yAxisFieldData}
            setFieldData={setYAxisFieldData}
            fieldOptions={fieldOptions}
            defaultDatasets={3}
        />
      </div>
    </div>
  );
}