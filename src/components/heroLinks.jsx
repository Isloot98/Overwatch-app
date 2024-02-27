import Link from "next/link";
import styles from "./heroLinks.module.css";

const HeroLinks = async () => {
  const heroResponse = await fetch(
    `https://overfast-api.tekrop.fr/heroes/?locale=en-us`
  );
  const heroData = await heroResponse.json();

  const replaceSpecialCharacters = (name) => {
    return name
      .toLowerCase()
      .replace(/ú/g, "u")
      .replace(/ö/g, "o")
      .replace(/[\s:]+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "");
  };

  return (
    <div className={styles.navDiv}>
      <nav className={styles.gridContainer}>
        {heroData.map((hero, index) => (
          <Link
            key={hero.name.toLowerCase()}
            href={`/heroes/${replaceSpecialCharacters(hero.name)}`}
            className={styles.gridItem}
          >
            <img
              className={styles.linkImage}
              src={hero.portrait}
              alt={hero.name}
            />
            {hero.name.charAt(0).toUpperCase() + hero.name.slice(1)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeroLinks;
