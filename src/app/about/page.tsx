import Image from "next/image";
import african_elderly from "../../../public/images/african_elderly.png";
import Senior_Citizen from "../../../public/images/Senior_Citizen.png";
import eldercare from "../../../public/Startup Website/eldercare.jpg";
import nigeria_healthcare_crisis from "../../../public/Startup Website/nigeria_healthcare_crisis.png";
function About_Us() {
  return (
    <div className="">
      {/* <Header /> */}

      <div className=" bg-stone-100 px-10 py-14 mx-auto flex flex-col">
        <div className="changing-the-narrative  grid grid-cols-1 md:grid-cols-2   items-center gap-12 p-3 border-b-4 border-stone-300">
          <div className="text">
            <h2 className="text-4xl py-4 font-extrabold">
              Changing the Narrative
            </h2>
            <p className=" text-xl font-medium">
              <span className="font-bold">AgeBuddy</span> is a senior-focused
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
            <h2 className="text-4xl font-extrabold py-3">We've been there!</h2>
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

        <div className="broken-system mt-8 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6 border-b-4">
          <div className="text">
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              The Broken System
            </h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center place-items-center py-6 mt-6  border-b-4">
          <div className="text grid grid-cols-1 lg:grid-cols-2 items-baseline justify-center gap-1">
            <h2 className="text-4xl font-extrabold py-4">
              Flipping the Script: AgeBuddy's Approach
            </h2>
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
          <Image
            className="rounded-3xl  w-fit h-auto"
            src={nigeria_healthcare_crisis}
            alt="nigeria healthcare crisis"
            width={640}
            height={640}
          />
        </div>

        <div className="agebuddy-difference mt-10 py-6 *:pb-8 border-b-4 ">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold py-4">
              The AgeBudy Difference
            </h2>
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

        <div className="future-of-senior-care mt-10 py-6 border-b-4">
          <h2 className="heading text-3xl lg:text-4xl font-extrabold py-2 mt-3">
            The Future of Senior Care
          </h2>
          <p className=" text-xl sm:text-2xl lg:text-xl leading-relaxed max-w-3xl">
            At AgeBuddy, we are more than just a platform—we are a promise. A
            promise to seniors that they are valued and respected, to families
            that they are supported and not alone, and to caregivers that their
            dedication to improving lives is cherished and nurtured. By 2030,{" "}
            <b>AgeBuddy</b> aims to make a significant impact across Nigeria and
            Africa by{" "}
            <b>
              connecting 1 million seniors with dignified, affordable care and
              empowering the next generation of compassionate caregivers.
            </b>{" "}
            Our goal is not just to provide care,{" "}
            <b>but to transform the landscape of elder care</b> by creating a
            future where seniors live with purpose, are supported each step of
            the aging journey, and maintain their independence and dignity. We
            envision a world where elder care is no longer just about medical
            treatment, but about fostering holistic wellbeing—mentally,
            emotionally, and socially. We are redefining what it means to care
            for our elders, putting compassion, community, and sustainability at
            the heart of everything we do.
          </p>
        </div>

        <div className="join-the-movement mt-6 py-2 border-b-4">
          <div className="text">
            <h2 className="heading text-3xl lg:text-4xl font-extrabold py-2 mt-3">
              Join the AgeBuddy Movement
            </h2>
            <p className=" text-xl sm:text-2xl lg:text-xl leading-relaxed max-w-3xl">
              AgeBuddy is a growing movement, and we can’t do it alone. Whether
              you're a family navigating the challenges of senior care, a
              passionate caregiver, or someone who believes in the dignity of
              aging, there is a place for you in the AgeBuddy community. By
              choosing AgeBuddy, you are not just opting for a service. You are
              taking a stand for a future where every elder receives the care
              they deserve, where families can support their loved ones from
              anywhere in the world, and where caregivers are valued as partners
              in improving the lives of seniors.
            </p>
          </div>
          {/* <Image /> */}
        </div>

        <div className="support-our-misson mt-6 py-2">
          <h2 className="heading text-3xl lg:text-4xl font-extrabold py-2 mt-3">
            {" "}
            Support Our Mission
          </h2>
          <p className=" text-xl sm:text-2xl lg:text-xl leading-relaxed max-w-3xl">
            Our work would not be possible without the support of individuals
            and organizations who share our vision. If you know of grants,
            partnerships, or individuals who are interested in helping us reach
            our goal of <b>1 million meaningful connections by 2030,</b> we
            would love to connect with you. Your generosity and support make
            AgeBuddy’s mission possible and help us build a brighter future for
            seniors in Nigeria, Africa, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_Us;
