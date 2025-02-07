function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto  bg-slate-500">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default MarketingLayout;
