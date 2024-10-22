/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MemberUpdateModal = ({ fetchData, isOpen, setIsOpen, userInfo, setLoader }) => {

  const [animate, setAnimate] = useState(false);
  const axiosSecure = useAxiosSecure();
  

//   const { data: editFloorData = [] } = useQuery({
//     queryKey: ["member_edit"],
//     queryFn: async () => {
//       const res = await axiosSecure(`/api/floor/${id}`);
//       return res.data;
//     },
//   });


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
    const phone = e.target.phone.value;
    const phone2 = e.target.phone2.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const address_in_uk = e.target.addressUk.value;
    const address_in_ctg = e.target.addressCtg.value;
    const designation = e.target.designation.value;
    const birthDate = e.target?.birthDate.value || null;
    const image = e.target?.image?.files[0] || null;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('address_in_uk', address_in_uk);
    formData.append('address_in_ctg', address_in_ctg);
    formData.append('designation', designation);
    birthDate && formData.append('date_of_birth', birthDate);
    formData.append('phone2', phone2);
    image && formData.append('image', image);

  
    try {
      const res = await axiosSecure.post(`/api/update-member-data/${userInfo.id}`, formData);
      if (res.data.status_code === 201) {
        fetchData();
        toast.success(res.data.message);
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
        toast.error(error.response.data.message)
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
                      <h6 className="">Update Member</h6>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-xl"
                      >
                        <IoMdClose />
                      </button>
                    </Dialog.Title>
                    <form onSubmit={handleSubmit}>
                      <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div className="">
                          <label className="text_color text_font">
                            Full Name
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={userInfo?.name}
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Phone
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="text"
                            name="phone"
                            defaultValue={userInfo?.phone}
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Phone 2
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="text"
                            name="phone2"
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Email
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="email"
                            name="email"
                            defaultValue={userInfo?.email}
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Select Gender
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <select defaultValue={userInfo?.gender} name="gender" className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none" id="">
                            <option disabled >Male</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Birth Date
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="date"
                            name="birthDate"
                            defaultValue={userInfo?.birthDate}
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Designation
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <input
                            type="text"
                            name="designation"
                            defaultValue={userInfo?.designation}
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                            placeholder="Type Here"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Image
                            <span className="text-xs text-red-400 ml-1">
                            </span>
                          </label>
                          <input
                            type="file"
                            name="image"
                            className="border h-10 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                            Address in UK
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <textarea defaultValue={userInfo?.address_in_uk} name="addressUk" id="" rows="3" className="border bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"></textarea>
                        </div>
                        <div className="">
                          <label className="text_color text_font">
                          Address in CTG
                            <span className="text-xs text-red-400 ml-1">
                            </span>{" "}
                          </label>
                          <textarea defaultValue={userInfo?.address_in_ctg} name="addressCtg" id="" rows="3" className="border bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"></textarea>
                        </div>
                      </div>
                      <div className="border bg-bg_selected text-_white text-xl flex items-center justify-end gap-2">
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

export default MemberUpdateModal;
