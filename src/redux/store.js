import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/api-service';
export default configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer
    },
});