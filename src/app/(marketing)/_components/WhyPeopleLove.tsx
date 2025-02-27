import Image from "next/image";
import save_cost from "../../../../public/images/save_cost.png";
import senior_care_ondemand from "../../../../public/images/senior_care_ondemand.jpg";
import caregivers_network from "../../../../public/images/caregivers_network.png";
function WhyPeopleLove() {
  return (
    <section className="flex flex-col justify-center py-12 bg-blue-50">
      <h1 className="text-5xl font-bold text-stone-900 text-center p-12">
        Why Families <span>Trust</span>{" "}
        <b className="text-rose-700">WellAged Care</b>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 px-10 max-container">
        {/* Card 1: Affordability */}
        <div className="bg-white p-8 rounded-2xl ring-8 ring-slate-400 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src={save_cost} // Consider using a money+heart icon
            alt="Affordable care"
            width={200}
            height={200}
            className="flex flex-col items-center justify-center mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Save Costs, Not Quality
          </h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>Zero Middleman Fees:</strong> 100% of payments go directly
              to caregivers -{" "}
              <span className="text-rose-700 ">50% cheaper</span> than agencies.
            </li>
            <li>
              <strong>Budget-Friendly Care Kits:</strong> Essential wellness
              items{" "}
              <span className="text-rose-700 ">
                to foster independence and safety
              </span>{" "}
              - less than 1 week’s nursing home costs.
            </li>
          </ul>
        </div>

        {/* Card 2: Trusted Care */}
        <div className="bg-white p-8 rounded-2xl ring-8 ring-slate-400 shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src={caregivers_network}
            alt="Vetted caregivers"
            width={200}
            height={200}
            className="flex flex-col items-center justify-center mx-auto mb-4"
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
        <div className="bg-white p-8 rounded-2xl ring-8 ring-slate-400 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
          <Image
            src={senior_care_ondemand}
            alt="Instant booking"
            width={250}
            height={250}
            className="mx-auto mb-4 rounded-xl"
          />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Care and support on demand
          </h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>24/7 On-Demand Care:</strong> Book vetted caregivers -
              based on your preferences -{" "}
              <span className="text-rose-700">in under 5 minutes</span>.
            </li>
            <li>
              <strong>Care Management Access:</strong> Manage care from abroad
              via our <span className="text-rose-700">real-time dashboard</span>
              .
            </li>
          </ul>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <div className="bg-slate-800 text-white px-6 py-2 rounded-full font-medium">
          🛡️ 100% Payment Protection
        </div>
        <div className="bg-slate-800 text-white px-6 py-2 rounded-full font-medium">
          ⚕️ Vetted and Trained Services Providers!
        </div>
      </div>
    </section>
  );
}

export default WhyPeopleLove;
