import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Compenents/Shared/GoogleLogin";

const Register = () => {
  const { createUser, updateUserProfile,
    setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(name)
        setUser({displayName:name})

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <div className="hero min-h-screen ">
          <div
            className="hero-content flex-col lg:flex-row-reverse w-96
            border-2 rounded-2xl border-[#00FFEE] shadow-lg shadow-[#00FFEE]"
          >
            <div className="card w-full max-w-sm shrink-0  text-[#00FFEE]">
              <form onSubmit={handleRegister} className="card-body ">
                <h2 className="text-center font-bold text-4xl font-playwrite-hr">
                  Register
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="text-[#00FFEE]">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-[#00FFEE]">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 rounded-lg bg-[#00FFEE] text-black font-bold hover:bg-[#00ffeea2]">
                    Register
                  </button>
                </div>
              </form>
              {/* social login */}
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b border-gray-600 lg:w-1/5"></span>

                <span className="text-xs text-center  uppercase text-[#00FFEE] hover:underline">
                  or Register with Social Media
                </span>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>
              {/*  google*/}
              <GoogleLogin></GoogleLogin>
              <p className="text-center mt-3">
                Already have an account ?{" "}
                <Link className="hover:underline" to="/login">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
