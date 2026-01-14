import { CloudRain, Building2, Map, Settings } from "lucide-react";

const Sidebars = () => {
  return (
    <div className="h-[100%] w-[85px] bg-[#202C3C] backdrop-blur-2xl rounded-2xl flex flex-col items-center py-6 shadow-xl border border-white/5">

      {/* Top icon */}
      <div className="mb-8 text-blue-400 text-[28px]">
        ☔
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-7">
        <SidebarItem icon={<CloudRain size={18} />} label="Weather" active />
        <SidebarItem icon={<Building2 size={18} />} label="Cities" />
        <SidebarItem icon={<Map size={18} />} label="Map" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">

      <div
        className={`p-3 rounded-xl transition ${
          active
            ? "bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/20"
            : "bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10"
        }`}
      >
        {icon}
      </div>

      <span
        className={`text-xs tracking-wide ${
          active ? "text-white font-medium" : "text-gray-400 group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default Sidebars
