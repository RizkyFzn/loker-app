import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get('https://my-json-server.typicode.com/Rizkyfzn/loker/job_list');
  return response.data;
});

export const addJob = createAsyncThunk('jobs/addJobs', async ({ posisi, job_desc, gaji, requirement, tag, nama_perusahaan, alamat, email }) => {
  const response = await axios.post(`https://my-json-server.typicode.com/Rizkyfzn/loker/job_list`, {
    posisi,
    job_desc,
    gaji,
    requirement,
    tag,
    nama_perusahaan,
    alamat,
    email,
  });
  console.log(response);
  console.log(response.data);
  return response.data;
});

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
  // selectById: (detail) => detail.id,
});

const productSlice = createSlice({
  name: 'product',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [addJob.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
  },
});

export const productSelector = productEntity.getSelectors((state) => state.product);
export default productSlice.reducer;
