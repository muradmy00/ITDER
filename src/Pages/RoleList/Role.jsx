import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Utils/Loader/Loader";
import { toast } from "react-toastify";
import useHasAccess from "../../Hooks/useHasAccess";

const Role = () => {
  const axiosSecure = useAxiosSecure();
  const [hasAccess] = useHasAccess();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all_role_list"],
    queryFn: async () => {
      const res = await axiosSecure("/api/roles");
      return res.data.roleData;
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/api/roles/${id}`);
      if (res.data) {
        toast.success("Role Deleted Successfully");
        refetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
              All Role
            </button>
          </div>
          {hasAccess?.some((item) => item.name === "role-create") && (
            <Link
              to="/admin/userRole"
              className={`bg-text_sidebar text-black px-6 h-[40px] font-bold duration-500 flex items-center hover:bg-bg_slate hover:text-_white justify-center`}
            >
              New Role
            </Link>
          )}
        </div>
      </div>

      <div className="overflow-x-auto pb-32 ">
        <table className="table border border-gray-500">
          {/* head */}
          <thead className="h-[40px] bg-bg_slate text-_white">
            <tr className="uppercase text-center h-[40px] font-bold">
              <th className="text-text_sm table_border border uppercase w-2/12">
                Role Name
              </th>
              <th className="text-text_sm table_border border uppercase">
                Permissions
              </th>
              <th className="text-text_sm table_border border  uppercase w-2/12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {data.map((data) => {
              return (
                <tr key={data.id}>
                  <td
                    className={`text-xl whitespace-nowrap text-center border font-semibold border-gray-500 text-black `}
                  >
                    {data.singleRoleData.name.charAt(0).toUpperCase() + data.singleRoleData.name.slice(1)}
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm whitespace-nowrap text-center border border-gray-500 text-black `}
                  >
                    <div className="flex flex-wrap gap-2">
                      {data.rolePermissionData.map((name) => (
                        <span
                          className="bg-gradient-to-r from-orange-800 to-gray-700 text-_white px-2 py-1"
                          key={name.id}
                        >
                          {name.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td
                    className={`px-6 pt-2 text-text_sm border-gray-500 whitespace-nowrap  text-center border text-black `}
                  >
                    <div className="flex gap-2 justify-center">
                      {hasAccess?.some((item) => item.name === "role-edit") && (
                        <Link
                          to={`/admin/updateRole/${data.singleRoleData.id}`}
                          className="button_primary"
                        >
                          Edit
                        </Link>
                      )}

                      {hasAccess?.some(
                        (item) => item.name === "role-delete"
                      ) && (
                        <button
                          className="button_delete"
                          onClick={() => handleDelete(data.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Role;
