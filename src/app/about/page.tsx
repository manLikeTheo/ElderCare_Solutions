import Image from "next/image";
import african_elderly from "../../../public/images/african_elderly.png";
import Senior_Citizen from "../../../public/images/Senior_Citizen.png";
import eldercare from "../../../public/Startup Website/eldercare.jpg";
import nigeria_healthcare_crisis from "../../../public/Startup Website/nigeria_healthcare_crisis.png";
// SDG goals
import sdg_3 from "../../../public/SDG/sdg_3.png";
import sdg_8 from "../../../public/SDG/sdg_8.png";
import sdg_10 from "../../../public/SDG/sdg_10.png";

function About_Us() {
  return (
    <div className="bg-stone-50">
      {/* Mission Hero */}
      {/* <section className="relative bg-purple-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            Reimagining Elder Care for Nigeria's Golden Generation
          </h1>
          <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-xl lg:text-2xl leading-relaxed">
              "At WellAged Care, we're building Africa's first integrated care
              ecosystem that honors tradition while embracing innovation - where
              seniors thrive through{" "}
              <span className="font-bold">digital connection</span>,
              <span className="font-bold"> cultural understanding</span>, and
              <span className="font-bold"> community-powered care</span>."
            </p>
          </div>
        </div>
      </section> */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={african_elderly}
            alt="Happy elderly person"
            layout="fill"
            objectFit="cover"
            className="opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200/50 via-sky-100/70 to-stone-100/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-20">
          <div className="max-w-2xl bg-white/90 p-8 rounded-2xl shadow-xl backdrop-blur-xl">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-t from-blue-900 via-cyan-500 to-blue-900 bg-clip-text text-transparent mb-6 tracking-wider">
              Redefining Elder Care in Africa
            </h1>
            <p className="text-lg text-stone-700">
              <b className="text-[20px]">WellAged Care+</b> is a senior-focused
              social enterprise dedicated to transforming the way we care for
              seniors. We are addressing the overlooked gaps in senior care,
              where clinical needs often take precedence over social, physical,
              and emotional wellbeing. We believe every senior deserves a life
              of dignity, safety, and social support, regardless of where their
              family resides. Through innovative technology and our Senior Care
              Kit, WellAged Care is reshaping the elder care landscape in
              Nigeria and Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Founder's story */}
      <section className="bg-stone-50">
        {/* Personal Story Section */}
        <div className="container mx-auto px-6 lg:px-20 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-8">
              <h2 className="text-4xl bg-clip-text font-bold text-blue-900">
                "Born out of Lived Experience"
              </h2>

              <div className="space-y-6">
                <p className="text-xl text-stone-600">
                  In 2019, my 71-year-old father's devastating fall exposed
                  Nigeria's elder care crisis. While doctors treated his broken
                  shoulder,{" "}
                  <span className="font-semibold">
                    nobody addressed his broken spirit
                  </span>{" "}
                  - the loneliness, fear, and daily struggles that followed.
                </p>

                <div className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 p-6 rounded-xl border-l-8 border-rose-500">
                  <p className="text-stone-100">
                    "We watched his world shrink to a single room, his
                    independence stolen by a healthcare system that only
                    measures blood pressure, not quality of life."
                  </p>
                </div>
              </div>
            </div>

            {/* Story Visual */}
            <div className="relative group h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/father-story.jpg"
                alt="Founder's father"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-white py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <h3 className="text-3xl font-bold text-center mb-16">
              Nigeria's Elder Care Crisis
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Care System Breakdown Card */}
              <div className="bg-white/40 p-8 rounded-xl">
                <div className="text-4xl mb-4">🏚️</div>
                <h4 className="text-xl font-bold mb-4">Broken Care System</h4>
                <ul className="list-disc pl-5 space-y-2 text-stone-100/90">
                  <li className="font-medium text-[17px]">
                    10.2M seniors needing care today
                  </li>
                  <li className="font-medium text-[17px]">
                    73% diaspora families with care anxiety
                  </li>
                  <li className="font-medium text-[17px]">
                    0 comprehensive solutions pre-2020
                  </li>
                </ul>
              </div>

              {/* Domestic Accidents Card */}
              <div className="bg-white/40 p-8 rounded-xl">
                <div className="text-4xl mb-4">⚠️</div>
                <h4 className="text-xl font-bold mb-4">
                  Silent Killers at Home
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-stone-100/90">
                  <li className="font-medium text-[17px]">
                    68% of senior falls go unprevented
                  </li>
                  <li className="font-medium text-[17px]">
                    3x higher mortality post-domestic injury
                  </li>
                  <li className="font-medium text-[17px]">
                    92% homes lack senior safety features
                  </li>
                </ul>
              </div>

              {/* Social Isolation Card */}
              <div className="bg-white/40 p-8 rounded-xl">
                <div className="text-4xl mb-4">😔</div>
                <h4 className="text-xl font-bold mb-4">Invisible Suffering</h4>
                <ul className="list-disc pl-5 space-y-2 text-stone-100/90">
                  <li className="font-medium text-[17px]">
                    6/10 seniors eat meals alone
                  </li>
                  <li className="font-medium text-[17px]">
                    82% feel digitally excluded
                  </li>
                  <li className="font-medium text-[17px]">
                    4hrs daily TV as sole company
                  </li>
                </ul>
              </div>
            </div>

            {/* JAPA Wave Impact */}
            <div className="mt-16 bg-violet-50/40 p-10 rounded-xl text-center">
              <div className="inline-block bg-white/95 text-sky-900 px-6 py-2 rounded-full mb-4 font-bold text-2xl">
                The JAPA Effect
              </div>
              <p className="text-xl italic tracking-wide">
                With 144,000+ young Nigerians emigrating annually, traditional
                family care structures are collapsing faster than ever before.
                Older adults are turning "ElderLy Orphans suddenly."
              </p>
            </div>

            {/* Impact Stats */}
            <div className="mt-20 bg-violet-50/30 text-white rounded-2xl p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold">10.2M+</div>
                  <p>Seniors needing consistent care & support today</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    Traditional family structures
                  </div>
                  <p>are increasingly under strain</p>
                </div>
                <div>
                  <div className="text-4xl font-bold">28.9M</div>
                  <p>Projected seniors by 2030</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge to Solution */}
        <div className="container mx-auto px-6 lg:px-20 py-20">
          <div className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 rounded-2xl shadow-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              This is why we built WellAged Care+
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-stone-100/90 mb-8">
                After consulting seniors, families, and care experts, we
                discovered three painful truths:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">💔</div>
                  <p className="font-medium text-md">
                    Clinical care ≠ Quality of life
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">🏡</div>
                  <p className="font-medium text-md">
                    Home should be safe, not dangerous
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">🌍</div>
                  <p className="font-medium text-md">
                    Distance shouldn't mean disconnection
                  </p>
                </div>
              </div>
              <button className="mt-12 bg-gradient-to-r from-cyan-500 via-sky-300 to-cyan-500 text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-colors">
                Discover Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem - Solution */}
      <section className="bg-purple-50 py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center mb-16 shadow-sm">
            Our Solution to this growing Crisis
          </h2>

          {/* Problem-Solution Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Companion */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-900 text-4xl mb-6">📱</div>
              <h3 className="text-2xl text-blue-900 tracking-wide font-bold mb-4">
                Digital Companion Platform
              </h3>
              <p className="text-blue-900 font-semibold mb-4 text-md tracking-wider">
                Addressing digital exclusion & loneliness for 82% of Nigerian
                seniors
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-500 font-medium">
                <li>
                  Easy-to-understand and age-relevant health & wellness
                  information
                </li>
                <li>Daily check-ins via voice commands</li>
                <li>Virtual care management hub for families</li>
              </ul>
              <button className="mt-6 text-blue-900 font-semibold flex items-center">
                See Platform Demo →
              </button>
            </div>

            {/* Care Kits */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-900 text-4xl mb-6">👜</div>
              <h3 className="text-2xl text-blue-900 tracking-wide font-bold mb-4">
                Elderly Care Kits
              </h3>
              <p className="text-blue-600 font-semibold mb-4 text-md tracking-wider">
                Preventing 60% of common senior complications & domestic
                accidents - with practical tools in one care package
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-500 font-medium">
                <li>Basic hygiene and essentials kits</li>
                <li>Safety and household risk prevention kits</li>
                <li>Cognitive stimulation & engagement kits</li>
                <li>Diet and nutrition products</li>
              </ul>
              <button className="mt-6 text-blue-900 font-semibold flex items-center">
                View Kit Contents →
              </button>
            </div>

            {/* Care Network */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-900 text-4xl mb-6">👥</div>
              <h3 className="text-2xl text-blue-900 tracking-wide font-bold mb-4">
                Community-Powered Care & Support Network
              </h3>
              <p className="text-blue-600 font-semibold mb-4 text-md tracking-wider">
                Bridging care access gaps for 73% of diaspora families
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-500 font-medium">
                <li>Vetted caregivers with 3-step verification</li>
                <li>Dependable elder care services on demand</li>
                <li>Local senior social clubs</li>
                <li>Real-time updates between caregivers and families</li>
              </ul>
              <button className="mt-6 text-blue-900 font-semibold flex items-center">
                Meet Our Caregivers →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Point of Difference */}
      <section className="container mx-auto px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src={eldercare}
            alt="Cultural care"
            className="rounded-3xl shadow-2xl"
          />
          <div className="space-y-8 md:space-y-12">
            <div className="inline-block bg-stone-200 text-blue-900 px-8 py-4 rounded-3xl text-3xl tracking-wide font-extrabold">
              Our Edge
            </div>
            <h2 className="text-4xl font-bold text-stone-900">
              More Than Just Senior Care—A Complete Ecosystem
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gradient-to-t from-sky-600/70 via-cyan-200/70 to-sky-600/70 p-6 rounded-xl">
                <div className="text-purple-900 text-2xl">🌍</div>
                <div>
                  <h4 className="text-xl font-bold">
                    Created by Those Who Understand the Struggle
                  </h4>
                  <p className="text-stone-800 font-medium tracking-wide">
                    Born from real-life challenges, our solution goes beyond
                    conventional elder care. We’ve experienced firsthand the
                    gaps in traditional healthcare, and we've designed a system
                    that truly prioritizes seniors’ well-being—physically,
                    emotionally, and socially.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-t from-sky-600/70 via-cyan-200/70 to-sky-600/70 p-6 rounded-xl">
                <div className="text-purple-900 text-2xl">💡</div>
                <div>
                  <h4 className="text-xl font-bold">
                    Holistic Approach, Beyond the Basics{" "}
                  </h4>
                  <p className="text-stone-800 font-medium tracking-wide">
                    Unlike traditional models that focus solely on medical
                    visits or caregiver matching, our comprehensive ecosystem
                    integrates digital tools, community support, in-person care,
                    and proactive wellness solutions—ensuring seniors thrive in
                    every aspect of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Impact */}
      <section className="bg-stone-100 py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-16">
            Aligned with Global Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Image
                src={sdg_3}
                alt="SDG 3"
                width={200}
                height={200}
                className="mx-auto rounded-2xl"
              />
              <h3 className="text-xl font-bold mt-4">
                Good Health & Well-being
              </h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Image
                src={sdg_10}
                alt="SDG 10"
                width={200}
                height={200}
                className="mx-auto rounded-2xl"
              />
              <h3 className="text-xl font-bold mt-4">Reduced Inequalities</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Image
                src={sdg_8}
                alt="SDG 8"
                width={200}
                height={200}
                className="mx-auto rounded-2xl"
              />
              <h3 className="text-xl font-bold mt-4">Decent Work & Growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Vision */}
      <section className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Mission */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 tracking-wider">
                OUR
                <span className="block text-5xl mt-2">MISSION</span>
              </h2>
              <p className="text-xl leading-relaxed">
                To revolutionize elder care in Africa by providing
                <span className="block font-semibold text-black">
                  holistic, dignity-first solutions
                </span>
                that bridge the care gap between seniors and their families,
                <span className="block font-semibold text-black">
                  regardless of distance.
                </span>
              </p>
            </div>

            {/* Vision */}
            <div className="pt-16 border-t border-white/20">
              <h2 className="text-4xl font-bold mb-6 tracking-wider">
                OUR
                <span className="block text-5xl mt-2">VISION</span>
              </h2>
              <p className="text-xl leading-relaxed">
                A future where every African senior thrives with
                <span className="block font-semibold text-black">
                  purpose, safety, and connection,
                </span>
                transforming aging from a challenge into a
                <span className="block font-semibold text-black">
                  cherished life chapter.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-white py-20 border-t-4 border-white/20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Join Our Care Revolution
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">52+</div>
                <div>Seniors Engaged in Research</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">6</div>
                <div>Months to Beta Launch</div>
              </div>
            </div>
            <button className="bg-white text-sky-900 text-lg px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all">
              Be a Beta Tester
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_Us;

// import Image from "next/image";
// import african_elderly from "../../../public/images/african_elderly.png";
// import Senior_Citizen from "../../../public/images/Senior_Citizen.png";
// import eldercare from "../../../public/Startup Website/eldercare.jpg";
// import nigeria_healthcare_crisis from "../../../public/Startup Website/nigeria_healthcare_crisis.png";

// function About_Us() {
//   return (
//     <section className="bg-stone-100">
//       {/* Hero Section */}
//       <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={african_elderly}
//             alt="Happy elderly person"
//             layout="fill"
//             objectFit="cover"
//             className="opacity-95"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-stone-200/50 via-sky-100/70 to-stone-100/50" />
//         </div>

//         <div className="relative z-10 container mx-auto px-6 lg:px-20">
//           <div className="max-w-2xl bg-white/90 p-8 rounded-2xl shadow-xl backdrop-blur-lg">
//             <h1 className="text-5xl lg:text-6xl font-bold text-rose-800 mb-6 tracking-wide">
//               Redefining Elder Care in Africa
//             </h1>
//             <p className="text-xl text-stone-700 leading-relaxed">
//               At WellAged Care, we're building a future where every senior
//               enjoys dignity, connection, and holistic care – no matter where
//               their family resides.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <section className="container mx-auto px-6 lg:px-20 py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div className="inline-block bg-rose-200/40 text-rose-900 px-6 py-2 rounded-full text-2xl tracking-wide font-bold">
//               Our Why
//             </div>
//             <h2 className="text-4xl font-bold text-stone-900 tracking-wide">
//               Bridging Generations Across Continents
//             </h2>
//             <p className="text-xl text-stone-600 leading-relaxed">
//               Born from personal struggle with long-distance caregiving,
//               WellAged Care combines African family values with innovative
//               technology to deliver compassionate elder care solutions.
//             </p>
//           </div>
//           <div className="relative group rounded-3xl overflow-hidden">
//             <Image
//               src={Senior_Citizen}
//               alt="Senior citizen smiling"
//               className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/20 to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="bg-purple-900 text-white py-20">
//         <div className="container mx-auto px-6 lg:px-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-8 text-2xl tracking-wider font-bold">
//               The Challenge
//             </div>
//             <h3 className="text-3xl lg:text-4xl font-bold mb-8 tracking-wide leading-10">
//               Africa's Silent Elder Care Crisis
//             </h3>
//             <div className="grid md:grid-cols-2 gap-12 text-left">
//               <div className="bg-white/20 p-10 rounded-2xl">
//                 <h4 className="text-xl font-bold mb-4 tracking-wide">
//                   🇳🇬 Nigerian Reality
//                 </h4>
//                 <p className="text-stone-200 text-[18px]">
//                   Less than 5% of seniors have access to professional care
//                   services, relying instead on overburdened family networks.
//                 </p>
//               </div>
//               <div className="bg-white/20 p-10 rounded-2xl">
//                 <h4 className="text-xl font-bold mb-4 tracking-wide">
//                   🌍 Diaspora Struggle
//                 </h4>
//                 <p className="text-stone-200 text-[18px]">
//                   73% of overseas Nigerians report constant anxiety about aging
//                   parents' care back home.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Solution Section */}
//       <section className="container mx-auto px-6 lg:px-20 py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="order-last lg:order-first">
//             <Image
//               src={eldercare}
//               alt="Caregiver assisting senior"
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>
//           <div className="space-y-8">
//             <div className="inline-block bg-purple-100 text-purple-900 px-6 py-2 rounded-full text-2xl font-bold">
//               Our Innovation
//             </div>
//             <h2 className="text-4xl font-bold text-stone-900">
//               Holistic Care Ecosystem
//             </h2>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-purple-100 p-3 rounded-lg shrink-0">
//                   <span className="text-2xl">🤝</span>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2">
//                     Vetted Care Network
//                   </h4>
//                   <p className="text-stone-600">
//                     Rigorously screened caregivers trained in both physical care
//                     and emotional support
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="bg-purple-100 p-3 rounded-lg shrink-0">
//                   <span className="text-2xl">📱</span>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2">Digital Family Hub</h4>
//                   <p className="text-stone-600">
//                     Real-time updates and virtual care coordination for families
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="bg-purple-100 p-3 rounded-lg shrink-0">
//                   <span className="text-2xl">❤️</span>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2">Community Building</h4>
//                   <p className="text-stone-600">
//                     Senior social clubs and intergenerational mentorship
//                     programs
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="bg-stone-100 py-20">
//         <div className="container mx-auto px-6 lg:px-20">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <div className="inline-block bg-purple-100 text-purple-900 px-6 py-2 rounded-full text-2xl font-bold tracking-wide mb-8">
//               Our Impact
//             </div>
//             <h3 className="text-3xl lg:text-4xl font-bold mb-8">
//               Building an Age-Friendly Future
//             </h3>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="text-5xl font-bold text-purple-900 mb-4">
//                 500+
//               </div>
//               <div className="text-stone-600/70 text-[17px] font-medium tracking-wide">
//                 Seniors Empowered
//               </div>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="text-5xl font-bold text-purple-900 mb-4">92%</div>
//               <div className="text-stone-600/70 text-[17px] font-medium tracking-wide">
//                 Family Anxiety Reduction
//               </div>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="text-5xl font-bold text-purple-900 mb-4">
//                 1,5k+
//               </div>
//               <div className="text-stone-600/70 text-[17px] font-medium tracking-wide">
//                 Care Hours Delivered
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src={nigeria_healthcare_crisis}
//             alt="Community support"
//             layout="fill"
//             objectFit="cover"
//           />
//           <div className="absolute inset-0 bg-purple-900/80" />
//         </div>

//         <div className="relative container mx-auto px-6 lg:px-20 text-center">
//           <div className="max-w-2xl mx-auto">
//             <h3 className="text-4xl font-bold text-white mb-8">
//               Join Our Care Revolution
//             </h3>
//             <p className="text-xl text-stone-200 mb-12">
//               Whether you're a family member, caregiver, or supporter, help us
//               redefine aging in Africa.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all">
//                 Find Caregivers
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
//                 Become a Partner
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default About_Us;
