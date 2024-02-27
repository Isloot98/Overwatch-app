import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">About Our Web App</h2>
          <p className="text-lg mb-8">
            Our web app is dedicated to providing information on heroes and
            displaying player stats for your favorite games. Whether you&aposre
            into Overwatch, League of Legends, or any other popular game, our
            platform has you covered.
          </p>
          <p className="text-lg mb-8">
            We offer comprehensive details on heroes, including their abilities,
            lore, and much more. Additionally, you can track your own
            performance and compare stats with other players in the community.
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
