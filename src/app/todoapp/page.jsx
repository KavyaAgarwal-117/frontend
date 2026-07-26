import React from 'react'

const TodoApp = () => {
  return (
    <div className='bg-fuchsia-200 py-10 min-h-screen'>
        <h2 className='text-center font-semibold text-3xl'>
            Todo App
        </h2>

        <div className='container mx-auto '>

            <div className='bg-white rounded-xl shadow-lg'>
                <div className='p-3'>
                    <input type="text" 
                    className='px-4 py-2 rounded-lg border block w-full'/>
                </div>

                <div className='border-t p-3'>
                    <p className='text-center text-gray-400 font-semibold'> No Task Found🚫</p>

                    {/* for emojis Windows + Dot(.) */}

                </div>

            </div>
        </div>
    </div>
  )
}

export default TodoApp;