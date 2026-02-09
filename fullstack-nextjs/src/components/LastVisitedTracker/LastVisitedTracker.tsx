"use client";

import { useEffect } from "react";
import { setLastCharacterSlug } from "@/lib/storage/lastCharacter";

type LastVisitedTrackerProps = {
  characterSlug: string;
};

export function LastVisitedTracker({ characterSlug }: LastVisitedTrackerProps) {
  useEffect(() => {
    setLastCharacterSlug(characterSlug);
  }, [characterSlug]);

  return null;
}
