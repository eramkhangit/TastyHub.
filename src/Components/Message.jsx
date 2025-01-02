import React from 'react'

function Message() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
      <p className="text-lg font-semibold text-gray-800">message</p>
    </div>
    <button 
    //   onClick={onBack} 
      className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition-colors"
    >
      Back
    </button>
  </div>
  )
}

export default Message