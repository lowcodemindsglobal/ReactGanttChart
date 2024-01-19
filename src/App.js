// App.js

import React, { useState, useEffect } from "react";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "./App.css";

function App() {
  // const [tasks, setTasks] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#ffbb54"); // Common color for all tasks
  const tasks = [
    {
      start: "2020-03-10",
      end: "2020-03-17",
      name: "Development",
      id: "Task3",
      type: "project",
      progress: 75,
      isDisabled: false,
      project: "test",
    },
    {
      start: "2020-03-17",
      end: "2020-04-02",
      name: "Deployment",
      id: "Task4",
      type: "project",
      progress: 45,
      isDisabled: false,
      dependencies: ["Task3"],
    },
    {
      start: "2020-03-17",
      end: "2020-04-02",
      name: "Deployment",
      id: "Task5",
      type: "project",
      progress: 45,
      isDisabled: false,
      dependencies: ["Task4", "Task3"],
    },
  ];
  const tasksWithDateObjects = tasks.map((task) => ({
    ...task,
    start: new Date(task.start),
    end: new Date(task.end),
  }));
  // Function to set tasks directly from Appian component's XML parameter
  // const handleNewValue = (newTask) => {
  //   try {
  //     const tasksWithDateObjects = newTask.tasks.map(task => ({
  //       ...task,
  //       start: new Date(task.start),
  //       end: new Date(task.end),
  //     }));
  //     setTasks(tasksWithDateObjects);
  //   } catch (error) {
  //     console.error('Error parsing JSON file:', error);
  //   }
  // };

  // // Attach the event handler to Appian.Component.onNewValue
  // useEffect(() => {
  //   Appian.Component.onNewValue(handleNewValue);
  // }, []); // Empty dependency array to ensure the effect runs only once on mount

  const handleColorChange = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  const tasksWithStyles = tasksWithDateObjects.map((task) => ({
    ...task,
    styles: {
      progressColor: selectedColor || "#ffbb54",
      progressSelectedColor: selectedColor || "#ffbb54",
    },
  }));

  return (
    <div>
      {tasks.length > 0 ? (
        <div>
          <div className="colorPickerContainer">
            <p>Select Tasks Colour:</p>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>
          <Gantt tasks={tasksWithStyles} />
        </div>
      ) : (
        <p>
          No tasks loaded. Fetch tasks from Appian component's XML parameter.
        </p>
      )}
    </div>
  );
}

export default App;
