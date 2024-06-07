import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EightSleepApi from '../../../network/EightSleepApi';
import type { InitialUserState } from './user.types';

const initialState: InitialUserState = {
  selectedUser: null,
  users: null,
  loading: {
    fetchUsers: false,
  },
  error: {
    fetchUsers: null,
  },
};

// Define the async thunk
export const fetchUsers = createAsyncThunk('data/fetchData', async () => {
  const response = await EightSleepApi.user.fetchUsers();
  return response.data?.users || [];
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser(state, action) {
      const { selectedUser } = action.payload;
      state.selectedUser = selectedUser;
    },
    clearSelectedUser() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading.fetchUsers = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading.fetchUsers = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading.fetchUsers = false;
        state.error.fetchUsers = action.error.message;
      });
  },
});

export const { setSelectedUser, clearSelectedUser } = userSlice.actions;

export default userSlice.reducer;
