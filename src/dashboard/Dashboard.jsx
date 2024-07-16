import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const role = "agent";
  return (
    <section className=" min-h-screen py-10">
      <div className=" w-[98%] md:w-[70%] h-[calc(100vh-6rem)]  mx-auto">
        <div className="flex justify-center">
          <h1 className=" text-2xl pb-2 font-bold  text-center  border-b-2 border-orange-600 inline lg:text-4xl">
            Welcome To{" "}
            {role === "user" ? "User" : role === "agent" ? "Agent" : "Admin"}{" "}
            Dashboard
          </h1>
        </div>
        <div className="  flex items-center h-full">
          <div className=" w-96 border-2 border-orange-200 inline-block p-5 bg-orange-400 text-white rounded-xl ">
            <div className=" flex flex-col items-center  gap-5 ">
              <div className=" text-lg md:text-2xl pb-2 border-b-2 block border-orange-300">
                <div>
                  <img src="" alt="" />
                  <h2>Name: AL Rafi</h2>
                </div>
                <div>
                  <h3>Balance: 300$</h3>
                </div>
              </div>
              <div className=" text-lg md:text-2xl ">
                <ul className=" flex flex-col gap-y-2">
                  {/* /dashboard/send-money */}
                  {role === "user" && (
                    <>
                      <NavLink
                        to={"/dashboard/send-money"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        <li className=" hover:text-white/40 cursor-pointer">
                          Send Money
                        </li>
                      </NavLink>
                      <NavLink
                        to={"/dashboard/cash-out"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        <li className=" hover:text-white/40 cursor-pointer">
                          Cash Out
                        </li>
                      </NavLink>
                      <NavLink
                        to={"/dashboard/cash-in"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        <li className=" hover:text-white/40 cursor-pointer">
                          Cash In
                        </li>
                      </NavLink>
                      <NavLink
                        to={"/dashboard/history"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        <li className=" hover:text-white/40 cursor-pointer">
                          History
                        </li>
                      </NavLink>
                    </>
                  )}
                  {role === "agent" && (
                    <>
                      {" "}
                      <NavLink
                        to={"/dashboard/tr-management"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        {" "}
                        <li className=" text-nowrap hover:text-white/40 cursor-pointer">
                          Transaction Management
                        </li>
                      </NavLink>
                      <NavLink
                        to={"/dashboard/tr-history"}
                        className={({ isActive }) =>
                          isActive ? "text-white/40" : ""
                        }
                      >
                        {" "}
                        <li className=" text-nowrap hover:text-white/40 cursor-pointer">
                          Transactions History
                        </li>
                      </NavLink>
                    </>
                  )}
                  {role === "admin" && (
                    <>
                      <li className=" hover:text-white/40 cursor-pointer">
                        User Management
                      </li>
                      <li className=" hover:text-white/40 cursor-pointer">
                        System Management
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}
