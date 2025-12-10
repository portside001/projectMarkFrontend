import { authService } from "../service/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userLogo from "../assets/icons/user.png";
import loginBG from "../assets/images/login_bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { email, password };
      const response = await authService.login(payload);

      if (response?.data?.token) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="w-full flex justify-center items-center ">
        <div className="w-full bg-transparent backdrop-blur-xl rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <a className="flex items-center justify-center mb-6 text-2xl font-bold text-gray-900 ">
                <img className="w-8 h-8 mr-2" src={userLogo} alt="user-logo" />
                Login
              </a>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black-900 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#22AA86] focus:border-[#139b77] block w-full p-2.5"
                  placeholder="name@company.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black-900 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#22AA86] focus:border-[#139b77]  block w-full p-2.5"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-400">
                      Remember me
                    </label>
                  </div>
                </div>
                <a className="text-sm font-medium text-primary-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#22AA86] hover:bg-[#139b77] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:hover:cursor-not-allowed disabled:hover:bg-gray-500"
                disabled={loading}
              >
                {loading ? "Loging in..." : "Login"}
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a className="font-medium text-primary-600 hover:underline">
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
