import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserApi, fetchAllUsersApi, fetchUserByIdApi, loginUserApi, logoutUserApi, postNewUserApi } from "../../ApiServices/UserService";

const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", async () => {
  return fetchAllUsersApi();
}
);

const fetchUserById = createAsyncThunk("user/fetchUserById", async (id) => {
  return fetchUserByIdApi(id);
}
);

const postNewUser = createAsyncThunk("user/postNewUser", async (data) => {
  return postNewUserApi(data);
}
);

const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  return deleteUserApi(id);
}
);

const loginUser = createAsyncThunk("user/loginUser", async (data) => {
  return loginUserApi(data);
}
);

const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  return logoutUserApi();
}
);

const setUserInLs = (state) => {
  localStorage.setItem("userAuth", JSON.stringify(state));
};

const getUserFromLS = () => {
  const storedState = localStorage.getItem("userAuth");

  if (storedState) {
    try {
      return JSON.parse(storedState);
    } catch (error) {
      console.error("Failed to parse auth data from localStorage", error);
      return null;
    }
  }
  return null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUserData: [],
    singleUserData: getUserFromLS(),
    isLoading: false,
    error: null,
    invalidRoleError: false,
    isAuthenticated: false,
  },
  reducers: {
    notAdminError: (state, action) => {
      state.invalidRoleError = true
    },
    resetError: (state, action) => {
      state.invalidRoleError = false
      state.error = false
    }
  },
  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUserData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while fetching all users";
      })

      // GET
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.singleUserData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while fetching use" || action.payload.error;
      })

      // POST
      .addCase(postNewUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewUser.fulfilled, (state, action) => {
        state.allUserData = [...state.allUserData, action.payload]
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(postNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while Creating New User";
      })

      // DELETE
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while deleting user";
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.singleUserData = action.payload
        state.isLoading = false;
        setUserInLs(state.singleUserData);
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while logging in"
      })

      // LOGOUT
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.removeItem('userAuth');
        state.singleUserData = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error while logging out user";
      });
  },
});

export default userSlice.reducer;
export const { notAdminError, resetError } = userSlice.actions;
export { fetchAllUsers, fetchUserById, postNewUser, deleteUser, loginUser, logoutUser };
