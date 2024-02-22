import { FaFire } from "react-icons/fa";

const Priority = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaFire className={priority > 0 ? "text-red-400 " : "text-slate-400"} />
      <FaFire className={priority > 1 ? "text-red-400 " : "text-slate-400"} />
      <FaFire className={priority > 2 ? "text-red-400 " : "text-slate-400"} />
      <FaFire className={priority > 3 ? "text-red-400 " : "text-slate-400"} />
      <FaFire className={priority > 4 ? "text-red-400 " : "text-slate-400"} />
    </div>
  );
};

export default Priority;
