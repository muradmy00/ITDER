import { useState } from "react";
import { FaUserCheck, FaUsers, FaDollarSign, FaBloggerB } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { IoReceipt, IoNotifications } from "react-icons/io5";
import { MdReport } from "react-icons/md";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Utils/Loader/Loader";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useRoleAccessApi from "../../Hooks/useRoleAccessApi";

const RoleList2 = () => {
  const axiosSecure = useAxiosSecure();
  const [loader, setLoader] = useState(false);
  const [roleAccess] = useRoleAccessApi();
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState('');
  const [error, setError] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handlePermissionChange = (permissionName, isChecked) => {
    setSelectedPermissions((prevSelectedPermissions) =>
      isChecked
        ? [...prevSelectedPermissions, permissionName]
        : prevSelectedPermissions.filter((permission) => permission !== permissionName)
    );
  };

  const handleGroupCheckboxChange = (groupName, isChecked) => {
    const groupPermissions = roleAccess
      ? roleAccess.filter((item) => item.group_name === groupName).map((item) => item.name)
      : [];

    setSelectedPermissions((prevSelectedPermissions) =>
      isChecked
        ? [...prevSelectedPermissions, ...groupPermissions]
        : prevSelectedPermissions.filter((permission) => !groupPermissions.includes(permission))
    );
  };

  const groupedRoleAccess = roleAccess
    ? roleAccess.reduce((acc, item) => {
        const { group_name, name } = item;
        if (!acc[group_name]) {
          acc[group_name] = [];
        }
        acc[group_name].push({ name });
        return acc;
      }, {})
    : {};


    const handleSubmit = async() => {
        setLoader(true)
        if(!roleName){
            return setError('Role name is require')
        } 
        try {
            const res = await axiosSecure.post("/api/roles", {
              name: roleName,
              permissions: selectedPermissions,
            });
            if (res.data.status_code === 201) {
              toast.success("Role Create Successful");
              setLoader(false);
              navigate('/admin/role')
            }
          } catch (error) {
            setLoader(false);
            toast.error(error.response.data.errors[0])
          }
        };

  if (!roleAccess) {
    return <Loader />;
  }

  return (
    <div className="text-black mx-2 my-4">
        <section>
          <label className="text-xl text-black">
            Role Name{" "}
            <span className="text-red-500 text-sm">
              (required)
            </span>
          </label>
          <input
            type="text"
            onChange={e => setRoleName(e.target.value)}
            name="roleName"
            className="border border-gray-400 h-12 bg-_white focus:ring-0 px-4 focus:border w-full focus:outline-none"
            placeholder="Type Here"
          />
          <p className="text-sm text-red-500 text-left">{error && error}</p>
        </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
        {Object.entries(groupedRoleAccess).map(([groupName, permissions]) => (
          <div
            key={groupName}
            className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md"
          >
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className="text-_white text-xl -mb-1 flex items-center gap-2">
                {/* Render the appropriate icon based on the group name */}
                {groupName === "user-access" && (
                  <FaUserCheck className="text-xl" />
                )}
                {groupName === "role-access" && (
                  <GrUserSettings className="text-xl" />
                )}
                {groupName === "member-access" && (
                  <FaUsers className="text-xl" />
                )}
                {groupName === "expense-access" && (
                  <FaDollarSign className="text-xl" />
                )}
                {groupName === "expense-category-access" && (
                  <FaDollarSign className="text-xl" />
                )}
                {groupName === "expense-receipt-access" && (
                  <IoReceipt className="text-xl" />
                )}
                {groupName === "blog-access" && (
                  <FaBloggerB className="text-xl" />
                )}
                {groupName === "report-access" && (
                  <MdReport className="text-xl" />
                )}
                {groupName === "push-notification-access" && (
                  <IoNotifications className="text-xl" />
                )}
                {groupName === "setting-access" && (
                  <IoMdSettings className="text-xl" />
                )}
                {/* Add more cases for other group names */}
                {groupName}
              </h2>
              <input
                type="checkbox"
                checked={permissions.every((permission) =>
                  selectedPermissions.includes(permission.name)
                )}
                onChange={(e) =>
                  handleGroupCheckboxChange(groupName, e.target.checked)
                }
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {permissions.map((permission) => (
                <label key={permission.name} className="flex items-start">
                  <input
                  className="w-4"
                    type="checkbox"
                    checked={selectedPermissions.includes(permission.name)}
                    onChange={(e) =>
                      handlePermissionChange(permission.name, e.target.checked)
                    }
                  />
                  <span className="font-bold text-lg ml-2 cursor-pointer flex-1 leading-5">
                    {permission.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className="mt-4">
          <button onClick={handleSubmit} className="button_primary">
            {loader ? "Loading..." : "Submit"}
          </button>
        </div>
    </div>
  );
};

export default RoleList2;
