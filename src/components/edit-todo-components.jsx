import React, {useState, useEffect} from "react";
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const EditTodo = (props) => {
    const [todoDescription, setTodoDescription] = useState({});
    const [todoResponsible, setTodoResponsible] = useState({});
    const [todoPriority, setTodoPriority] = useState({});
    const [todoCompleted, setTodoCompleted] = useState(false);

    
    

    useEffect(() => {
        axios.get(`http://localhost:4000/todos/${props.match.params.id}`)
            .then(response => {
                setTodoDescription(response.data.todo_description);
                setTodoResponsible(response.data.todo_responsible);
                setTodoPriority(response.data.todo_priority);
                setTodoCompleted(response.data.todo_completed);
            })
            .catch(function(error) {
                console.log(error)
            })

            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const onChangeTodoDescription = e => {
        const todoDescription = e.target.value;
        setTodoDescription(todoDescription);
    }

    const onChangeTodoResponsible = e => {
        const todoResponsible = e.target.value;
        setTodoResponsible(todoResponsible);
    }

    const onChangeTodoPriority = e => {
        const todoPriority = e.target.value;
        setTodoPriority(todoPriority);
    }

    const onChangeTodoCompleted = e => {
        const todoCompleted = e.target.checked;
        setTodoCompleted(todoCompleted);
    }

    const onSubmit = e => {
        e.preventDefault();
        const obj = {
            todo_description: todoDescription,
            todo_responsible: todoResponsible,
            todo_priority: todoPriority,
            todo_completed: todoCompleted
        }
        axios.post(`http://localhost:4000/todos/update/${props.match.params.id}`, obj)
            .then(res => console.log(res.data));
            props.history.push("/");
            
        console.log(obj);
            
    }
    return (
        <div>
            <h3>Update Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            className="form-control"
                            value={todoDescription}
                            onChange={onChangeTodoDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text"
                            className="form-control"
                            value={todoResponsible}
                            onChange={onChangeTodoResponsible}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={todoPriority === "Low"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Medium"
                                checked={todoPriority === "Medium"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="High"
                                checked={todoPriority === "High"}
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                    <div>
                        <div className="form-check">
                            <input type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckBox"
                                    name="completedCheckBox"
                                    checked={todoCompleted}
                                    value={!todoCompleted}
                                    onChange={onChangeTodoCompleted}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}
export default EditTodo