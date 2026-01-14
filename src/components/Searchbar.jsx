import { MapPin } from "lucide-react";
import { MdOutlineClose } from "react-icons/md";

const Searchbar = ({ value, onChange, onSubmit, onClear }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-12 flex items-center gap-3 px-5 rounded-xl bg-[#202C3C] backdrop-blur-xl border border-white/5 shadow-lg"
    >
      <MapPin size={18} className="text-blue-400" />

      <input
        type="text"
        placeholder="Search for cities"
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="text-white p-1 rounded-full hover:bg-[#2a3d55] cursor-pointer"
        >
          <MdOutlineClose size={22} />
        </button>
      )}
    </form>
  );
};

export default Searchbar;
