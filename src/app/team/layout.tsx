import { ReactNode } from "react";
import Header from "../components/Header";
function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto  bg-stone-200/50">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default TeamLayout;
