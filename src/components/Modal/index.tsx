import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700 float-right"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
