import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

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
              <button
                type="button "
                className="my-3 flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-black transition-colors duration-300 transform bg-[#00FFEE] rounded-lg hover:bg-[#00ffeea2]"
              >
                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                </svg>

                <span className="hidden mx-2 sm:inline">
                  Sign in with Google
                </span>
              </button>
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
