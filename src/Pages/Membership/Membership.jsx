import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import logo from "../../assets/Logo/Screenshot.png";

const Membership = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const address_in_uk = e.target.address_in_uk.value;
    const address_in_ctg = e.target.address_in_ctg.value;
    const image = e.target.image.files[0];

    if(phone.length !== 11){
      return toast.error("Mobile must be type 11")
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("address_in_ctg", address_in_ctg);
    formData.append("address_in_uk", address_in_uk);
    formData.append("File", image);

    try {
      const res = await axiosPublic.post(
        "/api/save-member-register-form",
        formData
      );
      if (res.data.status_code === 201) {
        toast.success(res.data.message);
        window.location.href = res.data.paymentURL
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-2 my-4 space-y-2">
      <div className="bg-blue-500 text-white text-center py-[48px]">
        <h1 className="text-text_40px">Become a Member</h1>
      </div>
      <div className="">
        <div className="bg-base-200 gap-gap_primary ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-gap_primary ">
            <div className="text-center lg:text-left rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl lg:text-5xl">
                  Become a Member
                </h1>
              </div>
            </div>
            <div className="text-center lg:text-left card rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4">
              <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_primary">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold">Full Name <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold">Phone <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      name="phone"
                      type="number"
                      placeholder="Enter your phone number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold">Email Address <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-semibold">Gender <span className="text-red-500">*</span></span>
                    </label>
                    <select
                      name="gender"
                      className="input input-bordered"
                      required
                    >
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Address in UK <span className="text-red-500">*</span></span>
                  </label>
                  <textarea
                    name="address_in_uk"
                    type="text"
                    placeholder="Enter Your Address"
                    className="input input-bordered pt-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Address in CTG <span className="text-red-500">*</span></span>
                  </label>
                  <textarea
                    name="address_in_ctg"
                    type="text"
                    placeholder="Enter Your Address"
                    className="input input-bordered pt-2"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Image <span className="text-red-500">*</span></span>
                  </label>
                  <input type="file" className="" name="image" id="" />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left card rounded border-2 border-bg_lightSlate shadow-md bg-base-100 p-4">
              <img className="w-full h-full object-contain" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
