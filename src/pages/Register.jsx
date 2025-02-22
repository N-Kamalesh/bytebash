import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Register() {
  const { handleRegister, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      toast.error("Passwords don't match");
    }
    try {
      await handleRegister({ email, password });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  if (isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <main className="w-full min-h-screen flex justify-center items-stretch bg-[url(/oceanbg.webp)] bg-blue-50 bg-cover  bg-no-repeat bg-center">
        <div className="bg-white flex-1 flex justify-center items-center">
          <img src="/loan.svg" alt="loan" className="w-4/5" />
        </div>
        <div className="z-10 flex-1 flex flex-col justify-center items-center p-4 backdrop-blur-md bg-blue-600 bg-opacity-20">
          <div className="relative flex flex-col items-center w-full">
            <h1 className="text-2xl md:text-4xl font-semibold text-white mt-6">
              Register
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/5 p-5  justify-center items-center space-y-5"
          >
            <div className="flex flex-col w-full mt-4">
              <div className="w-full border-b-2 border-white flex items-center">
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-1 text-[16px] text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-4">
              <div className="w-full border-b-2 border-white flex items-center">
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 text-[16px] text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col w-full mt-4">
              <div className="w-full border-b-2 border-white flex items-center">
                <input
                  type={"password"}
                  required
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-1 text-[16px] text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-4">
              <div className="w-full border-b-2 border-white flex items-center">
                <input
                  type={"text"}
                  required
                  name="confirmpassowrd"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassWord(e.target.value)}
                  className="w-full p-1 text-[16px] text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="w-[80%] flex justify-center p-1">
              <button
                type="submit"
                className="w-fit px-5 py-2 rounded-lg text-xl bg-blue-200 text-blue-600 font-medium hover:bg-blue-50 cursor-pointer hover:text-blue-900 duration-300"
              >
                Register
              </button>
            </div>
          </form>

          <div className="relative top-4 flex mb-6 items-center space-x-2 md:text-lg">
            <span className="m-2   text-cyan-50">Already registered?</span>
            <Link
              to="/login"
              className=" text-cyan-400 hover:text-cyan-500 underline"
            >
              Signin
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
