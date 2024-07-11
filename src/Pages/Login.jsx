import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Compenents/Shared/GoogleLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <div className="hero min-h-screen ">
          <div
            className="hero-content flex-col lg:flex-row-reverse w-96
          border-2 rounded-2xl border-[#00FFEE] shadow-lg shadow-[#00FFEE]"
          >
            <div className="card w-full max-w-sm shrink-0  text-[#00FFEE]">
              <form onSubmit={handleLogin} className="card-body ">
                <h2 className="text-center mb-10 font-bold text-4xl font-playwrite-hr ">
                  Login
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="text-[#00FFEE]">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-[#00FFEE]">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 rounded-lg bg-[#00FFEE] text-black font-bold hover:bg-[#00ffeea2]">
                    Login
                  </button>
                </div>
              </form>
              {/* social login */}
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b border-gray-600 lg:w-1/5"></span>

                <span className="text-xs text-center  uppercase text-[#00FFEE] hover:underline">
                  or login with Social Media
                </span>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>
              {/* google login */}
             <GoogleLogin></GoogleLogin>
              <p className="text-center mt-3">
                Are you new here?{" "}
                <Link className="hover:underline" to="/register">
                  Please Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
