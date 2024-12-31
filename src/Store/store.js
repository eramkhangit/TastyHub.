import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from '../Slices/slices'

const store = configureStore({
    reducer:{
       rootReducer : sliceReducer
    }
})

export default store;



// import { configureStore } from '@reduxjs/toolkit'
// import sliceReducer from '../Slices/slices'
  
// const store = configureStore({
//     reducer: {
//         rootReduce: sliceReducer
//     }
    
// })

// export default store