// src/components/PatientForm.js
import React, { useState } from 'react';

function PatientForm({ goToNextStep }) {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Patient Information</h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" placeholder="Your first name" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" placeholder="Your last name" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" placeholder="Enter mobile number" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" placeholder="Enter patient address" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Symptoms</label>
            <textarea placeholder="Type patient complaints" className="w-full border border-gray-300 rounded-lg p-2 h-24"></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Pre-existing conditions</label>
            <input type="text" placeholder="Any pre-existing conditions" className="w-full border border-gray-300 rounded-lg p-2" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Past medical reports</label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center text-gray-500">
              <input
                type="file"
                multiple
                accept=".pdf, .jpg, .jpeg, .png, .gif"
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />
              <label htmlFor="fileUpload" className="cursor-pointer text-blue-500 hover:text-blue-700">
                Upload a file or drag and drop
              </label>
              <p className="text-xs mt-1">PDF, JPG, PNG, GIF up to 10MB each</p>
              {/* Display selected file names */}
              {selectedFiles && (
                <div className="mt-2 text-sm text-gray-600">
                  <ul>
                    {Array.from(selectedFiles).map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={goToNextStep} // Call goToNextStep on click
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
