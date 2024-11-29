import Image from "next/image";
function WhyPeopleLove() {
  return (
    <div className="flex flex-col justify-center py-4 bg-slate-500">
      <h1 className="text-5xl font-bold text-slate-100 capitalize text-center py-6">
        Why People Love AgeBuddy
      </h1>
      <div className=" p-3 grid grid-cols-3 gap-12 items-center justify-around *:rounded-3xl *:bg-transparent *:border-4">
        <div className="flex flex-col  p-4 text-center justify-center">
          <Image
            src="/Startup Website/4901932.jpg"
            alt={"global"}
            width={400}
            height={400}
            className="p-1"
          />
          <h2 className="font-bold text-3xl text-slate-100 py-3">
            Simplified Senior Care
          </h2>
          <div className="text-slate-100 text-left">
            <p className="text-md font-semibold">
              <span className="font-bold text-xl">
                {" "}
                User-Friendly Platform:{" "}
              </span>
              Tailored for seniors, with easy navigation and intuitive features
              that keep them connected and engaged.
            </p>
            <p className="text-md font-semibold">
              <span className="font-semibold text-xl">
                Health and Wellness Hub:{" "}
              </span>
              Personalized health guidance and community-driven support to
              empower seniors in their daily lives.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-4 text-center  justify-center">
          <Image
            src="/Startup Website/icons8-peace-of-mind-64.png"
            alt={"global"}
            width={400}
            height={400}
            className="p-2"
          />
          <h2 className="font-bold text-3xl text-slate-100 py-3">
            Peace of Mind for Families
          </h2>
          <div className="text-slate-100 text-left">
            <p className="text-md font-semibold">
              <span className="font-semibold text-xl">
                Reliable Caregivers:{" "}
              </span>
              Easily access a trusted network of caregivers for mobility
              assistance, companionship, and more.
            </p>
            <p className="text-md font-semibold">
              <span className="font-semibold text-xl">
                Global Connectivity:{" "}
              </span>
              Family members can remotely ensure their loved ones receive
              quality care, no matter where they are.
            </p>
          </div>
        </div>
        <div className="flex flex-col  p-4 text-center  justify-center">
          <Image
            src="/Startup Website/icons8-peace-of-mind-64.png"
            alt={"global"}
            width={400}
            height={400}
            className="p-2"
          />
          <h2 className="font-bold text-3xl text-slate-100 py-3">
            Holistic Aging Solutions
          </h2>
          <div className="text-slate-100 text-left">
            <p className="text-md font-semibold">
              <span className="font-semibold text-xl">Digital Companion: </span>
              A platform designed for seniors that enhances social interaction,
              wellness, and security.
            </p>
            <p className="text-md font-semibold">
              <span className="font-semibold text-xl">
                All-in-One Care Kit::{" "}
              </span>
              A carefully curated package of items to promote safety,
              independence, and comfort at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPeopleLove;
