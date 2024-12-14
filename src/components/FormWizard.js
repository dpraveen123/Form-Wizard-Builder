import React, { useState } from 'react'
import { getFromLocalStorage, saveToLocalStorage } from '../utils/persistenceUtils'
import { throttledUpdate } from '../utils/throttleUtils'
import InterestTab from './InterestTab'
import ProfileTab from './ProfileTab'
import SettingsTab from './SettingsTab'
import Tabs from './Tabs'

const FormWizard = () => {
  const [formData, setFormData] = useState(getFromLocalStorage('formWizardData') || {})
  const [currentTab, setCurrentTab] = useState('Profile')

  // Update state with throttling and save to localStorage
  const updateFormData = (field, value) => {
    const updatedData = { ...formData, [field]: value }
    console.log(formData)

    throttledUpdate(data => {
      setFormData(data)
      saveToLocalStorage('formWizardData', data)
    }, updatedData)
  }

  const handleSubmit = () => {
    if (currentTab === 'Settings') {
      console.log('Form Submitted: ', formData)
      alert('Form Submitted Successfully!')
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-4 shadow rounded">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'Profile' && <ProfileTab formData={formData} updateFormData={updateFormData} />}
      {currentTab === 'Interest' && <InterestTab formData={formData} updateFormData={updateFormData} />}
      {currentTab === 'Settings' && <SettingsTab formData={formData} updateFormData={updateFormData} />}
      {currentTab === 'Settings' && (
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      )}
    </div>
  )
}

export default FormWizard
