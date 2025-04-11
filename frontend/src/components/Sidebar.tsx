import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <aside className="w-64 bg-[#2F365F] shadow-md hidden md:block">
      <div className="h-[70px] flex items-center justify-center bg-[#001529]">
        <h1 className="text-xl font-bold text-white">Logo</h1>
      </div>
      <nav className="p-12 text-[#B2B7FF] text-lg flex flex-col gap-5">
        <Link
          to="/companies"
          className={`${
            path === "/companies" ? "text-white" : "hover:text-white"
          }`}
        >
          @ Companies
        </Link>
        <Link
          to="/contacts"
          className={`${
            path === "/contacts" ? "text-white" : "hover:text-white"
          }`}
        >
          @ Contacts
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
