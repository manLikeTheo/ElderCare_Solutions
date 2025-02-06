import {
  ArrowRightIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function GettingStarted() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in 1 minute to access our senior care platform",
      icon: <UserPlusIcon className="w-8 h-8 text-rose-700" />,
      image: "/signup-screenshot.png",
    },
    {
      number: "02",
      title: "Choose Your Solution",
      description:
        "Select between digital companion, care kits, or caregiver services",
      icon: <ShoppingCartIcon className="w-8 h-8 text-rose-700" />,
      image: "/choose-solution.png",
    },
    {
      number: "03",
      title: "Set Up Profile",
      description: "Add senior details and preferences for personalized care",
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-rose-700" />,
      image: "/profile-setup.png",
    },
    {
      number: "04",
      title: "Start Engaging",
      description: "Begin using services within minutes of setup",
      icon: <ArrowRightIcon className="w-8 h-8 text-rose-700" />,
      image: "/dashboard.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Begin your journey to better senior care in less than 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Steps Column */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div // Step
                id={`step-${index + 1}`}
                key={step.number}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <span className="text-rose-700 text-2xl font-bold bg-rose-50 rounded-full w-16 h-16 flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-2">{step.icon}</div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>

                {/* Step Image (Hover Reveal) */}
                <div className="absolute top-1/2 -right-[480px] w-[450px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <div className="relative rounded-xl shadow-2xl overflow-hidden transform -translate-y-1/2 border-4 border-red-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Column (Mobile Only) */}
          <div className="lg:hidden text-center mt-12 border-4 border-red-500 p-6 rounded-2xl">
            <button className="bg-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-800 transition-colors">
              Start Free Trial
            </button>
            <p className="mt-4 text-slate-600 text-sm">
              7-day free trial • No credit card required
            </p>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="text-center mt-14 hidden lg:block border-4 border-red-500 p-6 rounded-2xl">
          <button className="bg-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-800 transition-colors">
            Start Your Free Trial Now
          </button>
          <p className="mt-4 text-slate-600">
            Complete setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
export default GettingStarted;
// import React from "react";

// const GetStarted = () => {
//   return (
//     <div className="py-4  text-center flex flex-col items-center">
//       <div className="heading">
//         <h1 className="heading text-3xl text-stone-700 font-bold capitalize py-3">
//           How to get started
//         </h1>
//         <p className="text text-stone-700 text-lg font-semibold px-6 italic">
//           Using <b className="text-rose-700 text-2xl">WellAged </b> is simple
//           and easy. Complete the onboarding process to get started.
//         </p>
//       </div>
//       <div className="image-steps py-5">
//         <div className="img w-[400px] h-[400px] bg-slate-800 rounded-2xl">
//           Image
//         </div>
//         <div className="steps">
//           <p>1</p>
//           <p>2</p>
//           <p>3</p>
//           <p>4</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;
