import React from 'react';
import Link from 'next/link';


interface DangerousHTML {
    __html: string;
}  
interface ModalProps {
    visible: boolean;
    status: "loading" | "authenticated" | "unauthenticated"
    content: DangerousHTML;
    onClose: () => void;
}
  

const Modal: React.FC<ModalProps> = ({ visible, content, onClose, status }) => {
  if (!visible) return null;

  return (
    <div className="z-[100] overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Drawing Info</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[70vh]">
            <div
              className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={content}
            />
          </div>
          <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Link href="/pricing" onClick={onClose} className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
