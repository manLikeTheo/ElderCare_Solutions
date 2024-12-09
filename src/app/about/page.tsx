import Image from "next/image";
import african_elderly from "../../../public/images/african_elderly.png";
import Senior_Citizen from "../../../public/images/Senior_Citizen.png";
import blob_scene_haikei from "../../../public/Startup Website/blob_scene_haikei.png";
import eldercare from "../../../public/Startup Website/eldercare.jpg";
function About_Us() {
  return (
    <div className="">
      {/* <Header /> */}

      <div className=" bg-stone-100 px-10 py-14 mx-auto flex flex-col">
        <div className="changing-the-narrative  grid grid-cols-1 md:grid-cols-2   items-center gap-12 p-3 border-b-4 border-stone-300">
          <div className="text">
            <h1 className="text-4xl py-4 font-extrabold">
              Changing the Narrative
            </h1>
            <p className=" text-xl font-medium">
              <span className="font-bold">AgeBuddy</span> is a mission-driven
              social enterprise dedicated to transforming the way we care for
              seniors. Our platform connects families—both within Nigeria and
              across the globe—with local, compassionate caregivers, offering
              comprehensive, accessible, and affordable solutions to elder care.
              We are addressing the overlooked gaps in senior care, where
              clinical needs often take precedence over connection,
              independence, and emotional wellbeing. We believe every senior
              deserves a life of dignity, safety, and social fulfillment,
              regardless of where their family resides. Through innovative
              technology and our Elderly Care Kit, AgeBuddy is reshaping the
              elder care landscape in Nigeria and Africa.
              <span className="font-bold py-6">
                <br />
                <br />- Because growing older should feel like a triumph—not a
                challenge.
              </span>
            </p>
          </div>
          <div className="image ">
            <Image
              className="rounded-[5%]"
              src={african_elderly}
              alt="hero"
              width={600}
              height={640}
            />
          </div>
        </div>

        <div className="your-story mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center gap-12 *:py-3 border-b-4 py-4">
          <div className="">
            <h1 className="text-4xl font-extrabold py-3">We've been there!</h1>
            <p className="tracking-wider text-xl font-medium">
              {" "}
              <b>AgeBuddy</b> was created after recognizing the deep flaws in
              the current senior care system. As many families—especially
              non-resident Nigerians—struggle with providing adequate care for
              aging parents back home, we saw the lack of accessible,
              high-quality care options. Traditional elder care often focuses
              heavily on medical needs, neglecting the equally important
              emotional, social, and practical aspects of aging. Our journey
              began when we, too, were navigating this broken system, realizing
              just how difficult it is to provide quality care when you're far
              away and when systems fail to deliver beyond medical treatment.
            </p>
          </div>
          <div className="image py-0 w-fit h-fit text-center object-cover bg-transparent p-2 ml-5">
            <Image
              className="rounded-3xl"
              src={Senior_Citizen}
              alt="hero"
              width={600}
              height={640}
            />
          </div>
        </div>

        <div className="broken-system mt-8 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6">
          <div className="text">
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              The Broken System
            </h1>
            <p className="text-xl lg:text-xl">
              {" "}
              In Nigeria and many African countries, senior care is still
              largely traditional and fragmented. Families face enormous
              challenges when trying to care for elderly loved ones, often
              relying on informal care from relatives, which isn’t always
              sustainable. The scarcity of affordable professional care and
              limited resources for seniors add to the crisis. Meanwhile,
              non-resident Nigerians, spread across the world, often find
              themselves disconnected from the daily lives of their aging
              parents. The lack of seamless communication, trustworthy
              caregivers, and dependable solutions leaves families struggling
              with guilt and worry. At AgeBuddy, we aim to change all of this—
              bycreating a solution that connects families directly to trusted
              local care and support workers and offering a range of tools to
              ensure independence, safety, and emotional well-being for seniors,
              no matter where their family members are.
            </p>
          </div>
          <div className="image  ">
            <Image
              className="rounded-3xl w-full h-auto"
              src={eldercare}
              alt="hero"
              width={600}
              height={640}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center place-items-center py-6">
          <div className="text grid grid-cols-1 lg:grid-cols-2 items-baseline justify-center gap-1">
            <h1 className="text-4xl font-extrabold py-4">
              Flipping the Script: AgeBuddy's Approach
            </h1>
            <p className=" text-xl">
              Rather than accepting the status quo, AgeBuddy has flipped the
              traditional senior care model. We leverage technology to create a
              platform that not only connects families with compassionate,
              vetted caregivers but also provides seniors with the tools they
              need for self-sufficiency, safety, and social interaction. We
              believe senior care is about more than just meeting medical
              needs—it’s about empowering seniors to continue living with
              purpose, connected to their families, and engaged in their
              communities. AgeBuddy’s approach removes unnecessary middlemen,
              providing affordable care, empowered caregivers, and innovative
              solutions like our Elderly Care Kit to help seniors maintain their
              autonomy.
            </p>
          </div>
          <div className="image py-0 rounded-2xl w-[480px] h-[480px] bg-violet-800 text-center object-cover text-4xl items-center">
            Image
          </div>
        </div>

        <div className="agebuddy-difference mt-10 py-6 *:pb-8">
          <div>
            <h1 className="text-3x sm:text-4xl font-extrabold py-4">
              The AgeBudy Difference
            </h1>
            <p className=" text-xl sm:text-2xl lg:text-xl leading-relaxed max-w-3xl">
              <b>For Families:</b> AgeBuddy offers families an easy way to find
              trustworthy local caregivers, ensuring that seniors are receiving
              the best care—both physically and emotionally—while still staying
              connected with their loved ones through our digital communication
              tools.
            </p>
            <p className="sm:text-2xl lg:text-xl leading-relaxed max-w-3xl text-xl">
              <b>For Seniors:</b> We provide seniors with not only the care they
              need, but the tools and community to thrive, whether it’s through
              independent living solutions or social engagement.
            </p>
            <p className="sm:text-2xl lg:text-xl leading-relaxed max-w-3xl text-xl">
              <b>For Communities:</b> By focusing on holistic care, AgeBuddy is
              investing in a future where seniors are valued and supported in
              all aspects of their lives, helping break down the barriers of
              isolation and neglect - that impacts their health and wellbeing
              negatively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Us;
