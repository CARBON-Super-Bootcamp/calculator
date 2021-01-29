const {
  createAction,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");
const { initialState,memoryState, write, memory } = require("./reducer");

//write and calculate
const writeAction = createAction("write");

const todoReducer = createReducer(initialState, {
  [writeAction]: write,
});

const store$ = configureStore({
  reducer: todoReducer,
});


//memory
const memoryAction = createAction("memory");

const memoryReducer = createReducer(memoryState, {
  [memoryAction]: memory,
});

const memory$ = configureStore({
  reducer: memoryReducer,
});

module.exports = {
  store$,
  memory$,
  writeAction,
  memoryAction
};
