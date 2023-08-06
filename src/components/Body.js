import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

function Body() {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        addDoc(collection(db, `user/${user.uid}/todos`), {
            todoName: input,
            status: false,
            time: new Date(),
        }).then(() => {
            setInput("");
            setShowAddTodoModal(false)
        }).catch((err) => alert(err.message));
    }
    useEffect(() => {
        onSnapshot(collection(db, `user/${user.uid}/todos`), (snapshot) => {
            setTodos(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        todoName: doc.data().todoName,
                        status: doc.data().status,
                        time: doc.data().time.toDate(),
                    }
                })
            )
        });
    }, [])

    return (
        <div>
            <div className="flex items-center justify-between p-3 m-5">
                <h2 className="text-2xl font-bold">My Task Manager</h2>
                <button onClick={() => setShowAddTodoModal(true)} className="bg-green-400 text-sm font-bold text-white rounded-lg hover:scale-110 p-3 transition-all">Add Task</button>
            </div>
            {showAddTodoModal && (
                <div className="flex items-center justify-center">
                <div className="max-w-2xl flex items-center justify-between p-2 w-full">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter a Task" className="flex-1 bg-gray-200 mr-2 p-3 rounded-lg outline-none" />
                    <button onClick={addTodo} className="bg-green-400 text-sm font-bold text-white rounded-lg hover:scale-110 p-3 transition-all">Add Task</button>
                </div>
                </div>
            )}
            <div className="flex items-center justify-center flex-col">
                {todos?.map((todo) => (
                    <TodoCard 
                        key={todo.id} 
                        id={todo.id} 
                        todoName={todo.todoName} 
                        status={todo.status} 
                        time={todo.time} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Body
