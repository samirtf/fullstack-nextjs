import {
  preferencesReducer,
  type PreferencesState,
} from "@/lib/reducers/preferences";

describe("preferencesReducer", () => {
  const initialState: PreferencesState = {};

  it("adiciona preferencia like", () => {
    const state = preferencesReducer(initialState, {
      type: "SET_PREFERENCE",
      payload: { characterId: "frodo", value: "like" },
    });
    expect(state).toEqual({ frodo: "like" });
  });

  it("adiciona preferencia dislike", () => {
    const state = preferencesReducer(initialState, {
      type: "SET_PREFERENCE",
      payload: { characterId: "sam", value: "dislike" },
    });
    expect(state).toEqual({ sam: "dislike" });
  });

  it("remove preferencia ao passar null", () => {
    const withPref = { frodo: "like" as const };
    const state = preferencesReducer(withPref, {
      type: "SET_PREFERENCE",
      payload: { characterId: "frodo", value: null },
    });
    expect(state).toEqual({});
  });

  it("sobrescreve preferencia existente", () => {
    const withPref = { frodo: "like" as const };
    const state = preferencesReducer(withPref, {
      type: "SET_PREFERENCE",
      payload: { characterId: "frodo", value: "dislike" },
    });
    expect(state).toEqual({ frodo: "dislike" });
  });

  it("LOAD substitui estado completo", () => {
    const current = { frodo: "like" };
    const state = preferencesReducer(current, {
      type: "LOAD",
      payload: { sam: "dislike", pippin: "like" },
    });
    expect(state).toEqual({ sam: "dislike", pippin: "like" });
  });

  it("CLEAR zera o estado", () => {
    const current = { frodo: "like", sam: "dislike" };
    const state = preferencesReducer(current, { type: "CLEAR" });
    expect(state).toEqual({});
  });
});
