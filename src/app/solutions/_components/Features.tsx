import React from "react";

const Features = ({ features }: { features: string[] }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Designed for Comfort, Built for Connection
            </h2>
            <p className="text-lg text-slate-600">
              WellAged transforms smartphones into senior-friendly hubs with:
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-rose-700 rounded-full" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="/feature-screenshot.png"
              alt="Feature Preview"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
