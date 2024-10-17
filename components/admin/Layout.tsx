import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-5500">
      <Sidebar />

      <div className="flex flex-col">
        <header className="flex h-14 w-full items-center gap-4 border-b bg-neutral-700 px-4 lg:h-[60px] lg:px-6">
          <MobileNav />

          <SearchBar />

          <UserMenu />
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
