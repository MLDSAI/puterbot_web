import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PuterBot: AI-First Process Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PuterBot" />
        <p>
            An AI-First Process Automation system that learns how to perform repetitive tasks in GUI applications by observing human demonstrations.
        </p>
        <p>
            <a href="https://github.com/MLDSAI/puterbot">github.com/MLDSAI/puterbot</a>
        </p>
        <p className="description">
            Register for updates (we promise not to spam)
        </p>
        <FeedbackForm />

      </main>

      <img src="./puterbot-system.png" id="puterbot-system" />

      <Footer />
    </div>
  );
}
