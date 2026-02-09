export type Preference = "like" | "dislike";

export type PreferencesState = Record<string, Preference>;

export type PreferencesAction =
  | {
      type: "SET_PREFERENCE";
      payload: { characterId: string; value: Preference | null };
    }
  | { type: "LOAD"; payload: Record<string, Preference> }
  | { type: "CLEAR" };

export function preferencesReducer(
  state: PreferencesState,
  action: PreferencesAction
): PreferencesState {
  switch (action.type) {
    case "SET_PREFERENCE": {
      const { characterId, value } = action.payload;
      const next = { ...state };
      if (value === null) {
        delete next[characterId];
      } else {
        next[characterId] = value;
      }
      return next;
    }
    case "LOAD":
      return { ...action.payload };
    case "CLEAR":
      return {};
    default:
      return state;
  }
}
