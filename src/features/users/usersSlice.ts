import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../types";

export interface Users {
  users: userType[];
}
const initialState: Users = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<userType[]>) {
      state.users = action.payload;
    },
    updateUser: (state, action: PayloadAction<userType>) => {
      // Redux Toolkit allows to write "mutating" logic in reducer by using Immer library
      const userIndex = state.users.findIndex(
        (user) => user.uuid === action.payload.uuid
      );
      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.uuid !== action.payload);
    },
  },
});

// create actions for each case reducer function
export const { setUsers, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
