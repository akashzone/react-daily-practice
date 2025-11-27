import {useState} from 'react';

export default function Todo(){
    
    const [todoList,setTodoList] = useState([]);
    const [input,setInput] = useState("");

    function handleTaskAdd(){
        const tasks = [...todoList,input];
        setTodoList(tasks);
        setInput("");
    }
    return (
        <>
        <input type="text" placeholder="Enter todo item" 
        value={input} 
        onChange={(e)=>{
            setInput(e.target.value);
        }}
        />
        <button onClick={handleTaskAdd}>Add Task</button>
        <br></br>
        <br></br>
        <hr></hr>
        <h1>Tasks ToDo</h1>
        <ul>
            {todoList.map((task,index)=>(
                <li key={index}>{task}</li>
            ))}
        </ul>
        </>
    );
}