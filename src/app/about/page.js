import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">About Our Web App</h2>
          <p className="text-lg mb-8">
            Welcome to Overwatch Companion, your ultimate guide to the dynamic
            world of Overwatch 2! Whether you&#39;re a seasoned hero or just
            stepping onto the battlefield for the first time, our app is here to
            equip you with everything you need to know about each character,
            their lore, abilities, and intricacies.
          </p>

          <p className="text-lg mb-8">
            Dive deep into the rich backstory of your favorite heroes,
            uncovering their origins, motivations, and the pivotal moments that
            shaped their journey. Explore detailed breakdowns of their
            abilities, tactics, and playstyles, empowering you to master every
            aspect of their gameplay.
          </p>

          <p className="text-lg mb-8">
            But Overwatch Companion isn&#39;t just about information – it&#39;s
            about community. Connect with fellow players in our vibrant
            community section, where you can discuss strategies, share tips and
            tricks, and engage in lively conversations about all things
            Overwatch. Forge new friendships, form teams, and embark on epic
            adventures together.
          </p>

          <p className="text-lg mb-8">
            And that&#39;s not all! With our integrated BattleNet search
            feature, you can effortlessly look up any player&#39;s competitive
            stats, track their progress, and gain valuable insights into their
            strengths and playstyle. Whether you&#39;re scouting potential
            teammates or analyzing your opponents, Overwatch Companion has you
            covered.
          </p>

          <p className="text-lg mb-8">
            Join us on this thrilling journey through the Overwatch universe.
            Whether you&#39;re seeking knowledge, camaraderie, or the thrill of
            competition, Overwatch Companion is your indispensable companion
            every step of the way. Download now and unleash your inner hero!
          </p>

          <div className="flex justify-center">
            <Image
              src="/Overwatchtwo.svg"
              alt="Hero Image"
              width={450}
              height={300}
            />
            <img
              className="rounded-lg m-8"
              src="https://pbs.twimg.com/media/FAK7haGUUAEasIS.png"
              alt="Player Stats"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
