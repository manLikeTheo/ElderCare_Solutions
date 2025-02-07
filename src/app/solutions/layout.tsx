import { ReactNode } from "react";
function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto  bg-slate-500">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default ContactLayout;
