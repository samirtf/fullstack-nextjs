export type Preference = "like" | "dislike";

export type PreferencesState = Record<string, Preference>;

export type PreferencesAction =
  | {
      type: "SET_PREFERENCE";
      payload: { characterSlug: string; value: Preference | null };
    }
  | { type: "LOAD"; payload: Record<string, Preference> }
  | { type: "CLEAR" };

export function preferencesReducer(
  state: PreferencesState,
  action: PreferencesAction
): PreferencesState {
  switch (action.type) {
    case "SET_PREFERENCE": {
      const { characterSlug, value } = action.payload;
      const next = { ...state };
      if (value === null) {
        delete next[characterSlug];
      } else {
        next[characterSlug] = value;
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
