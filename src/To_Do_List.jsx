import React, { useState } from 'react'

const To_Do_List = () => {
  const [Task,SetTasks] = useState([]);
  const [NewTask,SetNewTask]=useState("");
  function IChange(event)
  {
SetNewTask(event.target.value)
  }
  function AddTask()
  {
    if(NewTask.trim() !==""){
      SetTasks(t =>[...Task,NewTask]);
      SetNewTask("");
    }
  }
  const enterkey =(e)=>{
    if (e.key === "Enter"){
      AddTask();
    }
  }
  function DeleteTask(index)
  {
  const UpdatedTask =Task.filter((_, i) => i !== index);
  SetTasks(UpdatedTask);
  }
  
  function TaskUp(index)
  {
if(index>0)
  {
    const UpdatedTask = [...Task];
  [UpdatedTask[index],UpdatedTask[index-1]]=
  [UpdatedTask[index-1],UpdatedTask[index]];
  SetTasks(UpdatedTask)
  }
  }
  function taskDown(index)
  {
    if(index <Task.length-1)
      {
        const UpdatedTask = [...Task];
      [UpdatedTask[index],UpdatedTask[index+1]]=
      [UpdatedTask[index+1],UpdatedTask[index]];
      SetTasks(UpdatedTask);
      }
  }
  return ( <div>
      <div className="to-do-list">
      <h1>To-Do List</h1>
      <input type="text" placeholder='Enter a Task' value={NewTask}onChange={IChange} onKeyDown={enterkey} />
      <button className='Add-Button'onClick={AddTask}>Add</button>
      </div>
      <ol>
        {Task.map((Task,index)=> <li key={index}>
          <span className='text'>{Task} </span>
          <button className='Delete-Button' text="delete" onClick={()=>DeleteTask(index)}>🗑</button>
          <button className='Up-Button' onClick={()=>TaskUp(index)}>⬆️</button>
          <button className='Down-Button' onClick={()=>taskDown(index)}>⬇️</button>
        </li>)}
      </ol>
    </div>);
}

export default To_Do_List
