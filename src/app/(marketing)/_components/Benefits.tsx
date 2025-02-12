// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Image from "next/image";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
function Benefits() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-24 bg-sky-100">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-slate-800">
          <span className="text-rose-700">Transform</span> Senior Care with
          <br />
          <span className="text-rose-700">3X More Impact</span> Than Traditional
          Solutions
        </h2>

        <div className="space-y-6">
          {/* Benefit 1 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Age-Relevant Health and Wellness Education
              </h3>
              <p className="text-slate-700">
                Easy-to-understand health and wellness guides -
                <span className="font-semibold"> in local languages </span> - no
                medical jargon.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Instant Caregiver Access
              </h3>
              <p className="text-slate-700">
                Book vetted helpers in
                <span className="font-semibold text-rose-700">
                  {" "}
                  under 5 minutes
                </span>{" "}
                - 24/7 support for emergencies or companionship.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Customized Senior Care Kits
              </h3>
              <p className="text-slate-700">
                <span className="font-semibold">
                  Curated care packages containing essentials
                </span>{" "}
                for personal hygiene, safety & mobility, and diet & nutrition -{" "}
                <span className="font-semibold text-rose-700">
                  delivered in 72 hrs
                </span>
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Family Peace of Mind
              </h3>
              <p className="text-slate-700">
                Real-time updates via app -
                <span className="font-semibold"> 92% of families</span> report
                reduced anxiety about aging parents.
              </p>
            </div>
          </div>
          {/* Benefit 5 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Complete Senior Care Ecosystem
              </h3>
              <p className="text-slate-700">
                A blend of {""}
                <span className="font-semibold">
                  digital, physical, and in-person
                </span>{" "}
                products & services -{" "}
                <span className="font-semibold text-rose-700">
                  {" "}
                  no more narrow focus on clinical care
                </span>
                .
              </p>
            </div>
          </div>
          {/* Benefit 6 */}
          <div className="flex gap-4 items-start">
            <FaCheckCircle
              className="flex-shrink-0 mt-1 text-emerald-600"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Daily Engagement and Community
              </h3>
              <p className="text-slate-700">
                Interactive forums and actiities to
                <span className="font-semibold">
                  {" "}
                  combat social isolation & loneliness
                </span>{" "}
                and improve mental well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-slate-800 mt-6 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider">
            ✅ 100% Satisfaction Guarantee
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/AgeBuddy Home Screen UI.jpg"
          alt="WellAged app in action"
          width={500}
          height={800}
          className="rounded-2xl shadow-xl border-4 border-white"
        />
      </div>
    </section>
  );
}

export default Benefits;
