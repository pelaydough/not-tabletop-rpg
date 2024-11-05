import { configureStore } from "@reduxjs/toolkit";

import partySlice from "./features/party/partySlice";

export default configureStore({
  reducer: {
    party: partySlice,
  },
});
