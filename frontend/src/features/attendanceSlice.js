import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/attendance";

const getToken = () => localStorage.getItem("token");

// -------- Fetch user history --------
export const fetchHistory = createAsyncThunk(
  "attendance/fetchHistory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/my-history`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      return res.data;
    } catch (err) {
      return rejectWithValue("Cannot load history");
    }
  }
);

// -------- Check-in --------
export const checkIn = createAsyncThunk(
  "attendance/checkIn",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API}/checkin`,
        {},
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue("Check-in failed");
    }
  }
);

// -------- Check-out --------
export const checkOut = createAsyncThunk(
  "attendance/checkOut",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API}/checkout`,
        {},
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue("Check-out failed");
    }
  }
);

// -------- Slice --------
const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    history: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchHistory.pending, state => {
        state.loading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default attendanceSlice.reducer;
