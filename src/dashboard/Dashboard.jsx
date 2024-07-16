export default function Dashboard() {
  const role = "user";
  return (
    <section className=" min-h-screen py-10">
      <div className=" w-[98%] md:w-[70%] h-[calc(100vh-6rem)]  mx-auto">
        <div className="flex justify-center">
          <h1 className=" text-2xl font-bold  text-center  border-b-2 border-orange-600 inline lg:text-4xl">
            Welcome To{" "}
            {role === "user" ? "User" : role === "agent" ? "Agent" : "Admin"}{" "}
            Dashboard
          </h1>
        </div>
        <div className=" flex items-center h-full">
          <div className=" border-2 border-orange-200 inline-block p-5 bg-orange-400 text-white rounded-xl ">
            <div className=" flex flex-col items-center  gap-5 ">
              <div className=" text-lg md:text-2xl pb-2 border-b-2 border-orange-300">
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
                  <li className=" hover:text-white/40 cursor-pointer">
                    Send Money
                  </li>
                  <li className=" hover:text-white/40 cursor-pointer">
                    Cash Out
                  </li>
                  <li className=" hover:text-white/40 cursor-pointer">
                    Cash In
                  </li>
                  <li className=" hover:text-white/40 cursor-pointer">
                    History
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
