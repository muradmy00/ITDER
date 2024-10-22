import { useLocation } from "react-router-dom";
import img1 from "../../assets/Invitation/Invitation.png";
import logo from "../../assets/Logo/Logo.png";
import cardBg from "../../assets/Invitation/cardBg.jpg";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const MarriedCard = () => {
  const location = useLocation();
  const invitationData = location.state;
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <button
          className="bg-blue-400 hover:bg-blue-500 duration-300 w-full text-white px-4 py-1 text-lg font-medium rounded-sm"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <div
        ref={printRef}
        style={{ backgroundImage: `url(${cardBg})` }}
        className="max-w-3xl mx-auto border mb-4 bg-cover bg-center"
      >
        <div className=" w-full h-full border-[16px] border-b-0 border-[#fbcd9b] relative">
          <div className=" border-t-2 border-l-2 border-r-2 border-gray-400 px-10 pt-4">
            <div className="flex justify-center flex-col items-center">
              <div className="flex justify-between">
                <img
                  src={img1}
                  className="w-28 -rotate-45 absolute top-5 left-0"
                  alt=""
                />
                <img src={logo} className="w-20" alt="" />
                <img
                  src={img1}
                  className="w-28 rotate-45 absolute top-5 right-0"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-center font-bold">
                Greater Chattogram Association UK
              </h1>
            </div>
            <p className="text-lg font-semibold mt-3 text-center">
              Cordially Invites You to the
            </p>
            <h1 className="text-3xl text-center font-bold text-[#c57e44] invitationFont">
              Chattogram Utsab, Milton Mela with cultural show and Mejban-2024
            </h1>
            <div className="flex items-center justify-between font-medium">
              <p>
                <strong>Date: </strong>07-July-2024, Sunday.
              </p>
              <p>
                <strong>Time: </strong>11.00AM to 11.00PM
              </p>
            </div>
            <p className="text-center text-[#884e24] text-lg -mt-4">
              <strong>Venue</strong>
              <p className="font-medium leading-4">
                Mayfair Venue Chadwell Health 1078-1080 High Road Romford, RM6
                4DB
              </p>
            </p>
            <p className="text-left text-[#884e24] text-md mt-4 space-y-0">
              <li>Foods will be served between 12.30 pm and 3.30 PM).</li>
              <li>
                Tea, coffee, and snacks can be purchased from stall in the
                afternoon to the end.
              </li>
              <li>Famous artists will perform songs in the evening.</li>
            </p>
          </div>
        </div>
        <div className="w-full h-full border-[16px] border-t-0 border-[#fdbb75]">
          <div className=" border-b-2 border-l-2 border-r-2 border-gray-400 px-10 pb-8 pt-4">
            <div className="">
              <p className="text-justify font-medium invitationTextFont">
                <span className="font-semibold">
                  {`Dear ${invitationData?.name || "Name"}`},
                </span>{" "}
                <br />
                We are pleased to invite you and your family to the Greater
                Chittagong Association's grand Mejban event. Join us for an
                evening of delightful cuisine, cultural performances, and a
                chance to reconnect with fellow members of our community.
              </p>
              <div className="invitationTextFont">
                <h2 className="font-medium text-[#a66c38]">Registered Guest</h2>
                <li>
                  Guest Up 10 Years:{" "}
                  <span>{invitationData?.guest_up_10 || "0"}</span>
                </li>
                <li>
                  Guest 6-10 Years:{" "}
                  <span>{invitationData?.guest_up_6 || "0"}</span>
                </li>
                <li>
                  Guest below 6 Years:{" "}
                  <span>{invitationData?.guest_bellow_6 || "0"}</span>
                </li>
                <p>
                  <strong>Your Booking Date: </strong>
                  {invitationData?.created_at.split(" ")[0] || "0"}
                </p>
              </div>
            </div>
            <div className="mt-4 text-justify space-y-2">
              <p className="invitationTextFont">
                We look forward to seeing you on the day. **Please bring this
                invitation card with you for entry. <br />
                For any queries or further information, feel free to contact us:<br />
                <span>07550448928, 07799945311 07932612667</span>
              </p>
              <p className="font-semibold">
                {" "}
                Warm regards, <br />
                The Greater Chattogram Association UK
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MarriedCard;
