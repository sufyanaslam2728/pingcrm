const Header = () => {
  return (
    <header className="h-[70px] bg-white border-b flex items-center px-12 justify-between">
      <div className="text-base font-normal text-[#6a6f77]">
        Acme Corporation
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-indigo-200"></div>
      </div>
    </header>
  );
};

export default Header;
