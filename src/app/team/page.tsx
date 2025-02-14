import Image from "next/image";
import React from "react";

const TeamPage = () => {
  return (
    <section className="container mx-auto px-6 lg:px-20 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-stone-900 mb-4">
          The Compassion Architects
        </h2>
        <p className="text-xl text-stone-600/80 max-w-2xl mx-auto font-semibold">
          A multidisciplinary team blending healthcare expertise, tech
          innovation, and deep cultural understanding to redefine elder care
        </p>
      </div>

      {/* Core Team */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {/* Founder Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-shadow">
          <Image
            src="/team/founder.jpg"
            alt="Founder"
            width={400}
            height={500}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Theophilus ADEWALE</h3>
            <p className="text-purple-900 mb-2 font-medium">Founder & C E O</p>
            <p className="text-sm text-stone-600">
              Caregiver turned tech innovator blending 8+ years of healthcare
              experience with personal caregiving journey
            </p>
          </div>
        </div>

        {/* CTO Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-shadow">
          <Image
            src="/team/cto.jpg"
            alt="CTO"
            width={400}
            height={500}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Amina Balarabe</h3>
            <p className="text-purple-900 mb-2 font-medium">Tech Lead</p>
            <p className="text-sm text-stone-600">
              Full-stack developer specializing in senior-friendly UX,
              previously at HealthTech NG
            </p>
          </div>
        </div>

        {/* Care Expert */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-shadow">
          <Image
            src="/team/nurse.jpg"
            alt="Care Expert"
            width={400}
            height={500}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Dr. Chidi Nwankwo</h3>
            <p className="text-purple-900 mb-2 font-medium">Medical Director</p>
            <p className="text-sm text-stone-600">
              Geriatric specialist with 15 years clinical experience, Lagos
              Teaching Hospital
            </p>
          </div>
        </div>

        {/* Community Lead */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-shadow">
          <Image
            src="/team/community.jpg"
            alt="Community Lead"
            width={400}
            height={500}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Fatima Yusuf</h3>
            <p className="text-purple-900 mb-2 font-medium">
              Community Relations
            </p>
            <p className="text-sm text-stone-600">
              Social worker specializing in elder community programs, founder of
              AgeWell NG
            </p>
          </div>
        </div>
      </div>

      {/* Advisors */}
      <div className="bg-purple-100 rounded-2xl p-12">
        <h3 className="text-3xl font-bold text-center mb-8">
          Guided by Wisdom
        </h3>
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="text-center p-5 bg-purple-50 rounded-3xl">
            <div className="w-36 h-36 bg-purple-300 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold">Prof. Adebayo Oluwale</h4>
            <p className="text-[17px] text-stone-700/80">
              Public Health Policy Expert,
              <br />
              University of Ibadan
            </p>
          </div>
          <div className="text-center p-5 bg-purple-50 rounded-3xl">
            <div className="w-36 h-36 bg-purple-300 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold">Ngozi Eze</h4>
            <p className="text-[17px] text-stone-700/80">
              Diaspora Relations Specialist,
              <br />
              Nigerian Global Network
            </p>
          </div>
          <div className="text-center p-5 bg-purple-50 rounded-3xl">
            <div className="w-36 h-36 bg-purple-300 rounded-full mx-auto mb-4" />
            <h4 className="text-xl font-bold">Dr. Ibrahim Bello</h4>
            <p className="text-[17px] text-stone-700/80">
              Digital Inclusion Advocate,
              <br />
              Tech4Good Africa
            </p>
          </div>
        </div>
      </div>

      {/* Community Partners */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold mb-8">Our Care Network</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Image
            src="/partners/health-ng.png"
            width={180}
            height={80}
            alt="Health NG"
          />
          <Image
            src="/partners/agewell.png"
            width={180}
            height={80}
            alt="AgeWell"
          />
          <Image
            src="/partners/tech4good.png"
            width={180}
            height={80}
            alt="Tech4Good"
          />
          <Image
            src="/partners/diaspora-care.png"
            width={180}
            height={80}
            alt="Diaspora Care"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
