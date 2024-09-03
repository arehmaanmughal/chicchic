import { Close } from "@mui/icons-material";
import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <button
          onClick={onClose}
          className="text-black float-right mb-2"
        >
          <Close/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
