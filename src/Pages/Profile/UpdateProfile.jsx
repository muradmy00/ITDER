/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateProfile = ({data, fetchData, isOpen, setIsOpen, setLoader }) => {
  const [animate, setAnimate] = useState(false);
  const axiosSecure = useAxiosSecure();


  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    const name = e.target.name.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const gender = e.target?.gender.value || null;
    const address = e.target.address.value;
    const image = e.target?.image?.files[0] || null;

    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('mobile', mobile)
    formData.append('email', email)
    formData.append('address', address)
    formData.append('gender', gender)
    image && formData.append('image', image)
    

    try {
      const res = await axiosSecure.post(`/api/profile/update`, formData);
      if (res.data.status_code === 201) {
        fetchData();
        toast.success(res.data.message);
        setLoader(false)
      }
    } catch (error) {
        setLoader(false)
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className={`relative z-50`} onClose={handleAnimate}>
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
            <div
              className={`fixed inset-0 overflow-y-auto ${
                animate ? "scale-animation" : ""
              }`}
            >
              <div className="flex min-h-full items-center justify-center text-center border text_font">
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="w-[96%] md:w-[90%] lg:w-[75%] xl:w-[910px] max-w-md:w-[60%] transform rounded-md bg-_white text-left align-middle shadow-xl transition-all my-10 pb-0">
                    <Dialog.Title
                      as="h3"
                      className="border px-4 h-10 bg-bg_selected text-_white text-xl flex items-center justify-between pr-4"
                    >
                      <h6 className="">Update Profile</h6>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-xl"
                      >
                        <IoMdClose />
                      </button>
                    </Dialog.Title>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_primary m-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text">Full Name</span>
                          </label>
                          <input
                            name="name"
                            defaultValue={data?.name}
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text"> Phone</span>
                          </label>
                          <input
                            name="mobile"
                            type="number"
                            defaultValue={data?.mobile}
                            placeholder="Enter your phone number"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text">Email Address</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            defaultValue={data?.email}
                            placeholder="Email address"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text">Gender </span>
                          </label>
                          <select
                            name="gender"
                            defaultValue={data?.gender}
                            className="input input-bordered"
                          >
                            <option value="" disabled selected>
                              Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text">Address</span>
                          </label>
                          <textarea name="address" defaultValue={data?.address} className="textarea textarea-bordered" id=""></textarea>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold label-text">Image</span>
                          </label>
                          <input
                            type="file"
                            className=""
                            name="image"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="border bg-bg_selected text-_white text-xl flex items-center justify-end gap-2 px-4">
                        <button
                          onClick={() => setIsOpen(false)}
                          type="submit"
                          className="button_primary"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="button_delete"
                          onClick={() => setIsOpen(false)}
                        >
                          Cancel
                        </button>{" "}
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default UpdateProfile;
