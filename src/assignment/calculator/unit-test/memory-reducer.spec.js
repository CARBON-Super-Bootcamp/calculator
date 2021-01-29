const {memory} = require("../reducer");

const memoryState = [];

describe("Memory function", () => {

    beforeEach(() => {
        while (memoryState.length) {
            memoryState.pop();
        }
    });

    test("Store to empty memory", () => {
      const action = {
        type: "memory",
        payload:'10',
      };
      memory(memoryState, action);
      expect(memoryState).toHaveLength(1);
      expect(memoryState[0]).toBe('10');
    });

    test("Store to empty memory", () => {
        memoryState.push('8');
        memoryState.push('12');
        const expected = ['8','12','99'];
        const action = {
          type: "memory",
          payload:'99',
        };
        memory(memoryState, action);
        expect(memoryState).toHaveLength(3);
        expect(memoryState).toEqual(expect.arrayContaining(expected));
      });
});
