import { ReactNode } from "react";

import MobileNav from "@/components/shared/mobile-nav";
import SideBar from "@/components/shared/side-bar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="root">
      <SideBar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
