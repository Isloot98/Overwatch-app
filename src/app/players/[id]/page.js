"use client";
import { playerDetailsApi } from "@/utilities/request";
import { useEffect, useState } from "react";
import styles from "./playerdetails.module.css";

const PlayerDetails = () => {
  const [playerDetails, setPlayerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const pathname = window.location.pathname;
        const playerId = pathname.split("/").pop();

        const result = await playerDetailsApi(playerId);
        console.log("API Result:", result); // Log the entire API response
        if (result && result.summary && result.stats) {
          setPlayerDetails(result.summary);
          setStats(result.stats); // Set the stats separately
        } else {
          setError("Player details not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching player details:", error);
        setError("Error fetching player details");
        setLoading(false);
      }
    };

    fetchPlayerDetails();
  }, []);

  console.log(playerDetails);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      {playerDetails && (
        <div className={styles.playerDetails}>
          {/* Display player summary */}
          <img src={playerDetails.avatar} alt={playerDetails.username} />
          <h2>{playerDetails.username}</h2>
          <img src={playerDetails.namecard} alt={playerDetails.username} />
          <p>{playerDetails.title}</p>

          {/* Endorsement */}
          <div className={styles.endorsement}>
            <h3>Endorsement</h3>
            <p>Level: {playerDetails.endorsement.level}</p>
            <img
              src={playerDetails.endorsement.frame}
              alt="Endorsement Frame"
              className={styles.endorsement}
            />
          </div>

          {/* Competitive */}
          <div className={styles.competitive}>
            <h3>Competitive</h3>
            {playerDetails.competitive && playerDetails.competitive.console && (
              <div>
                {/* Tank */}
                {playerDetails.competitive.console.tank && (
                  <div>
                    <p>
                      Tank Division:{" "}
                      {playerDetails.competitive.console.tank.division}
                    </p>
                    <p>
                      Tank Tier: {playerDetails.competitive.console.tank.tier}
                    </p>
                    <img
                      src={playerDetails.competitive.console.tank.role_icon}
                      alt="Tank Role Icon"
                      className={styles.tankRole}
                    />
                    <img
                      src={playerDetails.competitive.console.tank.rank_icon}
                      alt="Tank Rank Icon"
                      className={styles.tankRank}
                    />
                    <img
                      src={playerDetails.competitive.console.tank.tier_icon}
                      alt="Tank Tier Icon"
                      className={styles.tankTier}
                    />
                  </div>
                )}
                {/* Damage */}
                {playerDetails.competitive.console.damage && (
                  <div>
                    <p>
                      Damage Division:{" "}
                      {playerDetails.competitive.console.damage.division}
                    </p>
                    <p>
                      Damage Tier:{" "}
                      {playerDetails.competitive.console.damage.tier}
                    </p>
                    <img
                      src={playerDetails.competitive.console.damage.role_icon}
                      alt="Damage Role Icon"
                      className={styles.damageRole}
                    />
                    {/* Add additional fields for Damage role */}
                  </div>
                )}
                {/* Support */}
                {playerDetails.competitive.console.support && (
                  <div>
                    <p>
                      Support Division:{" "}
                      {playerDetails.competitive.console.support.division}
                    </p>
                    <p>
                      Support Tier:{" "}
                      {playerDetails.competitive.console.support.tier}
                    </p>
                    <img
                      src={playerDetails.competitive.console.support.role_icon}
                      alt="Support Role Icon"
                      className={styles.supportRole}
                    />
                    {/* Add additional fields for Support role */}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <h3>Stats</h3>
            {stats && (
              <div>
                {stats.pc || stats.console ? (
                  <div>
                    {/* Competitive stats */}
                    {stats.console && stats.console.competitive && (
                      <div>
                        <h4>Competitive</h4>
                        <ul>
                          {stats.console.competitive.heroes_comparisons.time_played.values.map(
                            (hero) => (
                              <li key={hero.hero}>
                                {hero.hero}: {hero.value} minutes
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {/* Damage stats */}
                    {stats.console && stats.console.damage && (
                      <div>
                        <h4>Damage</h4>
                        <ul>
                          {stats.console.damage.heroes_comparisons.time_played.values.map(
                            (hero) => (
                              <li key={hero.hero}>
                                {hero.hero}: {hero.value} minutes
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {/* Support stats */}
                    {stats.console && stats.console.support && (
                      <div>
                        <h4>Support</h4>
                        <ul>
                          {stats.console.support.heroes_comparisons.time_played.values.map(
                            (hero) => (
                              <li key={hero.hero}>
                                {hero.hero}: {hero.value} minutes
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p>No stats available</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerDetails;
