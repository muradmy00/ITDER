/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { BasicContext } from "../../ContextAPIs/BasicProvider";

const ImageModal = ({ isOpen, setIsOpen }) => {
  const { modalImage } = useContext(BasicContext);

  return (
    <div className={isOpen? 'bg-primary1' : ""}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-none bg-_white text-left align-middle shadow-xl transition-all">
                  <div
                    onClick={() => setIsOpen(false)}
                    className="absolute right-0 hover:cursor-pointer bg-primary2 p-1"
                  >
                    <FaRegWindowClose className="text-3xl" />
                  </div>
                  <img src={modalImage} className="w-full h-full" alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ImageModal;
