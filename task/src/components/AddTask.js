import {useState} from 'react';


const AddTask = ({submitForm}) => {
    let [text, setText] = useState('');
    let [day, setDate] = useState('');
    let [remainder, setRemainder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('pplease add task')
            return
        }
        if(!day) {
            alert('please add day')
            return
        }

        submitForm({text, day, remainder})
        setText('');
        setDate('');
        setRemainder(false);
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add task' value={text} onChange ={(e) => setText(text = (e.target.value))}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text'placeholder='Add day and time' value={day} onChange ={(e) => setDate(day = (e.target.value))}/>
        </div>
        <div className='form-control form-control-check' checked={remainder} value={remainder} onChange ={(e) => setRemainder(remainder = (e.currentTarget.checked))}>
            <label>Set Reminder</label>
            <input type='checkbox'/>
        </div>
        <input type='submit' className='btn btn-block' value='Save Task'/>
    </form>
  )
}

export default AddTask