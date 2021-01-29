const { add, clearAll } = require("../lib/todo/reducer");

const initialState = [
  { task: "main", done: false },
  { task: "minum", done: true },
];

describe("todo function", () => {
  beforeEach(() => {
    while (initialState.length) {
      initialState.pop();
    }
    initialState.push(
      { task: "main", done: false },
      { task: "minum", done: true }
    );
  });
  test("add new todo", () => {
    const action = {
      type: "add",
      payload: "makan",
    };
    add(initialState, action);
    expect(initialState).toHaveLength(3);
    expect(initialState[2].task).not.toBe("mandi");
  });

  test("add new todo, then clear all", () => {
    const action = {
      type: "add",
      payload: "makan",
    };
    add(initialState, action);
    expect(initialState).toHaveLength(3);
    expect(initialState[2].task).not.toBe("mandi");

    clearAll(initialState);
    expect(initialState).toHaveLength(0);
  });
});
