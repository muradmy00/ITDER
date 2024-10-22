import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Utils/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
// import profile from "../../assets/Logo/profile2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import MemberUpdateModal from "./MemberUpdateModal";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import useHasAccess from "../../Hooks/useHasAccess";
import Loader2 from "../../Utils/Loader/Loader2";
import { FaUserCircle } from "react-icons/fa";

const MemberList = () => {
  const imgUrl = `https://littleaccount.com/uploads/member/`;
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [hasAccess] = useHasAccess();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null)

  const { isLoading, refetch } = useQuery({
    queryKey: ["member_list"],
    queryFn: async () => {
      const res = await axiosSecure("/api/get-member-data");
      setData(res.data);
    },
  });

  const handleActiveInactive = async (id, status) => {
    if (status === 1) {
      try {
        const res = await axiosSecure(`/api/inactive-single-member/${id}`);
        if (res.data.status_code === 201) {
          toast.success("Inactivated Successfully");
          refetch();
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const res = await axiosSecure(`/api/active-single-member/${id}`);
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
      const res = await axiosSecure.delete(`/api/delete-member-data/${id}`);
      if (res.data) {
        toast.success("Member Deleted Successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const updateMember = (data) => {
    setIsOpen(true);
    setId(data);
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

  if (isLoading && !data) {
    return <Loader />;
  }

  return (
    <div className="mx-2 my-4 space-y-4">
      {loader && <Loader2 />}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 bg-bg_slate mb-2 w-full ">
          <div className="flex">
            <button
              className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500`}
            >
              All Member ( {data?.allMemberCount || 0} )
            </button>
          </div>
          {hasAccess?.some((item) => item.name === "member-create") && (
            <Link
              to="/memberShip"
              className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500 flex items-center hover:bg-bg_slate hover:text-_white justify-center`}
            >
              New Member
            </Link>
          )}
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-2">
          {data.memberData.data.map((data) => (
            <div
              key={data.id}
              className="bg-_white border-2 border-bg_lightSlate rounded-md p-[20px] max-w-sm w-full mx-auto hover:bg-green-100 hover:scale-[1.02] duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-20 w-20 overflow-hidden rounded-full mx-auto">
                  {data.image ? (
                    <img
                      src={`${imgUrl}${data.image}`}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  ) : (
                    <FaUserCircle className="h-full w-full rounded-full text-gray-400" />
                  )}
                </div>
                <div className="mt-5">
                  <div className="flex flex-col items-center space-y-2 mb-3">
                    <p className="font-semibold">{data.name}</p>
                    <p className="bg_status_primary">
                      {data.designation || "Designation not Found"}
                    </p>
                    <div className="flex items-center gap-gap_primary text-gray-500">
                      {data.status === 1 ? "Active" : "Inactive"}{" "}
                      <div className="w-[1px] bg-gray-500 h-4"></div>{" "}
                      {data.gender}{" "}
                      <div className="w-[1px] bg-gray-500 h-4"></div>{" "}
                      {data.date_of_birth}
                    </div>
                  </div>
                  <hr />
                  <div className="mt-3">
                    <p className=" text-sm text-center text-gray-500">
                      <strong>Email:</strong> {data.email}
                    </p>
                    <p className=" text-sm text-center text-gray-500">
                      <strong>Phone:</strong> {data.phone}
                    </p>
                  </div>
                  <div className="flex gap-gap_primary items-center justify-center my-mt_large">
                    <div className="bg-green-600 w-full h-[3px]"></div>
                    <div className="bg-green-500 w-full h-[3px]"></div>
                    <div className="bg-green-400 w-full h-[3px]"></div>
                    <div className="bg-green-300 w-full h-[3px]"></div>
                  </div>

                  <p className="mt-4 text-gray-500 text-center">
                    <strong>Address in UK</strong>
                    <p>{data.address_in_uk}</p>
                  </p>
                  <p className="mb-4 text-gray-500 text-center">
                    <strong>Address in CTG</strong>
                    <p>{data.address_in_ctg}</p>
                  </p>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex gap-2">
                  {hasAccess?.some((item) => item.name === "user-edit") && (
                    <button
                      onClick={() => updateMember(data)}
                      className="button_primary mt-4 w-full"
                    >
                      Edit
                    </button>
                  )}
                  {hasAccess?.some((item) => item.name === "user-delete") && (
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="button_delete mt-4 w-full"
                    >
                      Delete
                    </button>
                  )}
                  <button
                    onClick={() => handleActiveInactive(data.id, data.status)}
                    className="button_primary mt-4 w-full"
                  >
                    {data.status === 1 ? "Inactive" : "Active"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 my-4">
            {/* Previous Button */}
            <button
                onClick={() => data.memberData.prev_page_url && onPageChange(data.memberData.prev_page_url)}
                className={`px-4 py-2 border rounded ${!data.memberData.prev_page_url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                // disabled={!prev_page_url}
            >
                &laquo; Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 flex-wrap">
            {data.memberData.links?.map((link, index) => (
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
                onClick={() => data.memberData.next_page_url && onPageChange(data.memberData.next_page_url)}
                className={`px-4 py-2 border rounded ${!data.memberData.next_page_url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                disabled={!data.memberData.next_page_url}
            >
                Next &raquo;
            </button>
        </div>
        <MemberUpdateModal
          userInfo={id}
          fetchData={refetch}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setLoader={setLoader}
        />
      </div>
    </div>
  );
};

export default MemberList;
