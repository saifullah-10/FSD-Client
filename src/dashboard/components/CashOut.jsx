export default function CashOut() {
  return (
    <div>
      {" "}
      <form className=" my-10 gap-2 flex flex-col">
        <label>
          Agent Phone Number:
          <input
            required
            className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
            name="mobile_number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </label>
        <label>
          Amount:
          <input
            required
            className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
            name="phone_number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </label>
        <label>
          PIN:
          <input
            required
            className="mt-3 block w-full outline-none rounded-xl border-2 px-5 py-2"
            type="password"
            name="pin_number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </label>
        <input
          className=" rounded-lg text-xl font-bold hover:bg-[#E1B852] text-white  mt-5 py-2 bg-[#D4AA41]"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
