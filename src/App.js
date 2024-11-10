// src/App.js
import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import DoctorForm from './components/DoctorForm';

function App() {
  // Step state: 1 for PatientForm, 2 for DoctorForm
  const [step, setStep] = useState(1);

  // Function to go to the next step
  const goToNextStep = () => {
    setStep(step + 1);
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="App">
      {step === 1 && <PatientForm goToNextStep={goToNextStep} />}
      {step === 2 && <DoctorForm goToPreviousStep={goToPreviousStep} />}
    </div>
  );
}

export default App;
