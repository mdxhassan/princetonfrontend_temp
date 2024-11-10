// src/components/DoctorForm.js
import React, { useState } from 'react';

function DoctorForm({ goToPreviousStep }) {
  const [medications, setMedications] = useState([
    { medicine: '', repeat: '', duration: '', sideEffects: '' } // Initial medication entry with side effects
  ]);

  const addMedication = () => {
    setMedications([...medications, { medicine: '', repeat: '', duration: '', sideEffects: '' }]);
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = medications.map((medication, i) =>
      i === index ? { ...medication, [field]: value } : medication
    );
    setMedications(updatedMedications);
  };

  const removeMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Doctor's Input</h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Doctor's Name</label>
              <input type="text" placeholder="Doctor's name" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Visit</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Initial diagnosis and thoughts</label>
            <textarea placeholder="Type diagnosis" className="w-full border border-gray-300 rounded-lg p-2 h-24"></textarea>
          </div>

          {/* Medications Section */}
          <h3 className="text-xl font-semibold mb-2">Medications</h3>
          {medications.map((medication, index) => (
            <div key={index} className="mb-4">
              {/* Row 1: Medicine, Repeat, Duration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Medicine</label>
                  <input
                    type="text"
                    placeholder="Enter medication"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={medication.medicine}
                    onChange={(e) => handleMedicationChange(index, 'medicine', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Repeat</label>
                  <input
                    type="text"
                    placeholder="Every X hours"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={medication.repeat}
                    onChange={(e) => handleMedicationChange(index, 'repeat', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Duration</label>
                  <input
                    type="text"
                    placeholder="For X days"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={medication.duration}
                    onChange={(e) => handleMedicationChange(index, 'duration', e.target.value)}
                  />
                </div>
              </div>

              {/* Row 2: Potential Side Effects and Remove Button */}
              <div className="flex items-center mt-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Potential Side Effects</label>
                  <input
                    type="text"
                    placeholder="Enter side effects"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={medication.sideEffects}
                    onChange={(e) => handleMedicationChange(index, 'sideEffects', e.target.value)}
                  />
                </div>
                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeMedication(index)}
                  className="ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Remove medication"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Add Medication Button */}
          <div className="mb-4">
            <button
              type="button"
              onClick={addMedication}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Add Medication
            </button>
          </div>

          <div className="flex justify-between">
            {/* Back Button */}
            <button
              type="button"
              onClick={goToPreviousStep}
              className="text-gray-500"
            >
              Back
            </button>
            
            {/* Finish Button */}
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorForm;
