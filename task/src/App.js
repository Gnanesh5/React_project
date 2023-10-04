import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  // const name = "Gnanesh"
  let [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  },[])

//fetch tasks

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
}

//delete task
const deletetask = async (id) => {

  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id));
}

//toggle remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

//submitting the form
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {method: 'POST',
header: {
  'content-type':'application/json'
}, 
body: JSON.stringify(task)})

const data = await res.json();

setTasks([...tasks, data]);
    // const id = Math.floor(Math.random()* 10000) + 1;
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    // console.log(newTask)
    // console.log(tasks)
}

//show form
const showForm = () => {
  setShowAdd(!showAdd)
}

  return (
    <Router>
    <div className="container">
        
        <Routes>
          <Route path='/' exact element={App}render={(props) => (
            <>
            {/* fucked up the router concept */}
              <Header title="Task Tracker" showForm={showForm} showAdd={showAdd}/>
              {showAdd ? <AddTask submitForm = {addTask}/>: ''}
              {tasks.length > 0 ?<Tasks task = {tasks} onDelete = {deletetask} onToggle={toggleRemainder}/> : 'No tasks to show'}
            </>
  )}/>
          {/* <Route path='/about' Component={About}/> */}
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
