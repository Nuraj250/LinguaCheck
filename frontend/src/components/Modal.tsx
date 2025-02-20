type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  };
  
  const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <button className="absolute top-2 right-2" onClick={onClose}>
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  