const { write } = require("../reducer");

let initialState = '0';

describe("write function", () => {
    test("write number one digit", () => {
      const action = {
        type: "write",
        payload: {val:'1',type:'number'},
      };
      expect(write(initialState, action)).toBe("1");
    });

    test("write number more than one digit", () => {
        initialState = '1';
        const action = {
          type: "write",
          payload: {val:'9',type:'number'},
        };
        expect(write(initialState, action)).toBe("19");
    });

    test("write operator", () => {
        initialState = '10';
        const action = {
          type: "write",
          payload: {val:'+',type:'operator'},
        };
        expect(write(initialState, action)).toBe("10+");
    });

    test("write result", () => {
        initialState = '1+3';
        const action = {
          type: "write",
          payload: {val:'',type:'equal'},
        };
        expect(write(initialState, action)).toBe("4");
    });

    test("write invalid type", () => {
        initialState = '2/5';
        const action = {
          type: "write",
          payload: {val:'',type:'zzzzzz'},
        };
        expect(write(initialState, action)).toBe(initialState);
    });

    test("write operator factorial", () => {
      initialState = '20';
      const action = {
        type: "write",
        payload: {val:'!',type:'operator'},
      };
      expect(write(initialState, action)).toBe("20!");
    });

    test("write result operator factorial", () => {
      initialState = '4!';
      const action = {
        type: "write",
        payload: {val:'',type:'equal'},
      };
      expect(write(initialState, action)).toBe("24");
    });
    
});

describe("remove function", () => {
    test("del function 1 digit", () => {
      initialState = '9';
      const action = {
        type: "write",
        payload: {val:'',type:'del'},
      };
      expect(write(initialState, action)).toBe("0");
    });

    test("del function 2 digit", () => {
        initialState = '29';
        const action = {
          type: "write",
          payload: {val:'',type:'del'},
        };
        expect(write(initialState, action)).toBe("2");
    });

    test("del function when panel show 0", () => {
        initialState = '0';
        const action = {
          type: "write",
          payload: {val:'',type:'del'},
        };
        expect(write(initialState, action)).toBe("0");
    });

    test("clear function", () => {
        initialState = '100000';
        const action = {
          type: "write",
          payload: {val:'',type:'clear'},
        };
        expect(write(initialState, action)).toBe("0");
    });
});

