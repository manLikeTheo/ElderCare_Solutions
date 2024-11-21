import React from "react";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto  bg-slate-300 px-6">
      {/* <Navbar /> */}
      {children}
    </div>
  );
}

export default MarketingLayout;
