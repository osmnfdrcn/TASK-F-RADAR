import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

import {
  defaultLang,
  supportedLangs,
} from "../../config/i18nConfig";

import { fetchTranslations } from "./i18nAPI";

const initialState = {
  status: "loading",
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {},
};

export const setLangAsync = createAsyncThunk(
  "i18n/setLangAsync",
  async (lang, { getState, dispatch }) => {
    // Default to active locale if none is given.
    const resolvedLang = lang || getState().i18n.lang;
    const translations = await fetchTranslations(
      resolvedLang,
    );
    dispatch(i18nSlice.actions.setLang(resolvedLang));
    return translations;
  },
);

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: {
    [setLangAsync.pending]: (state, { payload }) => {
      state.status = "loading";
    },
    [setLangAsync.fulfilled]: (state, { payload }) => {
      state.translations = payload;
      state.status = "idle";
    },
    [setLangAsync.rejected]: (state, { payload }) => {
      state.status = "idle";
    },

  },
});

export const selectTranslations = (state) =>
  state.i18n.translations[state.i18n.lang];
export const { setLang } = i18nSlice.actions;
export default i18nSlice.reducer;