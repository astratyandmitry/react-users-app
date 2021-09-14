import React from 'react'
import { User } from '../types'

interface UserItemProps {
  user: User;
}

function UserItem ({ user }: UserItemProps) {
  return (
    <div className="p-4 hover:bg-gray-50 flex items-center justify-between group animated duration-200">
      <div>
        <div className="text-lg text-pink-600">{user.name}</div>
        <div className="text-sm text-gray-600">{user.gender}, {user.age} y.o.</div>
      </div>
      <div className="animated duration-200 opacity-0 group-hover:opacity-100">
        <button type="button" className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded hover:bg-red-600 hover:text-white">
          Delete
        </button>
      </div>
    </div>
  )
}

export default UserItem
