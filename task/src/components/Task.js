import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
        {/* {props.task.map((task) =>(<h3 key={task.id}>{task.text}</h3>))} */}
        <h3>{task.text}<FaTimes style = {crossStyle} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}
const crossStyle = {
    color: 'red',
    cursor: 'pointer',
}

export default Task