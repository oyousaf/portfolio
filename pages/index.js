import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Omar Yousaf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Enthusiastic Frontend Developer" />
        <meta
          name="keywords"
          content="OMAR YOUSAF, OYOUSAF, CV, PORTFOLIO, RESUME, React, NextJS, Tailwind, MERN, Node, HTML, CSS, JavaScript, Frontend, Backend, oyousaf87, oyousaf_"
        />
        <meta
          name="author"
          content="OMAR YOUSAF, OYOUSAF, oyousaf87, oyousaf_"
        />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
