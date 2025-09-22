import React from "react";

const ProgramSelector = ({
  selectedProgram,
  setProgramDropdownOpen,
  programDropdownOpen,
  programs,
  handleProgramSelect,
}) => (
  <div className="p-4 border-b border-gray-100">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Program Name *
    </label>
    <div className="relative">
      <button
        className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm flex items-center justify-between"
        onClick={() => setProgramDropdownOpen(!programDropdownOpen)}
      >
        <span className="text-gray-500">
          {selectedProgram || "Add program or select"}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${
            programDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {programDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
          {programs.map((program, index) => (
            <button
              key={index}
              className="w-full px-3 py-2 text-left hover:bg-gray-50"
              onClick={() => handleProgramSelect(program)}
            >
              {program}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProgramSelector;
