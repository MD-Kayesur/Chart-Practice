import React from "react";

const WidgetLibrary = ({ widgets, handleWidgetDragStart }) => (
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Widget Library
    </h3>
    <p className="text-sm text-gray-500 mb-4">Drag widgets to the canvas</p>

    <div className="space-y-3">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          draggable
          onDragStart={(e) => handleWidgetDragStart(e, widget)}
          className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-grab hover:bg-gray-50 hover:border-gray-300"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-lg">{widget.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              {widget.name}
            </h4>
            <p className="text-xs text-gray-500">{widget.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WidgetLibrary;
