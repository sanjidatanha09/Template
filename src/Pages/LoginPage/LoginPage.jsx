import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../../src/assets/login.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import BtnLoader from "../../Utility/Loader/BtnLoader";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onChange = (value) => {
    // console.log("Captcha value:", value);
  };

  const onSubmit = (data) => {
    
  };

 

  return (
    <div className="">
      <div className="flex lg:justify-between justify-center h-screen items-center w-full">
        <div className="lg:block hidden w-2/3">
          <img src={login} alt="" />
        </div>
        {/* ================================ Form Section ================================ */}
        <form
          className="w-1/3 bg-white h-full flex flex-col items-center justify-center px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="text-center md:text-left w-full text_color font_large margin_bottom">
            Welcome to WB Softwares 👋
          </h4>
          <p className="text-center md:text-left w-full text_color font_standard">
            Please sign-in to your account and start the adventure
          </p>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="relative z-0 w-full mb-5 group pt-3">
            <label className="text_color text_font">
              Phone
              <span className="required_text_color">(required)</span>{" "}
            </label>
            <input
              type="number"
              className="card_bg border border_bg text_color font_standard  rounded-sm focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none mt-1"
              placeholder="Phone Number"
              {...register("email", { required: true })}
            />

            {errors.email && <span>This field is required</span>}
          </div>
          <div className="relative z-0 w-full mb-5 group pt-3">
            <label className="text_color text_font">
              Password
              <span className="required_text_color">(required)</span>{" "}
            </label>
            <input
              type="password"
              name="password"
              className="card_bg border border_bg text_color font_standard rounded-sm focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none mt-1"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="w-full text-left pb-4">
            <ReCAPTCHA
              sitekey={`${
                import.meta.env.VITE_ReCAPTCHA_KEY
                  ? import.meta.env.VITE_ReCAPTCHA_KEY
                  : "site key"
              }`}
              onChange={onChange}
            />
          </div>
          <button className="text_color w-full btn_primary">
            {loading ? <BtnLoader /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
