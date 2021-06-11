import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



const TodosList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const ac = new AbortController()
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                setTodos(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });

            ac.abort()
        }, []);


    return (
        <div>
            <h3>Todos List</h3>
            <table className="table table-stripped" style={{ marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <tr key={i}>
                            <td className={!todo.todo_completed ? 'completed' : 'not_completed'}>{todo.todo_description}</td>
                            <td className={!todo.todo_completed ? 'completed' : 'not_completed'}>{todo.todo_responsible}</td>
                            <td className={!todo.todo_completed ? 'completed' : 'not_completed'}>{todo.todo_priority}</td>
                            <td>
                                <Link to={"/edit/"+todo._id}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default TodosList;