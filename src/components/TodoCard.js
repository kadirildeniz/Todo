import moment from 'moment/moment'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

function TodoCard({id, todoName, status, time}) {
  const [user] = useAuthState(auth);

  const deleteTodo = (id) => {
    deleteDoc(doc(db,`user/${user.uid}/todos/${id}`));
  };
  
  const updateTodo = (id) => {
    updateDoc(doc(db,`user/${user.uid}/todos/${id}`), {
      status:true,
      time:  new Date(),
    })
  }

  return (
    <div className={`flex items-center justify-between mt-5 p-4 max-w-2xl w-full bg-gray-200 rounded-lg ${status ? 'bg-green-200' : 'bg-red-200'}`}>
        <div className="flex flex-col">
            <p className="font-semibold">{todoName}</p>
            <p className='text-xs mt-2'>{moment(time).format('DD/MM/YYYY HH:mm')}</p>
        </div>
        <div>
            {!status && (
              <button onClick={() => updateTodo(id)} className="bg-green-400 text-sm text-white font-bold p-3 rounded-lg mr-3">Done</button>
            )}
            <button onClick={() => deleteTodo(id)} className="bg-red-400 text-sm text-white font-bold p-3 rounded-lg ">Delete</button>
        </div>
      
    </div>
  )
}

export default TodoCard
