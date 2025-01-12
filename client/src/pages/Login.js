import loginImg from "../assets/images/login.webp";
import Template from "../components/core/Auth/Template";
import { login } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbCornerDownRightDouble } from "react-icons/tb";
import { BsLightningChargeFill } from "react-icons/bs";

const Login = () => {
  const [showDemo, setShowDemo] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    // VERY INNOVATIVE WORK IS PENDING >> USER'S DON'T NEED TO REGISTER TO GET LOGIN USER EXPERIENCE

    <>
      <div
        className={`${
          showDemo ? "" : "hidden"
        } justify-center items-center absolute bg-richblack-200 top-52 md:top-32 md:right-[50%] right-[10%] p-6 -rotate-[20deg] z-20 `}
      >
        <div className="flex flex-col gap-2 relative">
          <div
            onClick={() => {
              setShowDemo(false);
            }}
            className="absolute top-[-30px] right-[-20px] text-5xl text-richblack-900 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="20"
              height="20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
                fill="none"
                stroke="#FF6666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </svg>
          </div>
          <div className=" gap-y-2 flex flex-col">
            <p className="text-2xl font-extrabold flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-md">
              Take a Demo &nbsp; <BsLightningChargeFill size={20} />
            </p>

            <div>
              <button
                onClick={() => {
                  dispatch(login("zimam8588@gmail.com", "1234", navigate));
                }}
                className="bg-yellow-100 font-semibold mt-4 mb-1 text-richblack-900 px-4 py-2 rounded-md flex"
              >
                <TbCornerDownRightDouble className="text-2xl text-richblack-900 hidden md:block" />
                Click here for Instructor Demo
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(
                    login("ourbetterworld0@gmail.com", "1234", navigate)
                  );
                }}
                className="bg-yellow-100 font-semibold text-richblack-900 px-4 py-2 rounded-md flex"
              >
                <TbCornerDownRightDouble className="text-2xl text-richblack-900 md:block hidden" />
                Click here for Student Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={loginImg}
        formType="login"
      />
    </>
  );
};

export default Login;
