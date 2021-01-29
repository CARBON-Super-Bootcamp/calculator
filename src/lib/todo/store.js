const {
  createAction,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");
const {
  initialState,
  add,
  done,
  undone,
  remove,
  clearAll,
} = require("./reducer");

const addAction = createAction("add");
const doneAction = createAction("done");
const undoneAction = createAction("undone");
const removeAction = createAction("remove");
const clearAllAction = createAction("clearAll");

const todoReducer = createReducer(initialState, {
  [addAction]: add,
  [doneAction]: done,
  [undoneAction]: undone,
  [removeAction]: remove,
  [clearAllAction]: clearAll,
});

const store$ = configureStore({
  reducer: todoReducer,
});

module.exports = {
  store$,
  addAction,
  doneAction,
  undoneAction,
  removeAction,
  clearAllAction,
};
