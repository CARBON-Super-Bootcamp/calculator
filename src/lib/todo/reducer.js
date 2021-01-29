// setup state
const initialState = [
  { task: "main", done: false },
  { task: "minum", done: true },
];

// reduce function
function add(state, action) {
  state.push({ task: action.payload, done: false });
  return state;
}

function done(state, action) {
  state[action.payload].done = true;
  return state;
}

function undone(state, action) {
  state[action.payload].done = false;
  return state;
}

function remove(state, action) {
  state.splice(action.payload, 1);
  return state;
}

function clearAll(state) {
  while (state.length) {
    state.pop();
  }
  return state;
}

module.exports = {
  initialState,
  add,
  done,
  undone,
  remove,
  clearAll,
};
