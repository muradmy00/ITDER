import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import Loader from "../../Utils/Loader/Loader";
import AddUserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";
import useHasAccess from "../../Hooks/useHasAccess";

const UserList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUp, setIsOpenUP] = useState(false)
  const [popOpen, setPopOpen] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [hasAccess] = useHasAccess()
  
    const togglePopOpen = (idx) => {
      setPopOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
  
    const {
      data,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["user_list"],
      queryFn: async () => {
        const res = await axiosSecure("/api/users");
        return res.data;
      },
    });
  
    const handleActiveInactive = async (id, status) => {
      if (status === 1) {
        try {
          const res = await axiosSecure(`/api/users-inactive/${id}`);
          if (res.data.status_code === 201) {
            toast.success("Inactivated Successfully");
            refetch();
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        try {
          const res = await axiosSecure(`/api/users-active/${id}`);
          if (res.data.status_code === 201) {
            toast.success("Activated Successfully");
            refetch();
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    };
  
    const handleDelete = async (id) => {
      try {
        const res = await axiosSecure.delete(`/api/users/${id}`);
        if (res.data) {
          toast.success("Booking Deleted Successfully");
          refetch();
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    const handleUpdate = (id) => {
      setUpdateData(id)
      setIsOpenUP(true)
    }
  
    if (isLoading) {
      return <Loader />;
    }
    return (
        <div className="mx-2 my-4 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 bg-bg_slate mb-2 w-full ">
          <div className="flex">
            <button
              className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500`}
            >
              All User ( {data?.userCount || 0} )
            </button>
          </div>
          {hasAccess?.some(item => item.name === 'user-create') && <Link
          onClick={() => setIsOpen(true)}
            className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500 flex items-center hover:bg-bg_slate hover:text-_white justify-center`}
          >
            New User
          </Link>}
        </div>
      </div>

      <div className="overflow-x-auto pb-32 ">
          <table className="table border ">
            {/* head */}
            <thead className="h-[40px] bg-bg_slate text-_white">
              <tr className="uppercase text-center h-[40px] font-bold">
                <th className="text-text_sm table_border border uppercase">
                  Serial
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Name
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Email
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Phone
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Role
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Status
                </th>
                <th className="text-text_sm table_border border uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
            {
                data.userData.map((data, idx) => (
                    <tr key={data.id}>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border  text-black font-bold w-20`}
                  >
                    {idx + 1}
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border  text-black `}
                  >
                    {data.name}
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                  >
                    {data.email}
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                  >
                    {data.mobile}
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                  >
                    {data.role}
                  </td>
                  <td className="border ">
                    <button
                      className={`rounded-sm ${
                        data.status === 1
                          ? "bg_status_primary"
                          : "bg_status_success"
                      }  font-semibold border-none`}
                    >
                      {data.status === 1 ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="border ">
                    <button
                      className="rounded-md border-none py-0 px-2 relative"
                      onClick={() => togglePopOpen(data.id)}
                    >
                      <BsThreeDotsVertical className="text-lg font-bold text_color" />
                      <div
                        className={`bg-_white border border_bg absolute ${
                          popOpen === data.id ? "scale-100 z-10" : "scale-0"
                        } right-[14px] top-[24px] rounded-md rounded-tr-sm duration-300 origin-top-right w-44`}
                      >
                        <ul className="text_color text-left">
                          <li
                            onClick={() =>
                              handleActiveInactive(data.id, data.status)
                            }
                            className="w-full p-2 text-text_sm transition-all flex items-center list_hover gap-2"
                          >
                            {data.status === 1 ? <IoMdEyeOff /> : <IoMdEye />}{" "}
                            {data.status === 1 ? "Inactive" : "Active"}
                          </li>
                          {hasAccess?.some(item => item.name === 'user-delete') &&<li
                            onClick={() => handleDelete(data.id)}
                            className="w-full p-2 text-text_sm transition-all flex items-center list_hover gap-2"
                          >
                            <MdDelete /> Delete
                          </li>}
                          {hasAccess?.some(item => item.name === 'user-edit') &&<li
                            onClick={() => handleUpdate(data)}
                            className="w-full p-2 text-text_sm transition-all flex items-center list_hover gap-2"
                          >
                            <MdEdit /> Edit
                          </li>}
                        </ul>
                      </div>
                    </button>
                  </td>
                </tr>
                ))
            }
            </tbody>
          </table>
        </div>
        <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} fetchData={refetch} />
        <UpdateUserModal data={updateData} isOpen={isOpenUp} setIsOpen={setIsOpenUP} fetchData={refetch} />
      </div>
    );
};

export default UserList;