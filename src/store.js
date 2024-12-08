import { configureStore } from '@reduxjs/toolkit'
import langReducer from './slices/langSlice'
// import themeReducer from './slices/themeSlice'

export default configureStore({
   reducer: {
      lang: langReducer,
      // theme: themeReducer,
   },
})