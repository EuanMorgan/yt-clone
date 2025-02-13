import { SidebarProvider } from "~/components/ui/sidebar";
import { HomeNavbar } from "~/modules/home/ui/components/home-navbar";
import { HomeSidebar } from "~/modules/home/ui/components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto pt-[4rem]">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
