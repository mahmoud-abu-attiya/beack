import { loading } from "../assets";

const Generating = ({ className, lang }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 ltr:mr-4 rtl:ml-4 animate-spin" src={loading} alt="Loading" />
      {lang === "en" ? "AI is generating" : "الذكاء الاصطناعي يولد"}
    </div>
  );
};

export default Generating;
