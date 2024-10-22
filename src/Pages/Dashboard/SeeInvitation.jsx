import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SeeInvitation = () => {
    const [phone, setPhone] = useState(null)
    const axiosPublic = useAxiosPublic();
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();

    const handleFindInvitation = async () => {
      setLoader(true)
      try {
        const res = await axiosPublic.post(`/api/get-single-mejban-data`, {phone})
        if(res.data.status_code === 201){
          navigate('/invitationCard', {state: res.data.singleMejbanData})
          setLoader(false)
        }
      } catch (error) {
        setLoader(false)
        toast.error(error.response.data.message)
      }
    }

  return (
    <div className="bg-bg_selected text-white py-10 px-3">
      <label className="text_color text_font">
        Phone Number
        <span className="text-xs text-red-400 ml-1"></span>{" "}
      </label>
      <input
        type="number"
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        className="border h-10 text-bg_selected bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
        placeholder="Type Here"
      />
      <button
        type="button"
        className="button_primary mt-2"
        onClick={handleFindInvitation}
      >
        {loader ? 'Loading...': 'Submit'}
      </button>
    </div>
  );
};

export default SeeInvitation;
