export default function DefaultDashboard() {
  const role = "admin";
  return (
    <div>
      <h1 className=" flex items-center gap-2 text-4xl">
        Al Rafi{" "}
        <span className=" text-sm px-5 bg-green-500 py-1 rounded-xl text-white">
          {role === "user" ? "User" : role === "agent" ? "Agent" : "Admin"}
        </span>
      </h1>
      {role != "admin" && (
        <>
          <div>
            <h1 className=" text-xl py-3">Amount: 3000 BDT</h1>
          </div>
        </>
      )}
    </div>
  );
}
