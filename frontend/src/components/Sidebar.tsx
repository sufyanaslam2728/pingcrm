import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Contacts } from "../assets/Contacts.svg";
import { ReactComponent as Companies } from "../assets/Companies.svg";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <aside className="w-64 bg-[#2F365F] shadow-md hidden md:block">
      <div className="h-[70px] flex items-center justify-center bg-[#001529]">
        <Logo className="w-28 h-auto fill-white" />
      </div>
      <nav className="p-10 text-[#B2B7FF] text-lg flex flex-col gap-5">
        <Link
          to="/companies"
          className={`${
            path === "/companies" ? "text-white" : "hover:text-white"
          } flex items-center gap-2`}
        >
          <Companies className="w-5 fill-white" /> Companies
        </Link>
        <Link
          to="/contacts"
          className={`${
            path === "/contacts" ? "text-white" : "hover:text-white"
          } flex gap-2`}
        >
          <Contacts className="w-6 fill-white" /> Contacts
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
