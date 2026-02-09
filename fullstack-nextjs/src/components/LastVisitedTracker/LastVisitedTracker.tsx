"use client";

import { useEffect } from "react";
import { setLastCharacterSlug } from "@/lib/storage/lastCharacter";
import { logger } from "@/lib/logger";

type LastVisitedTrackerProps = {
  characterSlug: string;
};

export function LastVisitedTracker({ characterSlug }: LastVisitedTrackerProps) {
  useEffect(() => {
    logger.log("ultimo visitado", characterSlug);
    setLastCharacterSlug(characterSlug);
  }, [characterSlug]);

  return null;
}
