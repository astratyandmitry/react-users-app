import React, { useState } from 'react'
import { User, UserGender } from './types'
import UsersList from './components/UsersList'
import NewUserFrom from './components/NewUserFrom'

const INIT_USERS: User[] = [
  { id: 'u1', name: 'Dmitry', age: 27, gender: UserGender.Male },
  { id: 'u2', name: 'Luiza', age: 20, gender: UserGender.Female },
  { id: 'u3', name: 'Ararat', age: 28, gender: UserGender.Male },
  { id: 'u4', name: 'Rida', age: 25, gender: UserGender.Female },
]

function App () {
  const [users, setUsers] = useState(INIT_USERS)

  const handleUserCreated = (user: User): void => {
    setUsers((prevState => {
      return [user, ...prevState]
    }))
  }

  return (
    <div className="w-1/2 my-16 mx-auto">
      <NewUserFrom onUserCreated={handleUserCreated}/>

      <UsersList users={users}/>
    </div>
  )
}

export default App
