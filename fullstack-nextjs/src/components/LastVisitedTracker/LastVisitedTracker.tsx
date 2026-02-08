"use client";

import { useEffect } from "react";
import { setLastCharacterId } from "@/lib/storage/lastCharacter";

type LastVisitedTrackerProps = {
  characterId: string;
};

export function LastVisitedTracker({ characterId }: LastVisitedTrackerProps) {
  useEffect(() => {
    console.log("ultimo visitado", characterId);
    setLastCharacterId(characterId);
  }, [characterId]);

  return null;
}
