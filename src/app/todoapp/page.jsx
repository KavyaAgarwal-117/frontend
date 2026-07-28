"use client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";

const TodoApp = () => {
  //let count = 0;

  // const [count, setCount] = useState(0)
  // ctrl + space = for all the other options or change scrolls which can be seen down

  const [tasklist, setTasklist] = useState([]);

  const addNewTask = (e) => {
    if (!e.target.value.trim()) return;

    if (e.code === "Enter") {
      console.log(e.target.value);

      const newTask = { text: e.target.value, completed: false };
      setTasklist([newTask, ...tasklist]);

      e.target.value = "";
    }
  };

  const deleteTask = (index) => {
    const temp = tasklist;
    temp.splice(index, 1);
    setTasklist([...temp]);
  };

  return (
    <div className="bg-fuchsia-200 py-10 min-h-screen">
      <h2 className="text-center font-semibold text-3xl mb-4">Todo App</h2>

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
            {tasklist.length === 0 ? (
              <p className="text-center text-gray-400 font-semibold">
                No Task Found🚫
              </p>
            ) : (
              tasklist.map((task, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 border mb-3 rounded flex justify-between items-center"
                  >
                    <div className="flex gap-2">
                      <input type="checkbox" 
                      
                      onChange={(e) => {
                        const temp = tasklist;
                        temp[index].completed = e.target.checked;
                        setTasklist([...temp]);
                      }}

                      />
                      <p>{task.text}</p>
                    </div>

                    {task.completed ? (
                      <p className="text-white bg-green-700 p-1 text-sm rounded-full">
                        Completed
                      </p>
                    ) : (
                      <p className="text-white bg-orange-300 p-1 text-sm rounded-full">
                        Pending
                      </p>
                    )}

                    <button className="border p-1 bg-red-400 text-white rounded">
                      <Trash2
                        size={17}
                        onClick={() => {
                          deleteTask(index);
                        }}
                      />
                    </button>
                  </div>
                );
              })
            )}

            {/* for emojis Windows + Dot(.) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
