import React from 'react';

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ visible, title, message, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 w-4/5 md:w-1/3 text-center z-10">
        <h2 className="text-2xl font-bold mb-4 text-green-500">{title}</h2>
        <p className="text-base text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-500 py-2 px-8 rounded-md text-white text-lg hover:bg-green-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
