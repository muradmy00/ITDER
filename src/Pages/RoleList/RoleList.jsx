import { useState } from "react";
import { FaUserCheck, FaUsers, FaDollarSign, FaBloggerB } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { IoReceipt, IoNotifications } from "react-icons/io5";
import { MdReport } from "react-icons/md";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Utils/Loader/Loader";
import useRoleAccessApi from "../../Hooks/useRoleAccessApi";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RoleList = () => {
  const axiosSecure = useAxiosSecure();
  const [loader, setLoader] = useState(false);
  const [roleAccess, loading] = useRoleAccessApi();
  const navigate = useNavigate();

  // User Checkbox State
  const [checkAll, setCheckAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});
  // Role Checkbox State
  const [roleCheckAll, setRoleCheckAll] = useState(false);
  const [roleCheckboxes, setRoleCheckboxes] = useState({});
  // Member Checkbox State
  const [memberCheckAll, setMemberCheckAll] = useState(false);
  const [memberCheckboxes, setMemberCheckboxes] = useState({});
  // Expense Checkbox State
  const [expenseCheckAll, setExpenseCheckAll] = useState(false);
  const [expenseCheckboxes, setExpenseCheckboxes] = useState({});
  // Expense Category Checkbox State
  const [expenseCatCheckAll, setExpenseCatCheckAll] = useState(false);
  const [expenseCatCheckboxes, setExpenseCatCheckboxes] = useState({});
  // Expense Receipt Checkbox State
  const [expenseReceiptCheckAll, setExpenseReceiptCheckAll] = useState(false);
  const [expenseReceiptCheckboxes, setExpenseReceiptCheckboxes] = useState({});
  // Blog Checkbox State
  const [blogCheckAll, setBlogCheckAll] = useState(false);
  const [blogCheckboxes, setBlogCheckboxes] = useState({});
  // Report Checkbox State
  const [reportCheckAll, setReportCheckAll] = useState(false);
  const [reportCheckboxes, setReportCheckboxes] = useState({});
  // Notification Checkbox State
  const [notificationCheckAll, setNotificationCheckAll] = useState(false);
  const [notificationCheckboxes, setNotificationCheckboxes] = useState({});
  // Settings Checkbox State
  const [settingsCheckAll, setSettingsCheckAll] = useState(false);
  const [settingsCheckboxes, setSettingsCheckboxes] = useState({});
  // Mejban Checkbox State
  const [mejbanCheckAll, setMejbanCheckAll] = useState(false);
  const [mejbanCheckboxes, setMejbanCheckboxes] = useState({});
  // Gallery Checkbox State
  const [galleryCheckAll, setGalleryCheckAll] = useState(false);
  const [galleryCheckboxes, setGalleryCheckboxes] = useState({});
  // Video Checkbox State
  const [videoCheckAll, setVideoCheckAll] = useState(false);
  const [videoCheckboxes, setVideoCheckboxes] = useState({});
  // Contact Checkbox State
  const [contactCheckAll, setContactCheckAll] = useState(false);
  const [contactCheckboxes, setContactCheckboxes] = useState({});
  // Payee Checkbox State
  const [payeeCheckAll, setPayeeCheckAll] = useState(false);
  const [payeeCheckboxes, setPayeeCheckboxes] = useState({});

  // Checkbox Filter =====================================================
  const userAccess = roleAccess?.filter(
    (item) => item.group_name === "user-access"
  );
  const accessRole = roleAccess?.filter(
    (item) => item.group_name === "role-access"
  );
  const memberAccess = roleAccess?.filter(
    (item) => item.group_name === "member-access"
  );
  const expenseAccess = roleAccess?.filter(
    (item) => item.group_name === "expense-access"
  );
  const expenseCategoryAccess = roleAccess?.filter(
    (item) => item.group_name === "expense-category-access"
  );
  const expenseReceiptAccess = roleAccess?.filter(
    (item) => item.group_name === "expense-receipt-access"
  );
  const blogAccess = roleAccess?.filter(
    (item) => item.group_name === "blog-access"
  );
  const reportAccess = roleAccess?.filter(
    (item) => item.group_name === "report-access"
  );
  const notificationAccess = roleAccess?.filter(
    (item) => item.group_name === "push-notification-access"
  );
  const settingAccess = roleAccess?.filter(
    (item) => item.group_name === "setting-access"
  );
  const majbanAccess = roleAccess?.filter(
    (item) => item.group_name === "mejban-access"
  );
  const galleryAccess = roleAccess?.filter(
    (item) => item.group_name === "gallery-access"
  );
  const videoAccess = roleAccess?.filter(
    (item) => item.group_name === "video-access"
  );
  const contactAccess = roleAccess?.filter(
    (item) => item.group_name === "contact-form-access"
  );
  const payeeAccess = roleAccess?.filter(
    (item) => item.group_name === "payee-access"
  );

  // User Checkbox Function=============================================
  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    setCheckAll(isChecked);
    const newCheckboxes = {};
    userAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setCheckboxes(newCheckboxes);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...checkboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setCheckboxes(newCheckboxes);
    setCheckAll(allChecked);
  };

  // Role Checkbox Function =====================================================
  const handleCheckAllRole = (event) => {
    const isChecked = event.target.checked;
    setRoleCheckAll(isChecked);
    const newCheckboxes = {};
    accessRole.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setRoleCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeRole = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...roleCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setRoleCheckboxes(newCheckboxes);
    setRoleCheckAll(allChecked);
  };

  // Member Checkbox Function ==================================================
  const handleCheckAllMember = (event) => {
    const isChecked = event.target.checked;
    setMemberCheckAll(isChecked);
    const newCheckboxes = {};
    memberAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setMemberCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeMember = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...memberCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setMemberCheckboxes(newCheckboxes);
    setMemberCheckAll(allChecked);
  };

  // Expense Checkbox Function ==================================================
  const handleCheckAllExpense = (event) => {
    const isChecked = event.target.checked;
    setExpenseCheckAll(isChecked);
    const newCheckboxes = {};
    expenseAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setExpenseCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeExpense = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...expenseCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setExpenseCheckboxes(newCheckboxes);
    setExpenseCheckAll(allChecked);
  };
  // Expense Category Checkbox Function ==================================================
  const handleCheckAllExpenseCat = (event) => {
    const isChecked = event.target.checked;
    setExpenseCatCheckAll(isChecked);
    const newCheckboxes = {};
    expenseCategoryAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setExpenseCatCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeExpenseCat = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...expenseCatCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setExpenseCatCheckboxes(newCheckboxes);
    setExpenseCatCheckAll(allChecked);
  };
  // Expense Receipt Checkbox Function ==================================================
  const handleCheckAllExpenseReceipt = (event) => {
    const isChecked = event.target.checked;
    setExpenseReceiptCheckAll(isChecked);
    const newCheckboxes = {};
    expenseReceiptAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setExpenseReceiptCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeExpenseReceipt = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...expenseReceiptCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setExpenseReceiptCheckboxes(newCheckboxes);
    setExpenseReceiptCheckAll(allChecked);
  };
  // Blog Checkbox Function ==================================================
  const handleCheckAllBlog = (event) => {
    const isChecked = event.target.checked;
    setBlogCheckAll(isChecked);
    const newCheckboxes = {};
    blogAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setBlogCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeBlog = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...blogCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setBlogCheckboxes(newCheckboxes);
    setBlogCheckAll(allChecked);
  };
  // Report Checkbox Function ==================================================
  const handleCheckAllReport = (event) => {
    const isChecked = event.target.checked;
    setReportCheckAll(isChecked);
    const newCheckboxes = {};
    reportAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setReportCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeReport = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...reportCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setReportCheckboxes(newCheckboxes);
    setReportCheckAll(allChecked);
  };
  // Notification Checkbox Function ==================================================
  const handleCheckAllNotification = (event) => {
    const isChecked = event.target.checked;
    setNotificationCheckAll(isChecked);
    const newCheckboxes = {};
    notificationAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setNotificationCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeNotification = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...notificationCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setNotificationCheckboxes(newCheckboxes);
    setNotificationCheckAll(allChecked);
  };
  // Setting Checkbox Function ==================================================
  const handleCheckAllSettings = (event) => {
    const isChecked = event.target.checked;
    setSettingsCheckAll(isChecked);
    const newCheckboxes = {};
    settingAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setSettingsCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeSettings = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...settingsCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setSettingsCheckboxes(newCheckboxes);
    setSettingsCheckAll(allChecked);
  };



  // ============== Can be Changed =======================

  // Mejban Checkbox Function ==================================================
  const handleCheckAllMejban = (event) => {
    const isChecked = event.target.checked;
    setMejbanCheckAll(isChecked);
    const newCheckboxes = {};
    majbanAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setMejbanCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeMejban = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...mejbanCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setMejbanCheckboxes(newCheckboxes);
    setMejbanCheckAll(allChecked);
  };

  // Video Checkbox Function ==================================================
  const handleCheckAllVideo = (event) => {
    const isChecked = event.target.checked;
    setVideoCheckAll(isChecked);
    const newCheckboxes = {};
    videoAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setVideoCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeVideo = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...videoCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setVideoCheckboxes(newCheckboxes);
    setVideoCheckAll(allChecked);
  };

  // Gallery Checkbox Function ==================================================
  const handleCheckAllGallery = (event) => {
    const isChecked = event.target.checked;
    setGalleryCheckAll(isChecked);
    const newCheckboxes = {};
    galleryAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setGalleryCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeGallery = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...galleryCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setGalleryCheckboxes(newCheckboxes);
    setGalleryCheckAll(allChecked);
  };

  // Contact Checkbox Function ==================================================
  const handleCheckAllContact = (event) => {
    const isChecked = event.target.checked;
    setContactCheckAll(isChecked);
    const newCheckboxes = {};
    contactAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setContactCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangeContact = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...contactCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setContactCheckboxes(newCheckboxes);
    setContactCheckAll(allChecked);
  };  
  
  // Pay Checkbox Function ==================================================
  const handleCheckAllPayee = (event) => {
    const isChecked = event.target.checked;
    setPayeeCheckAll(isChecked);
    const newCheckboxes = {};
    payeeAccess.forEach((item) => {
      newCheckboxes[item.name] = isChecked;
    });
    setPayeeCheckboxes(newCheckboxes);
  };

  const handleCheckboxChangePayee = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = { ...payeeCheckboxes, [name]: checked };
    const allChecked = Object.values(newCheckboxes).every(
      (isChecked) => isChecked
    );
    setPayeeCheckboxes(newCheckboxes);
    setPayeeCheckAll(allChecked);
  };


  // Create Array Function
  const checkedValues = [];
  const createArray = (item) => {
    for (const key in item) {
      if (item[key]) {
        checkedValues.push(key);
      }
    }
  };

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const roleName = e.target.roleName.value;
    createArray(checkboxes);
    createArray(roleCheckboxes);
    createArray(memberCheckboxes);
    createArray(expenseCheckboxes);
    createArray(expenseCatCheckboxes);
    createArray(expenseReceiptCheckboxes);
    createArray(blogCheckboxes);
    createArray(reportCheckboxes);
    createArray(notificationCheckboxes);
    createArray(mejbanCheckboxes);
    createArray(galleryCheckboxes);
    createArray(videoCheckboxes);
    createArray(contactCheckboxes);
    createArray(payeeCheckboxes);

    try {
      const res = await axiosSecure.post("/api/roles", {
        name: roleName,
        permissions: checkedValues,
      });
      if (res.data.status_code === 201) {
        toast.success("Role Create Successful");
        setLoader(false);
        e.target.reset();
        navigate('/admin/roleList')
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.errors[0])
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit} className="p-2 mb-3">
        <section>
          <label className="text-xl text-black">
            Role Name{" "}
            <span className="text-red-500 text-sm">
              (required)
            </span>
          </label>
          <input
            type="text"
            name="roleName"
            className="border border-gray-400 h-12 bg-_white focus:ring-0 px-4 focus:border w-full focus:outline-none"
            placeholder="Type Here"
            required
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                Majban
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllMejban}
                checked={mejbanCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {majbanAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={mejbanCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeMejban}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                Gallery
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllGallery}
                checked={galleryCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {galleryAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={galleryCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeGallery}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                Video
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllVideo}
                checked={videoCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {videoAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={videoCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeVideo}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                Contact
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllContact}
                checked={contactCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {contactAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={contactCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeContact}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                Payment
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllPayee}
                checked={payeeCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {payeeAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={payeeCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangePayee}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* ==========================Master File============================= */}
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUserCheck className="text-xl" />
                User
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAll}
                checked={checkAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {userAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={checkboxes[item.name] || false}
                    onChange={handleCheckboxChange}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <GrUserSettings className="text-xl" />
                Role
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllRole}
                checked={roleCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {accessRole?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={roleCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeRole}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaUsers className="text-xl" />
                Member
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllMember}
                checked={memberCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {memberAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={memberCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeMember}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaDollarSign className="text-xl" />
                Expense
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllExpense}
                checked={expenseCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {expenseAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={expenseCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeExpense}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaDollarSign className="text-xl" />
                Expense Category
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllExpenseCat}
                checked={expenseCatCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {expenseCategoryAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={expenseCatCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeExpenseCat}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <IoReceipt className="text-xl" />
                Expense Receipt
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllExpenseReceipt}
                checked={expenseReceiptCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {expenseReceiptAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={expenseReceiptCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeExpenseReceipt}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <FaBloggerB className="text-xl" />
                Blog
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllBlog}
                checked={blogCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {blogAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={blogCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeBlog}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <MdReport className="text-xl" />
                Report
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllReport}
                checked={reportCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {reportAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={reportCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeReport}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <IoNotifications className="text-xl" />
                Push Notification
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllNotification}
                checked={notificationCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {notificationAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex `}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={notificationCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeNotification}
                  />
                  <p className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </p>
                </label>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black bg-white rounded-md shadow-md">
            <div className="bg-bg_selected w-full flex justify-between items-center p-2">
              <h2 className=" text-_white text-xl -mb-1 flex items-center gap-2">
                <IoMdSettings className="text-xl" />
                Settings
              </h2>
              <input
                type="checkbox"
                onChange={handleCheckAllSettings}
                checked={settingsCheckAll}
              />
            </div>
            <div className="p-3 grid grid-cols-2 gap-10">
              {settingAccess?.map((item, idx) => (
                <label
                  key={item.name}
                  className={`${idx % 2 === 1 ? "justify-self-end" : ""} flex`}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={settingsCheckboxes[item.name] || false}
                    onChange={handleCheckboxChangeSettings}
                  />
                  <span className="font-bold text-lg ml-1 cursor-pointer">
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-4">
          <button type="submit" className="button_primary">
            {loader ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleList;
