import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EightSleepApi from '../../../network/EightSleepApi';
import type { InitialUserState, User } from './user.types';

const initialState: InitialUserState = {
  selectedUser: null,
  users: null,
  loading: {
    fetchSingleUser: false,
    fetchUsers: false,
  },
  error: {
    fetchSingleUser: null,
    fetchUsers: null,
  },
};

// async thunks
export const fetchUsers = createAsyncThunk('data/fetchAllUsers', async () => {
  const response = await EightSleepApi.user.fetchAllUsers();
  return response.data?.users || [];
});

export const fetchSingleUser = createAsyncThunk(
  'data/fetchSingleUser',
  async (userId: string, { rejectWithValue }) => {
    if (!userId) {
      rejectWithValue(
        `Can't fetch user without a user id. (value given: ${userId})`,
      );
    }
    const response = await EightSleepApi.user.fetchSingleUser(userId);
    return (
      {
        userId,
        intervals: response.data?.intervals ?? [],
      } || []
    );
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearSelectedUser() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // fetchUsers
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
      })
      // fetchSingleUser
      .addCase(fetchSingleUser.pending, state => {
        state.loading.fetchSingleUser = true;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loading.fetchSingleUser = false;
        const { userId, intervals } = action.payload;
        const fetchedUser = state.users?.find(
          (item: User) => item.id === userId,
        );
        if (fetchedUser) {
          state.selectedUser = {
            user: fetchedUser,
            intervals,
          };
        }
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.loading.fetchSingleUser = false;
        state.error.fetchSingleUser = action.error.message;
      });
  },
});

export const { clearSelectedUser } = userSlice.actions;

export default userSlice.reducer;
