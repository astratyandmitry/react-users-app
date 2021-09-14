import React from 'react'
import { User } from '../types'
import UserItem from './UserItem'

interface UsersListProps {
  users: User[]
}

function UsersList ({ users }: UsersListProps) {
  return (
    <div className="border rounded-md divide-y">
      {users.map((user: User) => (
         <UserItem user={user} key={user.id}/>
      ))}
    </div>
  )
}

export default UsersList
