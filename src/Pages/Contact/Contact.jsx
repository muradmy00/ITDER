import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if(phone.length !== 11){
      return toast.error("Mobile must be type 11")
    }

    const formData = {
      name,
      phone,
      email,
      message,
    };

    try {
      const res = await axiosPublic.post("/api/save-contact-form", formData);
      if (res.data.status_code === 201) {
        toast.success(res.data.message);
        e.target.reset();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="mx-2 my-4 space-y-4">
      <div className="bg-blue-500 text-white text-center py-[48px]">
        <h1 className="text-text_40px">Contact Us</h1>
        <p className="">Get in touch with us</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 ">
        <div className="flex items-center justify-center rounded bg-white border-2 border-bg_lightSlate shadow-md px-p_12px py-p_12px  mx-auto w-full md:w-[50%]">
          <div className=" text-text_18px mx-auto  text-center ">
            <h1 className="font-bold text-3xl">Contact Information</h1>
            <p>
              <span className="font-bold">Email : </span> infogcauk@gmail.com{" "}
            </p>
            <p>
              <span className="font-bold">Phone : </span> +447799946311,
              +447550448928, +447932612667
            </p>
            <p>
              {" "}
              <span className="font-bold">Address : </span> Chattogram Centre,
              113 New Road, Whitechapel, London E1 1HJ
            </p>
          </div>
        </div>

        <div className="rounded bg-white text-text_18px mx-auto  flex-1 border-2 border-bg_lightSlate shadow-md px-p_12px py-p_12px w-full md:w-[50%]">
          <h1 className="font-bold text-xl ">Contact Form</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Full Name <span className="text-red-500">*</span></span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border border-gray-500 rounded-md p-3 h-10"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Email <span className="text-red-500">*</span></span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border border-gray-500 rounded-md p-3 h-10"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Phone <span className="text-red-500">*</span></span>
              </label>
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                className="border border-gray-500 rounded-md p-3 h-10"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Message <span className="text-red-500">*</span></span>
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                name="message"
                className="border border-gray-500 rounded-md p-3"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="button_primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
