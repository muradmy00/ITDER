import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Utils/Loader/Loader";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { IoMdPrint } from "react-icons/io";
import moment from 'moment-timezone';


const BookingList = () => {
  const [popOpen, setPopOpen] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState(null)

  const togglePopOpen = (idx) => {
    setPopOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ["booking_list"],
    queryFn: async () => {
      const res = await axiosSecure("/api/get-mejban-data");
      setData(res.data)
    },
  });

  const handleActiveInactive = async (id, status) => {
    if (status === 1) {
      try {
        const res = await axiosSecure(`/api/inactive-single-mejban/${id}`);
        if (res.data.status_code === 201) {
          toast.success("Inactivated Successfully");
          refetch();
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const res = await axiosSecure(`/api/active-single-mejban/${id}`);
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
      const res = await axiosSecure.delete(`/api/delete-mejban-data/${id}`);
      if (res.data) {
        toast.success("Booking Deleted Successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePrint = () => {
    const doc = new jsPDF('l', 'mm', 'a4');
    const headers = [["Serial", "Name", "Email", "Phone", "Guest(10+)", "Guest(6-9)", "Guest(-6)"]];

    const rows = data?.mejbanData?.data.map((item, idx) => [
      idx + 1,
      item.name,
      item.email,
      item.phone,
      item.guest_up_10,
      item.guest_up_6,
      item.guest_bellow_6
    ]);

    doc.autoTable({
      head: headers,
      body: rows,
      styles: { overflow: 'linebreak', cellWidth: 'wrap' },
      columnStyles: {
        0: { halign: 'center' },
        4: { halign: 'center' },
        5: { halign: 'center' },
        6: { halign: 'center' },
      },
    });

    doc.save('MejbanList.pdf');
  };

  const onPageChange = async(url) => {
    try {
      const res = await axiosSecure(url)
      if(res.data){
        setData(res.data)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const convertToLondonTime = (dateStr) => {
    // Parse the input date and time
    const utcTime = moment.utc(dateStr, "DD-MM-YYYY HH:mm:ss");
    
    // Convert to London time (BST during June)
    const londonTime = utcTime.tz("Europe/London");
    
    // Format the result
    return londonTime.format("DD-MM-YYYY HH:mma");
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
              All ( {data?.allMejbanCount || 0} )
            </button>
          </div>
          <div className="flex">
            <button
            onClick={handlePrint}
              className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500 hover:bg-bg_slate hover:text-_white flex items-center gap-1`}
            >
              <IoMdPrint className="text-xl" />
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto  bg-white">
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
                Guest(10+)
              </th>
              <th className="text-text_sm table_border border uppercase">
              Guest(6-9)
              </th>
              <th className="text-text_sm table_border border uppercase">
              Guest(-6)
              </th>
              <th className="text-text_sm table_border border uppercase">
              Total Amount
              </th>
              <th className="text-text_sm table_border border uppercase">
                Date (London)
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
            {data?.mejbanData?.data.map((data, idx) => (
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
                  {data.phone}
                </td>
                <td
                  className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                >
                  {data.guest_up_10}
                </td>
                <td
                  className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                >
                  {data.guest_up_6}
                </td>
                <td
                  className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                >
                  {data.guest_bellow_6}
                </td>
                <td
                  className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border text-black `}
                >
                  {data.payment_amount}
                </td>
                <td
                  className={`px-6 pt-2 flex flex-col text-text_sm whitespace-nowrap text-center border text-black`}
                >
                  <span>{convertToLondonTime(data.created_at).split(" ")[0]}</span>
                  <span>{convertToLondonTime(data.created_at).split(" ")[1]}</span>
                </td>
                <td className="border">
                  <button
                    className={`rounded-sm ${
                      data.status === 1
                        ? "bg_status_success"
                        : "bg_status_primary"
                    }  font-semibold border-none`}
                  >
                    {data.status === 1 ? "Paid" : "Unpaid"}
                  </button>
                </td>
                <td className="border">
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
                          {data.status === 1 ? "Unpaid" : "Paid"}
                        </li>
                        <li
                          onClick={() => handleDelete(data.id)}
                          className="w-full p-2 text-text_sm transition-all flex items-center list_hover gap-2"
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
                onClick={() => data.mejbanData.prev_page_url && onPageChange(data.mejbanData.prev_page_url)}
                className={`px-4 py-2 border rounded ${!data.mejbanData.prev_page_url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                // disabled={!prev_page_url}
            >
                &laquo; Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 flex-wrap">
            {data.mejbanData.links?.map((link, index) => (
                <button
                    key={index}
                    onClick={() => link.url && onPageChange(link.url)}
                    className={`px-4 py-2 border rounded ${link.active ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                    disabled={!link.url}
                >
                    {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                </button>
            ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => data.mejbanData.next_page_url && onPageChange(data.mejbanData.next_page_url)}
                className={`px-4 py-2 border rounded ${!data.mejbanData.next_page_url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                disabled={!data.mejbanData.next_page_url}
            >
                Next &raquo;
            </button>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
