import React from "react";
import WidgetRenderer from "./WidgetRenderer";

const CanvasArea = ({
  canvasWidgets,
  handleDrop,
  handleDragOver,
  removeWidget,
  handleCopy,
  isCopied
}) => (
  <div className="flex-1 p-6 overflow-auto">
    <div
      className="min-h-full rounded-lg relative"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ minHeight: "600px" }}
    >
      {canvasWidgets.map((widget) => (
        <div
          key={widget.id}
          className="absolute p-2"
          style={{
            left: widget.x,
            top: widget.y,
            width: "90%",
            zIndex: 10,
          }}
        >
          <WidgetRenderer
            widget={widget}
           handleCopy={handleCopy} // ✅ pass it down
          isCopied={isCopied} 
            onRemove={() => removeWidget(widget.id)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default CanvasArea;
