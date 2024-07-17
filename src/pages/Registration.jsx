import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../app/services/userApi";
import { useEffect } from "react";

export default function Registration() {
  const [postUser, { data: UID, isLoading }] = usePostUserMutation();
  const { role } = useSelector((state) => state.registerRole);
  const navigate = useNavigate();
  console.log(UID);
  useEffect(() => {
    if (UID) {
      localStorage.setItem("info", UID?._id);
      navigate("/dashboard");
    }
  }, [UID, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.mobile_number.value;
    const email = e.target.email.value;
    const pin = e.target.pin_number.value;

    const data = {
      name,
      phone: parseInt(phone),
      email,
      pin,
      role,
      amount: 0,
      status: "pending",
    };

    try {
      await postUser(data).unwrap();
    } catch (e) {
      console.log("failed to register", e);
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!role) {
    return <Navigate to={"/role"}></Navigate>;
  }

  return (
    <section className=" flex justify-center items-center flex-col min-h-screen">
      <div className=" flex justify-center">
        <h1 className=" pb-3 text-center text-2xl md:text-4xl font-bold border-b-2 border-orange-600 inline">
          MFS System
        </h1>
      </div>
      <div className=" w-1/2 mx-auto border lg:mt-10 mt-5 py-2  px-5 rounded-xl border-orange-500">
        <h1 className="text-center text-xl lg:text-2xl py-3 font-medium border-b-2">
          {role[0].toUpperCase() + role.slice(1)} Registration
        </h1>
        <form onSubmit={handleSubmit} className=" my-10 gap-2 flex flex-col">
          <label>
            Name:
            <input
              className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
              type="text"
              name="name"
              placeholder="ex: Jamal"
            />
          </label>
          <label>
            Mobile Number:
            <input
              className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
              type="number"
              name="mobile_number"
              placeholder="ex: 01700000000"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numeric input
              }}
            />
          </label>
          <label>
            Email:
            <input
              className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
              type="email"
              name="email"
              placeholder="ex: demo@example.com"
            />
          </label>
          <label>
            PIN:
            <input
              className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
              type="password"
              name="pin_number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numeric input
              }}
            />
          </label>
          <input
            className=" rounded-lg text-xl font-bold hover:bg-[#E1B852] text-white  mt-5 py-2 bg-[#D4AA41]"
            type="submit"
            value="Submit"
          />
        </form>
        <div className=" mb-2">
          <p>
            Already have account.{" "}
            <Link to={"/"}>
              {" "}
              <span className=" text-blue-700">Login</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
