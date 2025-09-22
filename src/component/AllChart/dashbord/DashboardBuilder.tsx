import React, { useState } from "react";
import ProgramSelector from "./ProgramSelector";
import ProjectSelector from "./ProgramSelector";
import WidgetLibrary from "./WidgetLibrary";
import DashboardStats from "./DashboardStats";
import CanvasArea from "./CanvasArea";
import { widgets, projects, programs, dashboardStats } from "./WidgetLibaryData";
import { unparse } from "papaparse";

// const DashboardBuilder = () => {
//     const [canvasWidgets, setCanvasWidgets] = useState([]);
//     const [selectedProgram, setSelectedProgram] = useState("");
//     const [selectedProject, setSelectedProject] = useState("");
//     const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
//     const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
//   const [chartData, setChartData] = useState( );
//   const [isCopied, setIsCopied] = useState(false);

//     const handleProgramSelect = (program) => {
//         setSelectedProgram(program);
//         setProgramDropdownOpen(false);
//     };

//     const handleProjectSelect = (project) => {
//         setSelectedProject(project);
//         setProjectDropdownOpen(false);
//     };

//     const handleWidgetDragStart = (e, widget) => {
//         e.dataTransfer.setData("application/json", JSON.stringify(widget));
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         const widgetData = JSON.parse(e.dataTransfer.getData("application/json"));
//         const rect = e.currentTarget.getBoundingClientRect();

//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const newWidget = {
//             ...widgetData,
//             id: `${widgetData.id}-${Date.now()}`,
//             x,
//             y,
//         };

//         setCanvasWidgets((prev) => [...prev, newWidget]);
//     };

//     const handleDragOver = (e) => e.preventDefault();

//     const removeWidget = (widgetId) => {
//         setCanvasWidgets((prev) => prev.filter((w) => w.id !== widgetId));
//     };

// const handleCopy = () => {
//      const csvString = unparse(rawData, {
//       quotes: false,
//       delimiter: ",",
//       header: true,
//     });
//     navigator.clipboard.writeText(csvString);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 2000);
//   };

//     return (
//         <div className="flex h-screen bg-gray-50">
//             {/* Sidebar */}
//             <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
//                 <ProgramSelector
//                     selectedProgram={selectedProgram}
//                     setProgramDropdownOpen={setProgramDropdownOpen}
//                     programDropdownOpen={programDropdownOpen}
//                     programs={programs}
//                     handleProgramSelect={handleProgramSelect}
//                 />
//                 <ProjectSelector
//                     selectedProject={selectedProject}
//                     setProjectDropdownOpen={setProjectDropdownOpen}
//                     projectDropdownOpen={projectDropdownOpen}
//                     projects={projects}
//                     handleProjectSelect={handleProjectSelect}
//                 />
//                 <WidgetLibrary
//                     widgets={widgets}
//                     handleWidgetDragStart={handleWidgetDragStart}
//                 />
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 <DashboardStats stats={dashboardStats} />
//                 <CanvasArea
//                     canvasWidgets={canvasWidgets}
//                     handleDrop={handleDrop}
//                     handleDragOver={handleDragOver}
//                     removeWidget={removeWidget}
//                     handleCopy={handleCopy}
//                 />
//             </div>
//         </div>
//     );
// };

const DashboardBuilder = () => {
  const [canvasWidgets, setCanvasWidgets] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setProgramDropdownOpen(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setProjectDropdownOpen(false);
  };

  const handleWidgetDragStart = (e, widget) => {
    e.dataTransfer.setData("application/json", JSON.stringify(widget));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const widgetData = JSON.parse(e.dataTransfer.getData("application/json"));
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newWidget = {
      ...widgetData,
      id: `${widgetData.id}-${Date.now()}`,
      x,
      y,
    };

    setCanvasWidgets((prev) => [...prev, newWidget]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeWidget = (widgetId) => {
    setCanvasWidgets((prev) => prev.filter((w) => w.id !== widgetId));
  };

  // ✅ Now handle copy per-widget
  const handleCopy = (chartData) => {
    if (!chartData || chartData.length === 0) return;

    const csvString = unparse(chartData, {
      quotes: false,
      delimiter: ",",
      header: true,
    });

    navigator.clipboard.writeText(csvString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
        <ProgramSelector
          selectedProgram={selectedProgram}
          setProgramDropdownOpen={setProgramDropdownOpen}
          programDropdownOpen={programDropdownOpen}
          programs={programs}
          handleProgramSelect={handleProgramSelect}
        />
        <ProjectSelector
          selectedProject={selectedProject}
          setProjectDropdownOpen={setProjectDropdownOpen}
          projectDropdownOpen={projectDropdownOpen}
          projects={projects}
          handleProjectSelect={handleProjectSelect}
        />
        <WidgetLibrary
          widgets={widgets}
          handleWidgetDragStart={handleWidgetDragStart}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardStats stats={dashboardStats} />
        <CanvasArea
          canvasWidgets={canvasWidgets}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          removeWidget={removeWidget}
          handleCopy={handleCopy} // ✅ pass it down
          isCopied={isCopied}     // optional, for showing status
        />
      </div>
    </div>
  );
};

export default DashboardBuilder;
