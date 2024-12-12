import Benefits from "./_components/Benefits";
import Hero from "./_components/Hero";
// import Programs from "./_components/programs";
import Programs from "./_components/Programs";
import WhyPeopleLove from "./_components/WhyPeopleLove";
import GetStarted from "./_components/GetStarted";
import JoinOurTeam from "./_components/joinTheTeam";
import LandingPage_Hero from "./_components/LandingPage_Hero";
export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-stone-50">
      {/* <Hero /> */}
      <LandingPage_Hero />
      <Programs />
      <Benefits />
      <WhyPeopleLove />
      <GetStarted />
      <JoinOurTeam />
    </div>
  );
}
