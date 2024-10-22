import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteBookingApi,
  fetchAllBookingsApi,
  fetchBookingByIdApi,
  postNewBookingApi,
  updateBookingApi,
} from "../../ApiServices/BookingService";

const fetchAllBookings = createAsyncThunk(
  "booking/fetchAllBookings",
  async () => {
    return fetchAllBookingsApi();
  }
);

const fetchBookingById = createAsyncThunk(
  "booking/fetchBookingById",
  async (id) => {
    return fetchBookingByIdApi(id);
  }
);

const postNewBooking = createAsyncThunk(
  "booking/postNewBooking",
  async (data) => {
    return postNewBookingApi(data);
  }
);

const deleteBooking = createAsyncThunk("booking/deleteBooking", async (id) => {
  return deleteBookingApi(id);
});

const updateBooking = createAsyncThunk(
  "booking/updateBooking",
  async (action) => {
    const { id, status } = action;

    return updateBookingApi(id, status);
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    allBookingData: [],
    singleBookingData: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(fetchAllBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllBookings.fulfilled, (state, action) => {
        state.allBookingData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllBookings.rejected, (state, action) => {
        console.error(
          "Error while fetching all bookings:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // GET
      .addCase(fetchBookingById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.singleBookingData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        console.error(
          "Error while fetching booking by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // POST
      .addCase(postNewBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewBooking.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postNewBooking.rejected, (state, action) => {
        console.error(
          "Error while creating new Booking:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // DELETE
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        console.error(
          "Error while deleting booking by id:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      })

      // UPDATE
      .addCase(updateBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBookingData = state.allBookingData.map((el) =>
          el._id === action.payload.id
            ? { ...el, status: action.payload.status }
            : el
        );
      })

      .addCase(updateBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
// export const { } = bookingSlice.actions;
export {
  fetchAllBookings,
  fetchBookingById,
  postNewBooking,
  deleteBooking,
  updateBooking,
};
