// Write your test here

const breadthFirst = require('./challenge01.js');

describe('breadthFirst', () => {

    it('should return the correct output', () => {
        let graph = [
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 0, 1, 0]
        ];
        let root = 0;
        let result = breadthFirst(graph, root);
        expect(result).toEqual({"0": 0, "1": 1, "2": 1, "3": 2, "4": 2, "5": 2, "6": 2, "7": 3, "8": 3, "9": 3});
    });
}

);

