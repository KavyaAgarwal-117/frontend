"use client";
import React, { useState } from "react";

const TodoApp = () => {
  //let count = 0;

  // const [count, setCount] = useState(0)
  // ctrl + space = for all the other options or change scrolls which can be seen down

  const [tasklist, setTasklist] = useState([
    {text: 'kapde dhona', completed : false },
    {text: 'bartan dhona', completed : false },
    {text: 'hisab banana', completed : false },
    {text: 'Learn react', completed : false }
  ]);

  const addNewTask =(e) => {
    if(e.code === 'Enter'){
        console.log(e.target.value);

        e.target.value = '';
    }
  }

  return (
    <div className="bg-fuchsia-200 py-10 min-h-screen">
      <h2 className="text-center font-semibold text-3xl">Todo App</h2>

      <div className="container mx-auto ">
        {/* <h1 className='text-2xl'> Count : {count} </h1>
            <button 
            onClick={() => {setCount(count + 1);console.log(count);
            }} 
            className='border p-3'>Add Count
            </button> */}

        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-3">
            <input
              onKeyDown={addNewTask}
              type="text"
              className="px-4 py-2 rounded-lg border block w-full"
            />
          </div>

          <div className="border-t p-3">

            {
                tasklist.length === 0 ? (<p className="text-center text-gray-400 font-semibold">
              No Task Found🚫
            </p>
            ) : (
                tasklist.map((task) => {
                    return <div>
                        <p>{task.text}</p>
                    </div>
                })
            )
            }
            
            
            {/* for emojis Windows + Dot(.) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
