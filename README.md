# Gantt Chart
GantChart is an appian component plugin which supports the various features needed in the Gantt Chart Component in Appian. It can be used as a custom component inside SAIL code in Appian.

### Developement
```
npm install
npm start
```

### Build
- build with esbuild
```
npm run build
```
- config corresponding to esbuild is located in `package.json` scripts
```
"build": "esbuild src/index.js --bundle --outfile=ganttChart.js --loader:.js=jsx --format=cjs"
```
### Component Usage

### Task

| Parameter Name | Type     | Description                                                                                           |
| :------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| id\*           | string   | Task id.                                                                                              |
| name\*         | string   | Task display name.                                                                                    |
| type\*         | string   | Task display type: **task**, **milestone**, **project**                                               |
| start\*        | Date     | Task start date.                                                                                      |
| end\*          | Date     | Task end date.                                                                                        |
| progress\*     | number   | Task progress. Sets in percent from 0 to 100.                                                         |
| dependencies   | string[] | Specifies the parent dependencies ids.                                                                |
| styles         | object   | Specifies the taskbar styling settings locally. Object is passed with the following attributes:       |
|                |          | - **backgroundColor**: String. Specifies the taskbar background fill color locally.                   |
|                |          | - **backgroundSelectedColor**: String. Specifies the taskbar background fill color locally on select. |
|                |          | - **progressColor**: String. Specifies the taskbar progress fill color locally.                       |
|                |          | - **progressSelectedColor**: String. Specifies the taskbar progress fill color globally on select.    |
| isDisabled     | bool     | Disables all action for current task.                                                                 |
| fontSize       | string   | Specifies the taskbar font size locally.                                                              |
| project        | string   | Task project name                                                                                     |
| hideChildren   | bool     | Hide children items. Parameter works with project type only                                           |
```
{
  ganttChart(
    label: "Gantt Chart",
    labelPosition: "ABOVE",
    validations: {},
    height: "AUTO",
    tasks: ri!tasks
  )
}
```

### Gantt Chart without Dependencies
```
a!localVariables(
  local!tasks:{
    {
      "start": "2020-03-01",
      "end": "2020-03-05",
      "name": "Idea",
      "id": "Task1",
      "type": "task",
      "progress": 45,
      "isDisabled": true
    },
    {
      "start": "2020-03-02",
      "end": "2020-03-10",
      "name": "Test",
      "id": "Task2",
      "type": "task",
      "progress": 45,
      "isDisabled": true    
    },
      {
        "start": "2020-03-10",
        "end": "2020-03-17",
        "name": "Development",
        "id": "Task3",
        "type": "task",
        "progress": 45,
        "isDisabled": true    
    },
    {
        "start": "2020-03-17",
        "end": "2020-04-02",
        "name": "Deployment",
        "id": "Task4",
        "type": "task",
        "progress": 45,
        "isDisabled": true    
    }
},
  {
  ganttChart(
    label: "Gantt Chart",
    labelPosition: "ABOVE",
    validations: {},
    height: "AUTO",
    tasks: local!tasks
  )
})

```
![alt text](images/sample%202.png "Gantt chart without Dependencies")
### Sample Gantt chart with Dependencies
```

a!localVariables(
  local!tasks: {
    {
      "start": "2020-03-01",
      "name": "Kick Start",
      "id": "Task1",
      "type": "milestone",
      "progress": 10,
      "isDisabled": true    
    },
    {
      "start": "2020-03-02",
      "end": "2020-03-04",
      "name": "Requirement",
      "id": "Task2",
      "type": "task",
      "progress": 10,
      "isDisabled": true,
      "dependencies": {"Task1"}
    },
    {
      "start": "2020-03-04",
      "end": "2020-03-06",
      "name": "Development",
      "id": "Task3",
      "type": "project",
      "progress": 25,
      "isDisabled": true,
      "dependencies": {"Task2"}
    },
    {
      "start": "2020-03-06",
      "end": "2020-03-08",
      "name": "Deployment",
      "id": "Task4",
      "type": "task",
      "progress": 0,
      "isDisabled": true  ,
      "dependencies": {"Task3"}
    },
    {
      "start": "2020-03-09",
      "name": "Final Demo",
      "id": "Task5",
      "type": "milestone",
      "progress": 10,
      "isDisabled": true  ,
      "dependencies": {"Task4"}
    }
  },
  {
  ganttChart(
    label: "Gantt Chart",
    labelPosition: "ABOVE",
    validations: {},
    height: "AUTO",
    tasks: local!tasks
  )
})
```
![alt text](images/sample%201.png "Gantt chart with Dependencies")
### Verify Used Dependencies
```
npx depcheck
npm uninstall <package-name>
```
- If `depcheck` is not present
```
npm install -g depcheck
```
- Remove unused dependencies
```
npm uninstall <package-name>
```
### Reference
- Library:- https://github.com/MaTeMaTuK/gantt-task-react