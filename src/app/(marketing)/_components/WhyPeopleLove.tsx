import Image from "next/image";
function WhyPeopleLove() {
  return (
    <div className="flex flex-col justify-center py-12 bg-stone-200">
      <h1 className="text-5xl font-bold text-stone-900 text-center py-8">
        Why Families <span className="text-rose-700">Trust</span> WellAged Care
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 px-6 max-container">
        {/* Card 1: Affordability */}
        <div className="bg-white p-6 rounded-2xl border-4 border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/Startup Website/money-smartphone.png" // Consider using a money+heart icon
            alt="Affordable care"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Save Costs, Not Quality
          </h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>Zero Middleman Fees:</strong> 100% of payments go directly
              to caregivers - <span className="text-rose-700">50% cheaper</span>{" "}
              than agencies.
            </li>
            <li>
              <strong>Budget-Friendly Care Kits:</strong> Essential safety items
              at <span className="text-rose-700">₦15,000</span> - less than 1
              week’s nursing home costs.
            </li>
          </ul>
        </div>

        {/* Card 2: Trusted Care */}
        <div className="bg-white p-6 rounded-2xl border-4 border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/Startup Website/vetted-caregiver-icon.png"
            alt="Vetted caregivers"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Elite Caregiver Network
          </h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>Triple-Vetted Professionals:</strong>
              <span className="text-rose-700"> Background checks</span>, skills
              tests, and family ratings (4.8★ avg).
            </li>
            <li>
              <strong>Specialized Training:</strong> Dementia care, fall
              prevention, and cultural competency certified.
            </li>
          </ul>
        </div>

        {/* Card 3: Convenience */}
        <div className="bg-white p-6 rounded-2xl border-4 border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/Startup Website/instant-booking-icon.png"
            alt="Instant booking"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Care and support on demand
          </h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>24/7 On-Demand Care:</strong> Book vetted caregivers{" "}
              <span className="text-rose-700">in under 5 minutes</span>.
            </li>
            <li>
              <strong>Global Family Access:</strong> Manage care from abroad via
              our <span className="text-rose-700">real-time dashboard</span>.
            </li>
          </ul>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <div className="bg-slate-800 text-white px-6 py-2 rounded-full">
          🛡️ 100% Payment Protection
        </div>
        <div className="bg-slate-800 text-white px-6 py-2 rounded-full">
          ⚕️ Partnered with Lagos Senior Health Alliance
        </div>
      </div>
    </div>
  );
}

export default WhyPeopleLove;
