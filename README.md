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

### Input Format
```
{
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
}

```
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