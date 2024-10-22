import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Utils/Loader/Loader";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ContactList = () => {
  const [popOpen, setPopOpen] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState(null);

  const togglePopOpen = (idx) => {
    setPopOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ["contact_list"],
    queryFn: async () => {
      const res = await axiosSecure("/api/get-contact-form-data");
      setData(res.data);
    },
  });

  // const handleActiveInactive = async (id, status) => {
  //   if (status === 1) {
  //     try {
  //       const res = await axiosSecure(`/api/floor-inactive/${id}`);
  //       if (res.data.status_code === 201) {
  //         toast.success("Inactivated Successfully");
  //         refetch();
  //       }
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   } else {
  //     try {
  //       const res = await axiosSecure(`/api/floor-active/${id}`);
  //       if (res.data.status_code === 201) {
  //         toast.success("Inactivated Successfully");
  //         refetch();
  //       }
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/api/floor/${id}`);
      if (res.data) {
        toast.success("User Deleted Successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onPageChange = async (url) => {
    try {
      const res = await axiosSecure(url);
      if (res.data) {
        setData(res.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isLoading && !data) {
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
              All ( {data?.allContactFormCount || 0} )
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto pb-32 ">
        <table className="table border ">
          {/* head */}
          <thead className="h-[40px] bg-bg_slate text-_white">
            <tr className="uppercase text-center h-[40px] font-bold text_color font_title">
              <th className="font_standard table_border border uppercase">
                Serial
              </th>
              <th className="font_standard table_border border uppercase">
                Name
              </th>
              <th className="font_standard table_border border uppercase">
                Email
              </th>
              <th className="font_standard table_border border uppercase">
                Phone
              </th>
              <th className="font_standard table_border border uppercase">
                Message
              </th>
              <th className="font_standard table_border border uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {data.contactFormData.data.map((data, idx) => (
              <tr key={data.id}>
                <td
                  className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color font-bold w-1/12`}
                >
                  {idx + 1}
                </td>
                <td
                  className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color w-2/12`}
                >
                  {data.name}
                </td>
                <td
                  className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color w-1/12`}
                >
                  {data.email}
                </td>
                <td
                  className={`px-6 pt-2 font_standard whitespace-nowrap text-center border  text_color w-1/12 `}
                >
                  {data.phone}
                </td>
                <td
                  className={`px-6 pt-2 font_standard whitespace-nowrap text-center border text_color break-words w-6/12`}
                >
                  {data.message}
                </td>
                <td className="border w-1/12">
                  <button
                    className="rounded-md border-none py-0 px-2 relative"
                    onClick={() => togglePopOpen(data.id)}
                  >
                    <BsThreeDotsVertical className="text-xl font-bold text_color" />
                    <div
                      className={`bg-_white w-44 border border_bg absolute ${
                        popOpen === data.id ? "scale-100 z-10" : "scale-0"
                      } right-[14px] top-[24px] rounded-md rounded-tr-sm duration-300 origin-top-right`}
                    >
                      <ul className="text_color text-left">
                        {/* <li
                            onClick={() =>
                              handleActiveInactive(data.id, data.status)
                            }
                            className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"
                          >
                            {data.status === 1 ? <IoMdEyeOff /> : <IoMdEye />}{" "}
                            {data.status === 1 ? "Inactive" : "Active"}
                          </li> */}
                        <li
                          onClick={() => handleDelete(data.id)}
                          className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"
                        >
                          <MdDelete /> Delete
                        </li>
                      </ul>
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 my-4">
          {/* Previous Button */}
          <button
            onClick={() =>
              data.contactFormData.prev_page_url &&
              onPageChange(data.contactFormData.prev_page_url)
            }
            className={`px-4 py-2 border rounded ${
              !data.contactFormData.prev_page_url
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            // disabled={!prev_page_url}
          >
            &laquo; Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1 flex-wrap">
            {data.contactFormData.links?.map((link, index) => (
              <button
                key={index}
                onClick={() => link.url && onPageChange(link.url)}
                className={`px-4 py-2 border rounded ${
                  link.active ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`}
                disabled={!link.url}
              >
                {link.label.replace("&laquo;", "").replace("&raquo;", "")}
              </button>
            ))}
          </div>
          {/* Next Button */}
          <button
            onClick={() =>
              data.contactFormData.next_page_url &&
              onPageChange(data.contactFormData.next_page_url)
            }
            className={`px-4 py-2 border rounded ${
              !data.contactFormData.next_page_url
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            disabled={!data.contactFormData.next_page_url}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
