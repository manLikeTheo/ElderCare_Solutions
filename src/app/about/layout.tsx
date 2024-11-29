import { ReactNode } from "react";
import Header from "../components/Header";
function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto  bg-slate-500">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default AboutLayout;
