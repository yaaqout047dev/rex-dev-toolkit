// import {createStore,applyMiddleware} from 'redux' 
// import {thunk} from 'redux-thunk'
// import reducers from './Reducers/index' 



// const toEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
// const Store = createStore(reducers,toEnhancer(applyMiddleware(thunk)) )

// export default Store;


//////////////////////////////////////////////   

import {configureStore} from '@reduxjs/toolkit'
import { counterSlice } from './Reducers/CounterSlice';


const Store = configureStore({
    reducer: {
      counter : counterSlice,
    },
})


export default Store;
