import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "doc",
        day: "jan 5th",
        reminder: true,
    },
    {
        id: 2,
        text: "meet",
        day: "march 5th",
        reminder: true,
    },
    {
        id: 3,
        text: "food",
        day: "april 5th",
        reminder: false,
    },
])

//Add Task
const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  //console.log("delete", id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  //console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          "No task found"
        )}
    </div>
  );
}

export default App;
