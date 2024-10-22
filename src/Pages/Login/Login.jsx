import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useUser from "../../Security/useUser";
import logo from "../../assets/Logo/Logo.png";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [, , refetch] = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const info = { mobile: phone, password };

    try {
      const res = await axiosPublic.post("/api/login", info);
      if (res.data) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.access_token);
        navigate("/");
        refetch();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center w-full px-2">
      <div className="w-full">
        <div className="w-full card shadow-xl bg-base-100 relative">
          <div className="flex justify-center absolute -top-10">
            <img
              src={logo}
              className="w-1/5 rounded-full border-4 border-white"
              alt=""
            />
          </div>

          <h1 className="text-2xl text-center pt-14 lg:pt-[70px] pb-2 rounded-t-xl bg-gray-200 text-blue-700 lg:text-3xl font-semibold">
            Welcome to <br /> Greater Chattogram Association UK
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Phone *</span>
              </label>
              <input
                type="number"
                placeholder="phone"
                name="phone"
                className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Password *</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                required
              />
              {/* <label className="label">
                <Link to='' className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-xl rounded-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
