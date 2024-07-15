import { BsBank } from "react-icons/bs";
import { LuUserCheck } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setRole } from "../app/features/registerRoleSlice";

export default function Role() {
  const dispatch = useDispatch();
  return (
    <section className=" flex justify-center items-center flex-col min-h-screen">
      <div className=" items-center flex flex-col gap-20">
        <div>
          <h1 className=" text-2xl font-bold  text-center  border-b-2 border-orange-600 inline lg:text-4xl">
            Select A Role
          </h1>
        </div>
        <div className=" flex  gap-10">
          <div className=" cursor-pointer flex flex-col items-center gap-2 border-4 border-gray-200 w-48 py-4 rounded-xl">
            <LuUserCheck className=" text-4xl text-orange-500 " />
            <h2 className=" text-lg font-semibold text-black/60">As A User</h2>
          </div>
          <Link to={"/register"}>
            <div
              onClick={() => dispatch(setRole("agent"))}
              className=" cursor-pointer flex flex-col items-center gap-2 border-4 border-gray-200  w-48 py-4 rounded-xl"
            >
              <BsBank className=" text-4xl text-orange-500 " />
              <h2 className=" text-lg font-semibold text-black/60">Agent</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
