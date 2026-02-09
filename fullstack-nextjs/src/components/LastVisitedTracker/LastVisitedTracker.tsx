"use client";

import { useEffect } from "react";
import { setLastCharacterId } from "@/lib/storage/lastCharacter";
import { logger } from "@/lib/logger";

type LastVisitedTrackerProps = {
  characterId: string;
};

export function LastVisitedTracker({ characterId }: LastVisitedTrackerProps) {
  useEffect(() => {
    logger.log("ultimo visitado", characterId);
    setLastCharacterId(characterId);
  }, [characterId]);

  return null;
}
