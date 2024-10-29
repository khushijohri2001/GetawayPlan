import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteCategoryApi, fetchAllCategoriesApi, fetchCategoryByIdApi, postNewCategoryApi, updateCategoryApi } from "../../ApiServices/CategoryService";

const fetchAllCategories = createAsyncThunk("category/fetchAllCategories", async () => {
  return fetchAllCategoriesApi();
}
);

const fetchCategoryById = createAsyncThunk("category/fetchCategoryById", async (id) => {
  return fetchCategoryByIdApi(id);
}
);

const postNewCategory = createAsyncThunk("category/postNewCategory", async (data) => {
  return postNewCategoryApi(data);
}
);

const deleteCategory = createAsyncThunk("category/deleteCategory", async (id) => {
  return deleteCategoryApi(id);
}
);

const updateCategory = createAsyncThunk("category/updateCategory", async (id, data) => {
  return updateCategoryApi(id, data);
}
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    allCategoryData: [],
    singleCategoryData: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.allCategoryData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        console.error(
          "Error while fetching all categories:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // GET
      .addCase(fetchCategoryById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.singleCategoryData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        console.error(
          "Error while fetching category by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // POST
      .addCase(postNewCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewCategory.fulfilled, (state, action) => {
        state.allCategoryData = [...state.allCategoryData, action.payload]
        state.isLoading = false;
      })
      .addCase(postNewCategory.rejected, (state, action) => {
        console.error(
          "Error while creating new category:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        console.error(
          "Error while deleting category by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // UPDATE
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        console.error(
          "Error while updating category",
          action.error.message
        );

        state.isLoading = false;
        state.error = null;
      });
  },
});

export default categorySlice.reducer;
export const { allCategoryData, singleCategoryData } = categorySlice.actions;
export { fetchAllCategories, fetchCategoryById, postNewCategory, deleteCategory, updateCategory };
