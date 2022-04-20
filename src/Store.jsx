import { configureStore } from '@reduxjs/toolkit'
// import Counters from "./test/Reducer1"
import Slic from "./Slic"
export default configureStore({
  reducer: {counterstore: Slic}
})