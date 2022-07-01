import React, { useState } from 'react';
import Footer from './Footer';
import './Home.css'


const Home = () => {


    const [inputVal, setInputval] = useState('')
    const [todos, setTodos] = useState([])

    const addToDo = (event) => {

        event.preventDefault()
        setTodos([...todos, { text:inputVal, done: false }])
        setInputval('');
    }

    return (
        <div>
            <div className='input-field'>

                <form onSubmit={event => addToDo(event)}>

                    <input type="text" className='text-black' placeholder='Do your task ' value={inputVal} onChange={e => setInputval(e.target.value)} />
                </form>

                <ul>

                    {todos.map(todo => (
                        <li className='text-white'>
                            <input type={'checkbox'} checked={todo.done} /> 
                            {todo.text}
                            
                             </li>
                           
                    ))}

                </ul>
                <button  className='btn btn-primary' onClick={addToDo}> Enter Task</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;