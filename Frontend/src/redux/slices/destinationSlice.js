import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteDestinationApi, fetchAllDestinationsApi, fetchDestinationByIdApi, postNewDestinationApi } from "../../ApiServices/DestinationService";

const fetchAllDestinations = createAsyncThunk("destination/fetchAllDestinations", async () => {
    return fetchAllDestinationsApi();
  }
);

const fetchDestinationById = createAsyncThunk("destination/fetchDestinationById", async (id) => {
    return fetchDestinationByIdApi(id);
  }
);

const postNewDestination = createAsyncThunk("destination/postNewDestination", async (data) => {
    return postNewDestinationApi(data);
  }
);

const deleteDestination = createAsyncThunk("category/deleteDestination", async (id) => {
    return deleteDestinationApi(id);
  }
);


export const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    allDestinationData: [],
    singleDestinationData: null,
    filteredDestinations: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filterBySearch: (state, action) => {
      const keyword = action.payload.toLowerCase();
      if (!keyword) {
        state.filteredDestinations = [...state.allDestinationData];
      } else {
      state.filteredDestinations = state.filteredDestinations.filter(
        (data) =>
          data.name.toLowerCase().includes(keyword)
      );
      }
    },
  },
  extraReducers: (builder) => {
    builder

    // GET ALL
      .addCase(fetchAllDestinations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllDestinations.fulfilled, (state, action) => {
        state.allDestinationData = action.payload;
        state.filteredDestinations = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllDestinations.rejected, (state, action) => {
        console.error(
          "Error while fetching all destinations:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // GET
      .addCase(fetchDestinationById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDestinationById.fulfilled, (state, action) => {
        state.singleDestinationData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDestinationById.rejected, (state, action) => {
        console.error(
          "Error while fetching destination by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // POST
      .addCase(postNewDestination.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewDestination.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postNewDestination.rejected, (state, action) => {
        console.error(
          "Error while creating new destination:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteDestination.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteDestination.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteDestination.rejected, (state, action) => {
        console.error(
          "Error while deleting destination by name:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default destinationSlice.reducer;
export const { filterBySearch } = destinationSlice.actions;
export { fetchAllDestinations, fetchDestinationById, postNewDestination, deleteDestination};
