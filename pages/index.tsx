import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Introduction from "../components/organisms/Introduction";
import Navigation from "../components/organisms/Navigation";
import Education from "../components/organisms/Education";
import Experience from "../components/organisms/Experience";
import Projects from "../components/organisms/Projects";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Introduction />
      <Experience />
      <Education />
      {/*<Projects /> */}
    </div>
  );
}
Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_: any) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/Manaragabriel`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
