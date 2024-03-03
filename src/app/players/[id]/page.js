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
        console.log("API Result:", result);
        if (result && result.summary && result.stats) {
          setPlayerDetails(result.summary);
          setStats(result.stats);
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
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      {playerDetails && (
        <div className={styles.playerDetails}>
          <div className={styles.playerCard}>
            <img
              src={playerDetails.avatar}
              alt={playerDetails.username}
              className={styles.avatar}
            />
            <p className={styles.playerName}>{playerDetails.username}</p>
            <img
              src={playerDetails.namecard}
              alt={playerDetails.username}
              className={styles.namecard}
            />
            <p className={styles.playerTitle}>{playerDetails.title}</p>
          </div>
          <div className={styles.endorsement}>
            <h2>Endorsement Level:</h2>

            <img
              src={playerDetails.endorsement.frame}
              alt="Endorsement Frame"
              className={styles.endorsement}
            />
          </div>
          <div className={styles.competitive}>
            {playerDetails.competitive && playerDetails.competitive.console && (
              <div>
                {playerDetails.competitive.console.tank && (
                  <div>
                    <div className={styles.roleDiv}>
                      <h2>Role: Tank</h2>
                      <img
                        src={playerDetails.competitive.console.tank.role_icon}
                        alt="Tank Role Icon"
                        className={styles.Role}
                      />
                    </div>
                    <div className={styles.rankDiv}>
                      <h2>
                        Tank Division:
                        {playerDetails.competitive.console.tank.division}
                      </h2>
                      <img
                        src={playerDetails.competitive.console.tank.rank_icon}
                        alt="Tank Rank Icon"
                        className={styles.Rank}
                      />
                    </div>

                    <div className={styles.tierDiv}>
                      <h2>Tank Tier:</h2>
                      <img
                        src={playerDetails.competitive.console.tank.tier_icon}
                        alt="Tank Tier Icon"
                        className={styles.Tier}
                      />
                    </div>
                  </div>
                )}
                {playerDetails.competitive.console.damage && (
                  <div>
                    <div className={styles.roleDiv}>
                      <h2>Role: DPS</h2>
                      <img
                        src={playerDetails.competitive.console.damage.role_icon}
                        alt="damage Role Icon"
                        className={styles.Role}
                      />
                    </div>
                    <div className={styles.rankDiv}>
                      <h2>
                        DPS Division:
                        {playerDetails.competitive.console.damage.division}
                      </h2>
                      <img
                        src={playerDetails.competitive.console.damage.rank_icon}
                        alt="damage Rank Icon"
                        className={styles.Rank}
                      />
                    </div>

                    <div className={styles.tierDiv}>
                      <h2>DPS Tier:</h2>
                      <img
                        src={playerDetails.competitive.console.damage.tier_icon}
                        alt="damage Tier Icon"
                        className={styles.Tier}
                      />
                    </div>
                  </div>
                )}
                {playerDetails.competitive.console.support && (
                  <div>
                    <div className={styles.roleDiv}>
                      <h2>Role: Support</h2>
                      <img
                        src={
                          playerDetails.competitive.console.support.role_icon
                        }
                        alt="support Role Icon"
                        className={styles.Role}
                      />
                    </div>
                    <div className={styles.rankDiv}>
                      <h2>
                        Support Division:
                        {playerDetails.competitive.console.support.division}
                      </h2>
                      <img
                        src={
                          playerDetails.competitive.console.support.rank_icon
                        }
                        alt="support Rank Icon"
                        className={styles.Rank}
                      />
                    </div>

                    <div className={styles.tierDiv}>
                      <h2>Support Tier:</h2>
                      <img
                        src={
                          playerDetails.competitive.console.support.tier_icon
                        }
                        alt="support Tier Icon"
                        className={styles.Tier}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.stats}>
            <h3>Stats</h3>
            {stats && (
              <div>
                {stats.pc || stats.console ? (
                  <div>
                    <div className={styles.stats2}>
                      {stats?.console?.competitive && (
                        <div className={styles.competitiveStats}>
                          <h3>Competitive Stats</h3>
                          <h2>Time Played</h2>

                          <div className={styles.timePlayed}>
                            <ul className={styles.gridContainer}>
                              {stats.console.competitive.heroes_comparisons.time_played.values.map(
                                (hero) => (
                                  <div
                                    key={hero.hero}
                                    className={styles.gridItem}
                                  >
                                    <h3>{hero.hero}</h3> {hero.value} minutes
                                  </div>
                                )
                              )}
                            </ul>
                          </div>

                          <div className={styles.gamesWon}>
                            <h2>Games Won</h2>

                            <ul>
                              {stats.console.competitive.heroes_comparisons.games_won.values.map(
                                (hero) => (
                                  <div
                                    key={hero.hero}
                                    className={styles.gridItem}
                                  >
                                    <h3>{hero.hero}</h3> {hero.value}
                                  </div>
                                )
                              )}
                            </ul>
                          </div>

                          {stats?.console?.competitive?.career_stats && (
                            <div className={styles.career}>
                              <div classname={styles.best}>
                                {stats.console.competitive.career_stats[
                                  "best"
                                ] && (
                                  <div>
                                    <h4>Best</h4>
                                    <ul>
                                      {Object.entries(
                                        stats.console.competitive.career_stats[
                                          "best"
                                        ]
                                      ).map(([key, value]) => (
                                        <div
                                          key={key}
                                          className={styles.gridItem}
                                        >
                                          {value.label}: {value.value}
                                        </div>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className={styles.best}>
                                {stats.console.competitive.career_stats[
                                  "average"
                                ] && (
                                  <div>
                                    <h4>Average</h4>
                                    <ul>
                                      {Object.entries(
                                        stats.console.competitive.career_stats[
                                          "average"
                                        ]
                                      ).map(([key, value]) => (
                                        <div
                                          key={key}
                                          className={styles.gridItem}
                                        >
                                          {value.label}: {value.value}
                                        </div>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className={styles.best}>
                                {stats.console.competitive.career_stats[
                                  "game"
                                ] && (
                                  <div>
                                    <h2>Game</h2>
                                    <ul>
                                      {Object.entries(
                                        stats.console.competitive.career_stats[
                                          "game"
                                        ]
                                      ).map(([key, value]) => (
                                        <div
                                          key={key}
                                          className={styles.gridItem}
                                        >
                                          {value.label}: {value.value}
                                        </div>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className={styles.best}>
                                {stats.console.competitive.career_stats[
                                  "all-heroes"
                                ] && (
                                  <div>
                                    <h2>Career Stats for All Heroes</h2>
                                    {stats.console.competitive.career_stats[
                                      "all-heroes"
                                    ].map((heroStats, index) => (
                                      <div key={index}>
                                        <h5>{heroStats.label}</h5>
                                        <ul>
                                          {heroStats.stats.map((stat) => (
                                            <div
                                              key={stat.key}
                                              className={styles.gridItem}
                                            >
                                              {stat.label}: {stat.value}
                                            </div>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
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
