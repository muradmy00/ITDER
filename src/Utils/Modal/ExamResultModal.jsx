import { Dialog, Transition } from "@headlessui/react";
import Lottie from "lottie-react";
import { Fragment } from "react";
import lottie from "../../assets/Lottie/Animation1716787300392.json"

const ExamResultModal = ({ isOpen, setIsOpen, result }) => {
    return (
        <>
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
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-hidden">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-md bg-white text-left align-middle py-4 px-2 shadow-xl transition-all">
                    <div className="">
                      <Lottie animationData={lottie} loop={false} />
                      <div>
                        {/* <h1 className="text-center flex flex-col">Your Marks is <span className="text-text_secondary text-text_lg font-semibold">35</span></h1> */}
                        {result}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
};

export default ExamResultModal;