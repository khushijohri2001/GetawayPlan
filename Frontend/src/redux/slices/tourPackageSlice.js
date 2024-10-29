import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTourPackageApi, fetchAllTourPackagesApi, fetchTourPackagesByIdApi, postNewTourPackageApi } from "../../ApiServices/TourPackageService";

const fetchAllTourPackages = createAsyncThunk("tourPackage/fetchAllTourPackages", async () => {
  return fetchAllTourPackagesApi();
}
);

const fetchTourPackageById = createAsyncThunk("tourPackage/fetchTourPackageById", async (id) => {
  return fetchTourPackagesByIdApi(id);
}
);

const postNewTourPackage = createAsyncThunk("tourPackage/postNewTourPackage", async (data) => {
  return postNewTourPackageApi(data);
}
);

const deleteTourPackage = createAsyncThunk("tourPackage/deleteTourPackage", async (id) => {
  return deleteTourPackageApi(id);
}
);


export const tourPackageSlice = createSlice({
  name: "tourPackage",
  initialState: {
    allTourPackageData: [],
    filteredTourPackage: [],
    singleTourPackageData: null,
    isLoading: false,
    error: null,
    isPopupOpen: false,
  },
  reducers: {
    filteringTourPackages: (state, action) => {
      let destinationInput = action.payload.destination;
      const durationInput = action.payload.duration.split("-");
      let typeInput = action.payload.type;

      let filterArr = action.payload.allTourPackageData.filter((el) => {

        let f1 = !destinationInput || el.destination.name.toLowerCase().includes(destinationInput.toLowerCase())

        let f2 = durationInput && durationInput[0] === "all" ? el : (el.duration.days <= durationInput[1] && el.duration.nights >= durationInput[0])
        
        let f3 = !typeInput || el.destination.type == typeInput

        return f1 && f2 && f3
      })

      state.filteredTourPackage = filterArr
    }
  },
  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(fetchAllTourPackages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllTourPackages.fulfilled, (state, action) => {
        state.allTourPackageData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllTourPackages.rejected, (state, action) => {
        console.error(
          "Error while fetching all destinations:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // GET
      .addCase(fetchTourPackageById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTourPackageById.fulfilled, (state, action) => {
        state.singleTourPackageData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTourPackageById.rejected, (state, action) => {
        console.error(
          "Error while fetching destination by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // POST
      .addCase(postNewTourPackage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewTourPackage.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.allTourPackageData = [...state.allTourPackageData, action.payload.newTourPackage]
        state.isLoading = false;
      })
      .addCase(postNewTourPackage.rejected, (state, action) => {
        console.error(
          "Error while creating new Tour Package:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteTourPackage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTourPackage.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTourPackage.rejected, (state, action) => {
        console.error(
          "Error while deleting destination by name:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tourPackageSlice.reducer;
export const { filteringTourPackages } = tourPackageSlice.actions;
export { fetchAllTourPackages, fetchTourPackageById, postNewTourPackage, deleteTourPackage };
