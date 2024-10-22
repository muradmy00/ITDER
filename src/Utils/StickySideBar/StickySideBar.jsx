import { FaFacebookSquare, FaLink, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowGoForwardFill } from "react-icons/ri";

const StickySideBar = () => {
    return (
        <div className=' w-12 flex justify-center bg-text_secondary text-white px-pl_primary py-pl_secondary'>
            <ul className="space-y-1 flex flex-col items-center">
                <li className="text-[10px] font-semibold uppercase">Share</li>
                <li><FaFacebookSquare className="text-text_xl" /></li>
                <li><FaWhatsappSquare className="text-text_xl" /></li>
                <li><FaTwitterSquare className="text-text_xl" /></li>
                <li><FaLinkedin className="text-text_xl" /></li>
                <li><MdEmail className="text-text_xl" /></li>
                <li><FaLink className="text-text_xl" /></li>
                <li><RiArrowGoForwardFill className="text-text_xl" /></li>
            </ul>
        </div>
    );
};

export default StickySideBar;