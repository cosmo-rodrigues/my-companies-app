import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBlacklistFilter } from "redux-persist-transform-filter";

const authTransform = createBlacklistFilter(
  "auth", // which reducer
  ["error", "isLoading", "loggingIn"] // what not to save
);

export function persistRootReducer(reducer: any) {
  return persistReducer(
    {
      storage,
      key: "root",
      transforms: [authTransform],
      whitelist: ["auth"],
    },
    reducer
  );
}
