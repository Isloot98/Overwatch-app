"use client";

import Link from "next/link";
import styles from "./search.module.css";
import SubmitButton from "@/components/submitButton";
import { useState } from "react";
import { searchApi } from "@/utilities/request";

const SearchPlayers = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = e.target.query.value;
    setSearchInput(inputValue);
    setLoading(true);
    setError(null);

    try {
      const result = await searchApi(inputValue);
      setSearchResult(result);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={`${styles.form} text-black `}>
        <label className={styles.label} htmlFor="query">
          Search for a player
        </label>
        <input className={styles.input} id="query" name="query" type="text" />
        <SubmitButton />
      </form>
      <div className={styles.searchResults}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          searchResult &&
          Array.isArray(searchResult) &&
          searchResult.map((player) => (
            <div className={styles.searchResult} key={player.player_id}>
              <Link href={`/players/${player.player_id}`}>
                <img src={player.avatar} alt={player.name} />
                {player.name} <img src={player.namecard} alt={player.name} />
                <p>{player.title}</p>
              </Link>
            </div>
          ))}
        {!loading && searchResult && !Array.isArray(searchResult) && (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default SearchPlayers;
