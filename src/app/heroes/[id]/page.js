import HeroLinks from "../../../components/heroLinks";
import styles from "./heroes.module.css";

const Heroes = async ({ params }) => {
  const heroResponse = await fetch(
    `https://overfast-api.tekrop.fr/heroes/${params.id}?locale=en-us`
  );
  const heroData = await heroResponse.json();

  return (
    <div>
      <div className={styles.linksDiv}>
        <h2 className={`${styles.sectionTitle} ${styles.linksSectionTitle}`}>
          Select a Hero
        </h2>
        <HeroLinks />
      </div>
      {heroData && (
        <div className={styles.heroDiv}>
          <div className={styles.hero}>
            <h1 className={styles.heroName}>{heroData.name.toUpperCase()}</h1>
            <div className={styles.heroImageContainer}>
              <img
                className={styles.heroImage}
                src={heroData.portrait}
                alt={heroData.name}
              />
            </div>
            <div className={`${styles.heroDescription} w-1/3 mb-8`}>
              <p>{heroData.description}</p>
            </div>

            <div className={styles.heroRole}>
              <h2 className={styles.sectionTitle}>Role: {heroData.role}</h2>
            </div>
            <div className={styles.heroLocation}>
              <h2 className={styles.sectionTitle}>
                Location: {heroData.location}
              </h2>
            </div>
            <div className={styles.heroHitpoints}>
              <p>Health: {heroData.hitpoints.health}</p>
              <p>Armor: {heroData.hitpoints.armor}</p>
              <p>Shields: {heroData.hitpoints.shields}</p>
              <p>Total: {heroData.hitpoints.total}</p>
            </div>
          </div>
          <div className={styles.heroAbilitiesContainer}>
            <h2 className={styles.sectionTitle}>Abilities</h2>

            <div className={styles.heroAbilities}>
              {heroData.abilities.map((ability, index) => (
                <div key={index} className={styles.ability}>
                  <h3 className={styles.abilities}>{ability.name}</h3>
                  <img
                    className={styles.abilityIcon}
                    src={ability.icon}
                    alt={ability.name}
                  />
                  <p>Description: {ability.description}</p>
                  {ability.video && (
                    <div className={styles.videoContainer}>
                      <video className={styles.video} controls width="400">
                        <source src={ability.video.link.mp4} type="video/mp4" />
                        <source
                          src={ability.video.link.webm}
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroStory}>
            <h2 className={styles.sectionTitle}>Story</h2>
            <p>Summary: {heroData.story.summary}</p>
            <div className={styles.chapters}>
              <h1>Chapters</h1>
              {heroData.story.chapters.map((chapter, index) => (
                <div key={index} className={styles.chapter}>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.content}</p>
                  <img
                    className={styles.chapterImage}
                    src={chapter.picture}
                    alt={chapter.title}
                  />
                </div>
              ))}
            </div>
            <div className={styles.media}>
              <h3>Origin Story</h3>
              {heroData.story.media ? (
                <>
                  <p>Type: {heroData.story.media.type}</p>
                  <a
                    href={heroData.story.media.link}
                    className={styles.mediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Origin Story
                  </a>
                </>
              ) : (
                <p>No media available</p>
              )}
            </div>
          </div>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Heroes;

export async function generateMetadata({ params, searchParams }, parent) {
  const heroResponse = await fetch(
    `https://overfast-api.tekrop.fr/heroes/${params.id}?locale=en-us`
  );
  const heroData = await heroResponse.json();

  return {
    title: heroData.name,
  };
}
