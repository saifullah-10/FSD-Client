import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className=" flex justify-center items-center flex-col min-h-screen">
      <div className=" flex justify-center">
        <h1 className=" pb-3 text-center text-2xl md:text-4xl font-bold border-b-2 border-orange-600 inline">
          MFS System
        </h1>
      </div>
      <div className=" w-1/2 mx-auto border lg:mt-10 mt-5 py-2  px-5 rounded-xl border-orange-500">
        <h1 className="text-center text-xl lg:text-2xl py-3 font-medium border-b-2">
          Login
        </h1>
        <form className=" my-10 gap-2 flex flex-col">
          <label>
            Mobile Number:
            <input
              className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
              name="mobile_number"
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
            Don&apos;t have account.{" "}
            <Link to={"/role"}>
              {" "}
              <span className=" text-blue-700">Register</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
