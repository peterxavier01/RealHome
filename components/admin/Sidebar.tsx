import NavItems from "./NavItems";
import Header from "./Header";

const Sidebar = () => {
  return (
    <div className="hidden border-r border-r-slate-200/30 md:block bg-neutral-700">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <Header />

        <NavItems />
      </div>
    </div>
  );
};

export default Sidebar;
