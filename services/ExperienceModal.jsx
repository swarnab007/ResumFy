import React from "react";
import Modal from "react-modal";

const ExperienceLevelModal = ({ isOpen, onClose, onSelect }) => {
  const levels = ["Fresher", "Intermediate", "Advanced"];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Experience Level"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Select Your Experience Level
        </h2>
        <ul className="space-y-4">
          {levels.map((level) => (
            <li key={level}>
              <button
                onClick={() => onSelect(level)}
                className="w-full px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-300"
              >
                {level}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 text-lg font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ExperienceLevelModal;
