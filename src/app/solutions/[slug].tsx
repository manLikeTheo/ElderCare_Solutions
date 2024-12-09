import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

interface Solution {
  title: string;
  description: string;
  features: string[];
  image: string;
  moreInfo: string;
}

interface SolutionPageProps {
  solution: Solution;
}

const SolutionPage = ({ solution }: SolutionPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{solution.title}</h1>
      <p>{solution.description}</p>
      <img src={solution.image} alt={solution.title} />
      <ul>
        {solution.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>{solution.moreInfo}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const solutions = [
    { slug: "age-buddy", title: "AgeBuddy Digital Companion" },
    { slug: "elderly-care-kits", title: "Elderly Care Kits" },
    { slug: "localized-support-services", title: "Localized Support Services" },
  ];

  const paths = solutions.map((solution) => ({
    params: { slug: solution.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>
) => {
  const solutionData: Record<string, Solution> = {
    "age-buddy": {
      title: "AgeBuddy Digital Companion",
      description: "AgeBuddy is your all-in-one solution for senior wellness.",
      features: ["Social Engagement", "Cultural Integration", "Holistic Care"],
      image: "/images/agebuddy.jpg",
      moreInfo: "https://agebuddy.com",
    },
    "elderly-care-kits": {
      title: "Elderly Care Kits",
      description: "Curated kits for essential safety and comfort.",
      features: ["Anti-slip socks", "Grab bars", "Health Essentials"],
      image: "/images/elderlycarekits.jpg",
      moreInfo: "https://elderlycarekits.com",
    },
    "localized-support-services": {
      title: "Localized Support Services",
      description: "Trusted helpers for errands and companionship.",
      features: ["Errands", "Technology Assistance", "Companionship"],
      image: "/images/localsupportservices.jpg",
      moreInfo: "https://localsupportservices.com",
    },
  };

  const slug = context.params?.slug as string;
  const solution = solutionData[slug];

  if (!solution) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      solution,
    },
  };
};

export default SolutionPage;
