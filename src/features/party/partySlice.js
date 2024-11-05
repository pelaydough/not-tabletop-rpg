import { createSlice } from "@reduxjs/toolkit";

export const partySlice = createSlice({
  name: "party",
  initialState: {
    characters: [
      {
        name: null,
        id: 0,
      },
      {
        name: null,
        id: 1,
      },
      {
        name: null,
        id: 2,
      },
      {
        name: null,
        id: 3,
      },
      {
        name: null,
        id: 4,
      },
    ],
  },
  reducers: {
    recruit: (state, action) => {
      state.characters.push(action);
    },
  },
});

export const { recruit } = partySlice.actions;

export default partySlice.reducer;
