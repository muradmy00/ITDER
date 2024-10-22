/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MejbanPayment = ({ amount, phone }) => {
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleFindInvitation = async () => {
    try {
      const res = await axiosPublic.post(`/api/get-single-mejban-data`, {
        phone,
      });
      if (res.data.status_code === 201) {
        navigate("/invitationCard", { state: res.data.singleMejbanData });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // function calculateIbanCheckDigits(bban) {
  //   const rearranged = `${bban}GB00`;
  //   const converted = rearranged
  //     .split('')
  //     .map(char => {
  //       if (/[A-Z]/.test(char)) {
  //         return char.charCodeAt(0) - 55;
  //       }
  //       return char;
  //     })
  //     .join('');
  //   const remainder = BigInt(converted) % 97n;
  //   const checkDigits = 98n - remainder;
  //   return checkDigits.toString().padStart(2, '0');
  // }
  
  // function generateIban(sortCode, accountNumber) {
  //   const bankIdentifier = 'BUKB';
  //   const bban = `${bankIdentifier}${sortCode}${accountNumber}`;
  //   const checkDigits = calculateIbanCheckDigits(bban);
  //   return `GB${checkDigits}${bban}`;
  // }
  

  const handlePayment = async(e) => {
    e.preventDefault();
    setLoader(true);
    // const account_holder_name = e.target.account_holder_name.value;
    // const iban = e.target.iban.value;
    // const given_name = e.target.given_name.value;
    // const family_name = e.target.family_name.value;
    // const email = e.target.email.value;
    // const address_line1 = e.target.address_line1.value;
    // const city = e.target.city.value;
    // const postal_code = e.target.postal_code.value;
    // const country_code = e.target.country_code.value;
    // const description = e.target.description.value;

    // const generatedIban = generateIban(205300, 80207543);






    // const info = {
    //   account_holder_name,
    //   iban,
    //   given_name,
    //   family_name,
    //   email,
    //   address_line1,
    //   city,
    //   postal_code,
    //   country_code,
    // };

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, Payment",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     try {
    //       axiosPublic.post("/api/create-mandate", info).then((res) => {
    //         if (res.data.success) {
    //           const mandate_id = res.data.mandate.api_response.body.mandates.id;
    //           const payInfo = { mandate_id, amount, description };

    //           if (mandate_id) {
    //             try {
    //               axiosPublic
    //                 .post("/api/create-payment", payInfo)
    //                 .then((res) => {
    //                   if (res.data.success) {
    //                     e.target.reset();
    //                     setLoader(false);
    //                     handleFindInvitation();
    //                     toast.success("Your payment has been successful.");
    //                   } else {
    //                     setLoader(false);
    //                     toast.error(res.data.error);
    //                   }
    //                 });
    //             } catch (error) {
    //               setLoader(false);
    //               toast.error(error.response.data.message);
    //             }
    //           }
    //         } else {
    //           setLoader(false);
    //           toast.error(res.data.error);
    //         }
    //       });
    //     } catch (error) {
    //       setLoader(false);
    //       toast.error(error.response.data.message);
    //     }
    //   }
    // });
  };

  return (
    <div className={`bg-_white`}>
      <form onSubmit={handlePayment}>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Account Name*</span>
          </label>
          <input
            type="text"
            name="account_holder_name"
            placeholder="Account Name"
            className="border-2 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">
              IBAN*{" "}
              <span className="text-xs">
                (International Bank Account Number)
              </span>
            </span>
          </label>
          <input
            type="text"
            name="iban"
            placeholder="IBAN Number"
            className="border-2 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_primary">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Given Name*</span>
            </label>
            <input
              type="text"
              name="given_name"
              placeholder="Given Name"
              className="border-2 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Sure Name*</span>
            </label>
            <input
              type="text"
              name="family_name"
              placeholder="Sure Name"
              className="border-2 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Email*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">City*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Postal Code*</span>
            </label>
            <input
              type="text"
              name="postal_code"
              placeholder="Postal Code"
              className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Country Code*</span>
            </label>
            <input
              type="text"
              name="country_code"
              placeholder="GB"
              defaultValue="GB"
              className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
              required
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="font-semibold">Address*</span>
          </label>
          <textarea
            type="text"
            placeholder="Address"
            rows="2"
            name="address_line1"
            className="border-2 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="font-semibold">Descriptions*</span>
          </label>
          <textarea
            type="text"
            placeholder="description"
            rows="2"
            name="description"
            className="border-2 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">
            {loader ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MejbanPayment;
