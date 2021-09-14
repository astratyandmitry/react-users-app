import React, { useState } from 'react'

interface ModalErrorProps {
  message: string | null;
  isVisible: boolean;

  onDismiss (): void;
}

function ModalError ({ message, isVisible = false, onDismiss }: ModalErrorProps) {
  return (
    <div
      className={`fixed inset-0 z-10 bg-black bg-opacity-75 flex items-center justify-center ${isVisible ? '' : 'hidden'}`}>
      <div className="w-96 bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-4 bg-pink-600 text-white flex items-center justify-between space-x-4">
          <div className="text-xl">Error Message</div>
          <button onChange={onDismiss}
                  className="w-5 h-5 bg-pink-800 rounded-full text-pink-600 inline-flex items-center justify-center font-medium cursor-pointer hover:bg-white">
            x
          </button>
        </div>
        <div className="p-4 text-gray-800">
          {message}
        </div>
        <div className="border-t border-gray-100 p-4">
          <button type="button" onClick={onDismiss}
                  className="bg-pink-100 px-4 py-2 rounded text-pink-600 text-sm font-medium hover:text-pink-700 hover:bg-pink-200">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalError
