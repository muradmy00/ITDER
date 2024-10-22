import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import mejban from "../../assets/Photo/image-2-min.jpg";
import { useState } from "react";
import Loader2 from "../../Utils/Loader/Loader2";
import SeeInvitation from "../Dashboard/SeeInvitation";

const Mejban = () => {
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const [guestB6, setGuestB6] = useState(0);
  const [guestU6, setGuestU6] = useState(0);
  const [guestU10, setGuestU10] = useState(0);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [paySection, setPaySection] = useState(true);
  const [phone, setPhone] = useState(null);
  const totalAmount = 10 * guestU10 + 5 * guestU6

  const getPayLink = () => {
    if(totalAmount == 5){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 1})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 10){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 2})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 15){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 3})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 20){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 4})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 25){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 5})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 30){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 6})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 35){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 7})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 40){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 8})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 45){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 9})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 50){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 10})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 55){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 11})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 60){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 12})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 65){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 13})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 70){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 14})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 75){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 15})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 80){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 16})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 85){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 17})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 90){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 18})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 95){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 19})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 100){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 20})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 105){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 21})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 110){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 22})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 115){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 23})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 120){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 24})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    } else if(totalAmount == 125){
      axiosPublic.post('/api/check-payment-template', {"template_number" : 25})
      .then(res => {
        if(res.data.status_code === 201){
          window.location.href = res.data.paymentLink
        }
      })
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const guest_up_10 = e.target.guest_up_10.value;
    const guest_up_6 = e.target.guest_up_6.value;
    const guest_bellow_6 = e.target.guest_bellow_6.value;
    const address_in_ctg = e.target.address_in_ctg.value;
    const address_in_uk = e.target.address_in_uk.value;
    
    if(phone.length !== 11){
      return toast.error("Mobile must be type 11")
      }
    setPhone(phone)

    const info = {
      name,
      email,
      phone,
      address_in_ctg,
      address_in_uk,
      guest_bellow_6,
      guest_up_10,
      guest_up_6,
      payment_amount : totalAmount
    };

    try {
      const res = await axiosPublic.post("/api/save-mejban-register-form", info);
      if (res.data.status_code === 201) {
        toast.success(res.data.message);
        e.target.reset();
        setLoader(false);
        getPayLink()
        // setPaySection(!paySection);
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <div className="mx-2 my-4 space-y-4">
      {loader && <Loader2 />}
      <div className="bg-blue-500 text-white text-center py-[48px]">
        <h1 className="text-text_40px">Registration for Mejban</h1>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-gap_primary">
        <div className="text-center rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4 md:w-full flex flex-col items-center justify-center relative">
          <h1 className="font-bold text-text_xl md:text-3xl lg:text-4xl text-center">
            {paySection ? "Registration for Mejban" : <span className="text-green-500">Payment for Mejban</span>}
          </h1>
          <p className="text-text_sm2 mt-4">
            <span className="font-bold text-text_sm2">Date :</span>
            <span> SUNDAY 7 July 2024 (11.00 am to 11.00 pm)</span>
          </p>
          <p className="text-center text-text_sm2">
            <span className="font-bold">Venue : </span>Mayfair Venue Chadwell
            Health 1078-1082 High Rd Romford, RM6 4BD
          </p>
          <p className="text-center text-text_sm2">
            <span className="font-bold"> Entry Fee : </span> £10 (10 Years to
            Adult) £5 (6 year to 9 years and under 6 years free)
          </p>
          <p className="text-xl font-medium mt-4">Already have registered?</p>

          {!openInvitation && <button
            onClick={() => setOpenInvitation(true)}
            className="bg-bg_selected text-_white px-2 py-[2px] rounded-sm mt-1 z-40"
          >
            See Invitation
          </button>}
          <div
            className={`${
              openInvitation ? "max-h-96" : "max-h-0"
            } duration-500 ease-linear overflow-hidden absolute bottom-0 w-full text-left`}
          >
            <SeeInvitation openInvitation={openInvitation} />
          </div>
        </div>
        {/* Form Card */}
        <div
          className={`text-center lg:text-left card rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4 relative`}
        >
          <form 
          // className={`bg-_white ${!paySection && 'hidden'}`} 
          onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Full Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="border-2 rounded-md p-2 w-full"
                  required
                />
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_primary">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Email Address <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="border-2 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Phone <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder=" Phone number"
                  className="border-2 rounded-md p-2 w-full"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gap_primary mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Guest (10+) <span className="text-red-500">*</span></span>
                </label>
                <select
                  onChange={(e) => setGuestU10(e.target.value)}
                  name="guest_up_10"
                  className="border-2 rounded-md p-2 w-full"
                  required
                >
                  <option value="0" selected>
                    Guest (10+)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Guest (6+) </span>
                </label>
                <select
                  onChange={(e) => setGuestU6(e.target.value)}
                  name="guest_up_6"
                  className="border-2 rounded-md p-2 w-full"
                  required
                >
                  <option value="0" disabled selected>
                    Guest (6+)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Guest (-6)</span>
                </label>
                <select
                  onChange={(e) => setGuestB6(e.target.value)}
                  name="guest_bellow_6"
                  className="border-2 rounded-md p-2 w-full"
                  required
                >
                  <option value="0" disabled selected>
                    Guest (Below 6)
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Address in UK <span className="text-red-500">*</span></span>
              </label>
              <textarea
                type="text"
                placeholder="Address in UK"
                rows="2"
                name="address_in_uk"
                className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Your District of origin in Bangladesh</span>
              </label>
              <textarea
                type="text"
                placeholder="Your district of origin in BD"
                rows="2"
                name="address_in_ctg"
                className="border-2 rounded-md p-2 w-full z-30 bg-transparent"
              />
            </div>
            <div className="flex justify-between mt-3">
              <table className="border w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-5/12 text-start p-1 border-r">Age</th>
                    <th className="w-2/12 text-center p-1">Fee</th>
                    <th className="w-2/12 text-center p-1 border-l border-r">Qty</th>
                    <th className="w-3/12 text-center p-1">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-1 border-r">
                      <p>Guest above 10 years:</p>
                    </td>
                    <td className="p-1 text-center">
                      <p>£10</p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>{guestU10}</p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>£{10 * guestU10}</p>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="p-1 border-r">
                      <p>Guest 6 to 9 years:</p>
                    </td>
                    <td className="p-1 text-center">
                      <p>£5</p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>{guestU6}</p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>£{5 * guestU6}</p>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="p-1 border-r">
                      <p>Guest below 6 years:</p>
                    </td>
                    <td className="p-1 text-center">
                      <p>free</p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>{guestB6} </p>
                    </td>
                    <td className="p-1 text-center border-r border-l">
                      <p>£{0 * guestB6}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-1">
              <div className="flex justify-center px-4 py-2 bg-green-600  text-_white font-semibold rounded-full">
                <h1>
                  Total Member :{" "}
                  {parseInt(guestB6) + parseInt(guestU10) + parseInt(guestU6)}
                </h1>
              </div>
              <div className="flex justify-center px-4 py-2 bg-green-600  text-_white font-semibold rounded-full w-16">
                <h1>£{`${10 * guestU10 + 5 * guestU6}`}</h1>
              </div>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          {/* <div
            className={`${paySection && 'hidden'} duration-500 w-full transition-all ease-in-out`}
          >
            <MejbanPayment phone={phone} amount={totalAmount} />
          </div> */}
        </div>
        {/* Image Card */}
        <div className="text-center lg:text-left rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4 h-full w-full overflow-hidden md:w-full flex items-center">
          <img className="w-full h-full object-cover" src={mejban} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mejban;
