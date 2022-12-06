import { useState } from 'react';
import Input from './component/input/input';
import Todo from './todo/todo';
import { useRef } from 'react';
import Deletetodo from './todo/deletetodo';




function List(props) {
    const ref = useRef(null);
    const [ToDoList, setToDoList] = useState("");
    const [Answer, setAnswer] = useState([]);
    const addToDoList = (e) => {
        setToDoList(e.target.value);
    }
    const deleteToDo = (value) => {
       setAnswer(Answer.filter((t)=> t !== value ))
    }
    const show = () => {
        if (ToDoList != ""){
        setAnswer([...Answer, ToDoList]);
        setToDoList("")}
    }
 const coba =() =>{
    
 }
    return (
        <>
            <div className="container">
                <div class="input">
                    
                        <input type="text" class="inptxt"value={ToDoList} onChange={addToDoList} />
                   
                    <input type="submit" class="submit btn btn-primary" value="submit" onClick={show} />
                </div>
                <div class="hasil">
                    {Answer.map((value, index) => {
                        return (
                            
                            <div class="item bg-primary "id={index} >
                                
                                <Todo value={value} key={index} index={index} fungsi={() => {
                                    deleteToDo(value)
                                }} /></div>
                        )
                    })}
                </div>

            </div>
        </>


    );

}

export default List;
