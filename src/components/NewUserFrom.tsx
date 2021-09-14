import React, { useState } from 'react'
import { User, UserGender } from '../types'
import ModalError from './UI/ModalError'

interface NewUserFromProps {
  onUserCreated (user: User): void;
}

function NewUserFrom ({ onUserCreated }: NewUserFromProps) {
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<User>({
    name: '',
    age: 0,
    gender: '',
  })

  const generateUser = (userData: User): User => {
    return {
      id: `u` + Math.round(Math.random()),
      ...userData,
      age: +userData.age,
    }
  }

  const displayErrorMessage = (message: string): void => {
    setErrorMessage(message)
    setErrorModalVisible(true)
  }

  const handleErrorModalDismiss = () => {
    setErrorModalVisible(false)
  }

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevState => {
      return { ...prevState, [e.target.id]: e.target.value }
    }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.name.trim().length === 0) {
      return displayErrorMessage('User name can not be empty. Please, fix that!')
    }

    if (+formData.age <= 0) {
      return displayErrorMessage('Age can not be less than 1 year. Please, fix that!')
    }

    if (formData.gender.trim().length === 0) {
      return displayErrorMessage('User must have a gender. Please, fix that!')
    }

    onUserCreated(
      generateUser(formData)
    )

    setFormData({
      name: '',
      age: 0,
      gender: '',
    })
  }

  return (
    <div className="bg-gray-100 p-8 rounded mb-8">
      <ModalError isVisible={errorModalVisible} onDismiss={handleErrorModalDismiss} message={errorMessage}/>

      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name</label>
            <input type="text" id="name" required
                   className="w-full bg-white px-3 py-2 rounded border"
                   value={formData.name} onChange={handleInputChanged}/>
          </div>

          <div>
            <label htmlFor="age" className="text-sm text-gray-500 font-medium">Age</label>
            <input type="number" id="age" required
                   className="w-full bg-white px-3 py-2 rounded border"
                   value={formData.age} onChange={handleInputChanged}/>
          </div>

          <div>
            <label htmlFor="gender" className="text-sm text-gray-500 font-medium">Gender</label>
            <select id="gender" required className="w-full bg-white px-3 py-2 rounded border"
                    value={formData.gender} onChange={handleInputChanged}>
              <option/>
              {Object.values(UserGender).map((gender: string) => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="w-full block bg-pink-600 text-white p-2 text-sm font-medium rounded">Add new
          User
        </button>
      </form>
    </div>
  )
}

export default NewUserFrom
