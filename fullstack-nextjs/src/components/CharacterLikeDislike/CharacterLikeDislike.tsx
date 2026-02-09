"use client";

import { useCallback } from "react";
import { useCharacterPreferences } from "@/context/CharacterPreferencesContext";
import { useUser } from "@/context/UserContext";
import { logger } from "@/lib/logger";
import styles from "./CharacterLikeDislike.module.css";

type CharacterLikeDislikeProps = {
  characterSlug: string;
};

export function CharacterLikeDislike({ characterSlug }: CharacterLikeDislikeProps) {
  const { user } = useUser();
  const { getPreference, setPreference } = useCharacterPreferences();
  const isHearted = getPreference(characterSlug) === "like";

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      logger.log("click no like", characterSlug);
      setPreference(characterSlug, isHearted ? null : "like");
    },
    [characterSlug, isHearted, setPreference]
  );

  if (!user) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.heartButton} ${isHearted ? styles.heartActive : ""}`}
      title={isHearted ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.heartIcon}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}
