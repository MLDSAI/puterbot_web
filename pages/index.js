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
        <Header title="PuterBot: AI-First Process Automation" />
        <hr />
        <p className="description">
            Register for access (we promise not to spam)
        </p>
        <FeedbackForm />
        <!--JokeBlock /-->
      </main>
      <Footer />
    </div>
  );
}
