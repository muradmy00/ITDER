
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import logo from '../../assets/Logo/Logo.png'
import { HiUserGroup } from "react-icons/hi2";
import { MdContactPage } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { FaImages, FaUserAlt, FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import useHasAccess from "../../Hooks/useHasAccess";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import useSmallScreen from "../../Hooks/useSmallScreen";

const MenuBar = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();
  const [hasAccess] = useHasAccess();
  const {setOpen} = useContext(OrderContext);
  const [isSmallScreen] = useSmallScreen();


  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleClick = (path) => {
    setSelected(path);
    if(isSmallScreen){
      setOpen(false)
    }
  };



  return (
    <div className="shadow-md bg-_white h-screen overflow-y-auto text-black p-pl_16px font_sans ">
      <div className="bg-_white rounded  w-full">
        <img className=" mx-auto  mb-[18px]rounded h-20 object-contain w-full" src={logo} alt="dfdf" />
      </div>
      <div className="flex flex-col justify-between padding_left padding_right ">
        <ul className="w-full">
          <li className="duration-200">
              <p className="w-full duration-200 font-bold text-text_sm text-text_sidebar mt-mt_4px mb-mt_4px font_sans">
                Overview
              </p>
            <ul className="overflow-hidden transition-all duration-500 ease-in-out font_sans">
             
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/course' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/course')}>
                <Link to='/course' className="flex items-center  gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <MdContactPage />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                    Course
                  </span>
                </Link>
              </li>
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200  ${selected === '/cart' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/cart')}>
                <Link to='/cart' className="flex items-center gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <MdLibraryBooks />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                    Cart
                  </span>
                </Link>
              </li>
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200  ${selected === '/checkout' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/checkout')}>
                <Link to='/checkout' className="flex items-center gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <MdLibraryBooks />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                  Checkout
                  </span>
                </Link>
              </li>
            
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/order-details' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/order-details')}>
                <Link to='/order-details' className="flex items-center  gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <BiSolidDashboard />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                   Order Details
                  </span>
                </Link>
              </li>
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/search' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/search')}>
                <Link to='/search' className="flex items-center  gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <BiSolidDashboard />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                    Search
                  </span>
                </Link>
              </li>

              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/instruction' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/instruction')}>
                <a
                  href="https://docs.google.com/document/d/1RhJ9HZBE5asf8se2yw8ZaLqCwVlSVe2ht8M7OhtJtX4/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-gap_6px py-pt_primary"
                >
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <BiSolidDashboard />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                   Instructions
                  </span>
                </a>
              </li>


            
            </ul>
          </li>
   
         
          {hasAccess && <li className="duration-200">
              <p className="w-full duration-200 font-bold text-text_sm text-text_sidebar mt-mt_4px mb-mt_4px font_sans">
                Admin panel
              </p>
            <ul className="overflow-hidden transition-all duration-500 ease-in-out font_sans">
              {hasAccess?.some(item => item.name === 'member-list') && 
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/admin/member' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/admin/member')}>
                <Link to='/admin/member' className="flex items-center gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <HiUserGroup />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                    Member List
                  </span>
                </Link>
              </li>}
              
             
             
              {/* {hasAccess?.some(item => item.name === 'video-list') &&
              <li className={`py-pt_primary px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/admin/videoList' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/admin/videoList')}>
                <Link to='/admin/videoList' className="flex items-center  gap-gap_6px">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <FaVideo />
                  </span>
                  <span className="text-text_md font_sans font-medium ">
                    Video List
                  </span>
                </Link>
              </li>} */}
            </ul>
          </li>}
          {hasAccess && <li className="group hover:cursor-pointer duration-200">
           
            <ul className="overflow-hidden ml-ml_primary transition-all duration-500 ease-in-out">
              {hasAccess?.some(item => item.name === 'user-list') &&
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/admin/user' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/admin/user')}>
                <Link to='/admin/user' className="flex items-center gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <FaUserAlt />
                  </span>
                  <span className="text-text_md font_sans font-medium">
                  User List
                  </span>
                </Link>
              </li>}
              {hasAccess?.some(item => item.name === 'role-list') &&
              <li className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${selected === '/admin/roleList' ? 'bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected ' : 'text-[#585c66] font-medium hover:text-[#585c66] hover:bg-slate-100 '}`}
                onClick={() => handleClick('/admin/roleList')}>
                <Link to='/admin/roleList' className="flex items-center  gap-gap_6px py-pt_primary">
                  <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                    <IoSettingsSharp />
                  </span>
                  <span className="text-text_md font_sans font-medium">
                    User Role
                  </span>
                </Link>
              </li>}
            </ul>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;

